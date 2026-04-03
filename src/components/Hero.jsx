import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero_iranian.png';

const Hero = ({ isRtl }) => {
  return (
    <section className="hero" style={{ 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <img 
          src={heroImg} 
          alt="Iranian Cuisine" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)',
          zIndex: 2
        }} />
      </div>

      {/* Content */}
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 3, 
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 style={{ 
            color: 'var(--white)', 
            fontSize: 'max(3.5rem, 6vw)', 
            marginBottom: '1rem',
            textShadow: '0 4px 10px rgba(0,0,0,0.5)',
            letterSpacing: isRtl ? '0' : '-0.02em'
          }}>
            {isRtl ? 'أصالة المذاق الإيراني' : 'Authentic Iranian Heritage'}
          </h1>
          <p style={{ 
            color: '#eee', 
            fontSize: '1.25rem', 
            maxWidth: '700px', 
            margin: '0 auto 2.5rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 300
          }}>
            {isRtl ? 'نأخذك في رحلة إلى قلب طهران مع كل لقمة. جرب أفضل المشويات والمصبوبات التقليدية في الكويت.' : 'Embark on a culinary journey to the heart of Persia. Experience the finest traditional grills and stews in the heart of Kuwait.'}
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a 
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-gold"
              style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
            >
              {isRtl ? 'استكشف القائمة' : 'Explore Menu'}
            </motion.a>
            <motion.a 
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
              style={{ 
                padding: '1rem 2.5rem', 
                fontSize: '1.1rem', 
                background: 'rgba(255,255,255,0.1)', 
                backdropFilter: 'blur(5px)',
                color: 'var(--white)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
            >
              {isRtl ? 'قصتنا' : 'Our Story'}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: 'var(--white)',
          opacity: 0.6
        }}
      >
        <div style={{ width: '2rem', height: '3.5rem', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '20px', display: 'flex', justifyContent: 'center', padding: '5px' }}>
          <div style={{ width: '4px', height: '8px', background: 'var(--secondary)', borderRadius: '2px' }} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
