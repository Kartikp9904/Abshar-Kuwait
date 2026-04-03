import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ShoppingBag } from 'lucide-react';

const Navbar = ({ isRtl, toggleLanguage, cartCount, onCartOpen, onCartClose }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: isRtl ? 'الرئيسية' : 'Home', target: null },
    { name: isRtl ? 'من نحن' : 'About Us', target: 'about' },
    { name: isRtl ? 'القائمة' : 'Menu', target: 'menu' },
    { name: isRtl ? 'الجودة' : 'Quality', target: 'quality' },
    { name: isRtl ? 'الفروع' : 'Branches', target: 'branches' },
    { name: isRtl ? 'اتصل بنا' : 'Contact', target: 'contact' },
  ];

  const scrollTo = (target) => {
    setMobileMenuOpen(false);
    if (onCartClose) onCartClose(); // close cart when navigating
    if (!target) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(target);
    if (el) {
      const offset = 80; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    transition: 'all 0.4s ease',
    background: isScrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  };

  return (
    <nav style={navStyle}>
      {/* Main bar */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <button
          onClick={() => scrollTo(null)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--primary)',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.02em',
            padding: 0,
          }}
        >
          {isRtl ? 'أبشار الكويت' : 'Abshar Kuwait'}
        </button>

        {/* Desktop Links */}
        <div className="nav-desktop-links" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.target)}
              className="nav-link"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--primary)',
                fontWeight: 500,
                fontSize: '0.95rem',
                fontFamily: 'var(--font-body)',
                padding: '0.25rem 0',
              }}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right-side actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>

          {/* Cart Icon */}
          <button
            onClick={onCartOpen}
            title={isRtl ? 'السلة' : 'Cart'}
            style={{
              position: 'relative',
              background: 'transparent',
              border: 'none',
              color: 'var(--primary)',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-4px',
                  background: 'var(--secondary)',
                  color: '#000',
                  fontSize: '0.65rem',
                  fontWeight: 'bold',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid white',
                }}
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '20px',
              border: '1px solid var(--secondary)',
              color: 'var(--primary)',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              fontFamily: 'var(--font-body)',
              whiteSpace: 'nowrap',
            }}
          >
            <Globe size={15} />
            {isRtl ? 'English' : 'العربية'}
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-hamburger"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--primary)',
              cursor: 'pointer',
              display: 'none', // overridden by CSS below
              alignItems: 'center',
              padding: '0.25rem',
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'white',
              borderTop: '1px solid #eee',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem 1.5rem 1.5rem',
              gap: '0',
              textAlign: isRtl ? 'right' : 'left',
            }}>
              {navLinks.map((link, i) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.target)}
                  style={{
                    background: 'none',
                    border: 'none',
                    borderBottom: i < navLinks.length - 1 ? '1px solid #f0f0f0' : 'none',
                    color: 'var(--primary)',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    fontFamily: isRtl ? 'var(--font-arabic)' : 'var(--font-body)',
                    padding: '1rem 0',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: isRtl ? 'right' : 'left',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.name}
                </button>
              ))}

              {/* View Cart shortcut */}
              <button
                onClick={() => { setMobileMenuOpen(false); onCartOpen(); }}
                style={{
                  marginTop: '1rem',
                  padding: '0.9rem',
                  borderRadius: '8px',
                  background: 'var(--primary)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontFamily: isRtl ? 'var(--font-arabic)' : 'var(--font-body)',
                }}
              >
                <ShoppingBag size={20} />
                {isRtl ? 'عرض السلة' : 'View Cart'}
                {cartCount > 0 && (
                  <span style={{
                    background: 'var(--secondary)',
                    color: '#000',
                    borderRadius: '50%',
                    width: '22px',
                    height: '22px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scoped responsive CSS */}
      <style>{`
        .nav-hamburger { display: flex !important; }
        .nav-desktop-links { display: none !important; }

        @media (min-width: 1024px) {
          .nav-hamburger { display: none !important; }
          .nav-desktop-links { display: flex !important; }
        }

        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--secondary);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        [dir="rtl"] .nav-link::after { left: auto; right: 0; }
      `}</style>
    </nav>
  );
};

export default Navbar;
