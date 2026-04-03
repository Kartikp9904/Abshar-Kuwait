import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Globe, MessageCircle } from 'lucide-react';

const Footer = ({ isRtl }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" style={{ background: '#001326', color: 'rgba(255,255,255,0.7)', padding: '5rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Brand Info */}
          <div>
            <h3 style={{ color: 'var(--white)', fontSize: '1.8rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>
              {isRtl ? 'أبشار الكويت' : 'Abshar Kuwait'}
            </h3>
            <p style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
              {isRtl 
                ? 'مطعم ومقهى أبشار الكويت هو وجهتكم المفضلة للمأكولات الإيرانية الأصيلة في قلب الكويت. نحن نفخر بجودة مكوناتنا وطعمنا الذي لا يقاوم.' 
                : 'Abshar Kuwait Restaurant & Cafe is your premier destination for authentic Iranian cuisine in the heart of Kuwait. We take pride in the quality of our ingredients and our irresistible flavors.'}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://absharq8.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-light)' }}><Globe size={24} /></a>
              <a href="#" style={{ color: 'var(--secondary-light)' }}><MessageCircle size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
            <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
               {isRtl ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#menu">{isRtl ? 'القائمة' : 'Our Menu'}</a></li>
              <li><a href="#about">{isRtl ? 'من نحن' : 'About Us'}</a></li>
              <li><a href="#quality">{isRtl ? 'التزامنا بالجودة' : 'Quality Standards'}</a></li>
              <li><a href="https://absharq8.com/branches">{isRtl ? 'الفروع' : 'Our Branches'}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
            <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
               {isRtl ? 'اتصل بنا' : 'Contact Us'}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Phone size={20} style={{ color: 'var(--secondary)' }} />
                <span>92279494</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <MapPin size={20} style={{ color: 'var(--secondary)' }} />
                <span>{isRtl ? 'أبو الحصانية، الكويت' : 'Abu Al Hasaniya, Kuwait'}</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Mail size={20} style={{ color: 'var(--secondary)' }} />
                <span>info@absharq8.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ pt: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.9rem' }}>
           <p>© {currentYear} {isRtl ? 'أبشار الكويت. جميع الحقوق محفوظة.' : 'Abshar Kuwait. All Rights Reserved.'}</p>
           <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.4)' }}>
              Powered by <a href="https://mnasati.com" style={{ color: 'var(--secondary)' }}>MNASATI</a>
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
