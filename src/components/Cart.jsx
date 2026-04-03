import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Trash2, Send, ShoppingBag } from 'lucide-react';

const Cart = ({ isOpen, onClose, cart, removeFromCart, updateQuantity, isRtl }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return sum + price * item.quantity;
  }, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert(isRtl ? 'يرجى ملء جميع البيانات' : 'Please fill all fields');
      return;
    }

    const orderDetails = cart
      .map(item => `${item.name} x${item.quantity} (${item.price})`)
      .join('\n');

    const message = encodeURIComponent(
      `${isRtl ? '*طلب جديد من أبشار الكويت*' : '*New Order from Abshar Kuwait*'}\n\n` +
      `${isRtl ? '*التفاصيل:*' : '*Details:*'}\n${orderDetails}\n\n` +
      `${isRtl ? '*الإجمالي:*' : '*Total:*'} ${subtotal.toFixed(3)} KD\n\n` +
      `${isRtl ? '*الاسم:*' : '*Name:*'} ${customerInfo.name}\n` +
      `${isRtl ? '*الهاتف:*' : '*Phone:*'} ${customerInfo.phone}\n` +
      `${isRtl ? '*العنوان:*' : '*Address:*'} ${customerInfo.address}`
    );

    window.open(`https://wa.me/96592279494?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,15,31,0.6)',
              backdropFilter: 'blur(4px)',
              zIndex: 100
            }}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: isRtl ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: '70px',
              bottom: 0,
              [isRtl ? 'left' : 'right']: 0,
              width: '100%',
              maxWidth: '450px',
              background: 'var(--white)',
              zIndex: 101,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
            }}
          >

            {/* Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.5 }}>
                  <ShoppingBag size={64} style={{ margin: '0 auto 1.5rem' }} />
                  <p>{isRtl ? 'السلة فارغة حالياً' : 'Your cart is empty'}</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {cart.map((item) => (
                    <div key={item.name} style={{
                      display: 'flex',
                      gap: '1rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid #f5f5f5'
                    }}>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{item.name}</h4>
                        <p style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>{item.price}</p>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          border: '1px solid #ddd', 
                          borderRadius: '4px',
                          padding: '2px'
                        }}>
                          <button 
                            onClick={() => updateQuantity(item.name, -1)}
                            style={{ background: 'transparent', border: 'none', padding: '4px', cursor: 'pointer' }}
                          >
                            <Minus size={14} />
                          </button>
                          <span style={{ minWidth: '24px', textAlign: 'center', fontWeight: 'bold' }}>{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.name, 1)}
                            style={{ background: 'transparent', border: 'none', padding: '4px', cursor: 'pointer' }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.name)}
                          style={{ background: 'transparent', border: 'none', color: '#ff4d4f', cursor: 'pointer' }}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Checkout Form */}
                  <form onSubmit={handleCheckout} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', borderBottom: '2px solid var(--secondary)', width: 'fit-content' }}>
                      {isRtl ? 'بيانات التوصيل' : 'Delivery Details'}
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>{isRtl ? 'الاسم بالكامل' : 'Full Name'}</label>
                      <input 
                        type="text" 
                        required
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd', outline: 'none' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>{isRtl ? 'رقم الهاتف' : 'Phone Number'}</label>
                      <input 
                        type="tel" 
                        required
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd', outline: 'none' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>{isRtl ? 'العنوان بالتفصيل' : 'Detailed Address'}</label>
                      <textarea 
                        required
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                        style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd', outline: 'none', minHeight: '80px' }}
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{ padding: '1.25rem 2rem', borderTop: '1px solid #eee', background: '#f9f9f9', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cart.length > 0 && (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    <span>{isRtl ? 'الإجمالي:' : 'Total:'}</span>
                    <span style={{ color: 'var(--primary)' }}>{subtotal.toFixed(3)} KD</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="btn btn-gold"
                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', fontSize: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <Send size={20} />
                    {isRtl ? 'إرسال الطلب عبر الواتساب' : 'Submit via WhatsApp'}
                  </button>
                </>
              )}
              <button
                onClick={onClose}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1.5px solid #ddd',
                  background: 'transparent',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.background = '#f0f0f0'}
                onMouseOut={e => e.currentTarget.style.background = 'transparent'}
              >
                ✕ {isRtl ? 'إغلاق السلة' : 'Close Cart'}
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
