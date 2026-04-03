import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quality from './components/Quality';
import Menu from './components/Menu';
import Branches from './components/Branches';
import Footer from './components/Footer';
import Cart from './components/Cart';

const App = () => {
  const [isRtl, setIsRtl] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = isRtl ? 'ar' : 'en';
  }, [isRtl]);

  const toggleLanguage = () => setIsRtl(!isRtl);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.name === item.name);
      if (existingItem) {
        return prevCart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const updateQuantity = (name, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.name === name) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  return (
    <div className={`app-container ${isRtl ? 'rtl' : 'ltr'}`}>
      <Navbar 
        isRtl={isRtl} 
        toggleLanguage={toggleLanguage} 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartOpen={() => setIsCartOpen(true)}
        onCartClose={() => setIsCartOpen(false)}
      />
      <Hero isRtl={isRtl} onOrderClick={() => {
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
      }} />
      
      {/* Expanded About Section */}
      <section id="about" className="section-padding" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-subtitle">{isRtl ? 'قصتنا' : 'Our Story'}</span>
              <h2 className="section-title">{isRtl ? 'أصالة المذاق الإيراني' : 'The Essence of Persian Flavor'}</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--midnight)', opacity: 0.8, marginBottom: '2rem' }}>
                {isRtl 
                  ? 'مطعم ومقهى أبشار الكويت هو وجهتكم المفضلة للمأكولات الإيرانية الأصيلة في قلب الكويت. نحن نفخر بجودة مكوناتنا وطعمنا الذي لا يقاوم، حيث نقدم لكم تجربة فريدة تجمع بين التقاليد العريقة والحداثة الراقية.' 
                  : 'Abshar Kuwait Restaurant & Cafe is your premier destination for authentic Iranian cuisine in the heart of Kuwait. We take pride in the quality of our ingredients and our irresistible flavors, offering you a unique experience that combines ancient traditions with modern elegance.'}
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--midnight)', opacity: 0.8 }}>
                {isRtl 
                  ? 'منذ انطلاقنا، وضعنا نصب أعيننا التميز في تقديم المشويات والحلويات الإيرانية التقليدية، مع التركيز على استخدام أفضل أنواع اللحوم والأسماك الطازجة يومياً.' 
                  : 'Since our inception, we have set our sights on excellence in serving traditional Iranian grills and desserts, with a focus on using the finest types of fresh meat and fish daily.'}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{
                width: '100%',
                height: '500px',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="/assets/images/about_heritage.png" 
                  alt="Authentic Iranian Dining"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                [isRtl ? 'left' : 'right']: '-20px',
                background: 'var(--secondary)',
                padding: '2rem',
                borderRadius: '0.5rem',
                color: 'var(--midnight)',
                zIndex: 1
              }}>
                <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>10+</h4>
                <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>{isRtl ? 'سنوات من الخبرة' : 'Years of Excellence'}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Menu isRtl={isRtl} addToCart={addToCart} />
      <Quality isRtl={isRtl} />
      <Branches isRtl={isRtl} />
      <Footer isRtl={isRtl} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        isRtl={isRtl}
      />
    </div>
  );
};

export default App;
