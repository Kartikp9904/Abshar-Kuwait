import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone } from 'lucide-react';

const Navbar = ({ isRtl, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: isRtl ? 'الرئيسية' : 'Home', href: '#' },
    { name: isRtl ? 'من نحن' : 'About Us', href: '#about' },
    { name: isRtl ? 'القائمة' : 'Menu', href: '#menu' },
    { name: isRtl ? 'الجودة' : 'Quality', href: '#quality' },
    { name: isRtl ? 'الفروع' : 'Branches', href: '#branches' },
    { name: isRtl ? 'اتصل بنا' : 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
      style={{
        paddingLeft: '2rem',
        paddingRight: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* Logo */}
      <div className="logo" style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
        {isRtl ? 'أبشار الكويت' : 'Abshar Kuwait'}
      </div>

      {/* Desktop Links */}
      <div className="desktop-links" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            style={{ 
              color: isScrolled ? 'var(--primary)' : 'var(--primary)', 
              fontWeight: 500,
              fontSize: '1rem'
            }}
            className="nav-link"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Desktop Hidden/Show Logic in CSS but for now flex */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          .desktop-links { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link { position: relative; }
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
      `}} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {/* Language Switcher */}
        <button 
          onClick={toggleLanguage}
          className="btn"
          style={{ 
            padding: '0.5rem 1rem', 
            borderRadius: '20px', 
            border: '1px solid var(--secondary)',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'transparent',
            fontSize: '0.9rem'
          }}
        >
          <Globe size={16} />
          {isRtl ? 'English' : 'العربية'}
        </button>

        {/* Call Now Button */}
        <a 
          href="tel:92279494" 
          className="btn btn-gold"
          style={{ display: 'none', padding: '0.6rem 1.2rem', borderRadius: '4px' }}
        >
          <Phone size={18} style={{ marginRight: '0.5rem' }} />
          {isRtl ? 'اطلب الآن' : 'Order Now'}
        </a>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (min-width: 768px) {
            .btn-gold { display: flex !important; }
          }
        `}} />

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              padding: '2rem',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              textAlign: isRtl ? 'right' : 'left'
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:92279494" 
              className="btn btn-gold"
              style={{ width: '100%', marginTop: '1rem' }}
            >
              {isRtl ? 'اطلب الآن' : 'Order Now'}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
