import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

const Branches = ({ isRtl }) => {
  const branches = [
    {
      name: isRtl ? 'فرع أبو الحصانية' : 'Abu Al Hasaniya Branch',
      address: isRtl ? 'أبو الحصانية، قطعة 10، طريق الملك فهد بن عبد العزيز' : 'Abu Al Hasaniya, Block 10, King Fahd Bin Abdulaziz Rd',
      phones: ['92279494', '92279393'],
      hours: isRtl ? 'يومياً: 12:00 م - 11:30 م' : 'Daily: 12:00 PM - 11:30 PM',
      mapUrl: 'https://maps.app.goo.gl/AbuAlHasaniya' // Placeholder
    }
  ];

  return (
    <section id="branches" className="section-padding" style={{ background: '#000F1F', color: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-subtitle"
            style={{ color: 'var(--secondary-light)' }}
          >
            {isRtl ? 'تفضل بزيارتنا' : 'Visit Us'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
            style={{ color: 'var(--white)' }}
          >
            {isRtl ? 'فروعنا' : 'Our Branches'}
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1rem',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle at top right, rgba(197, 160, 89, 0.1), transparent)',
                zIndex: 0
              }} />

              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--secondary)', marginBottom: '1.5rem', position: 'relative' }}>
                {branch.name}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} style={{ color: 'var(--secondary-light)', marginTop: '0.2rem' }} />
                  <p style={{ opacity: 0.8, lineHeight: '1.5' }}>{branch.address}</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Phone size={20} style={{ color: 'var(--secondary-light)' }} />
                  <div style={{ display: 'flex', gap: '0.5rem', direction: 'ltr' }}>
                    {branch.phones.map((phone, i) => (
                      <span key={i} style={{ opacity: 0.8 }}>{phone}{i < branch.phones.length - 1 ? ' / ' : ''}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Clock size={20} style={{ color: 'var(--secondary-light)' }} />
                  <p style={{ opacity: 0.8 }}>{branch.hours}</p>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
                <a 
                  href={branch.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.5rem',
                    background: 'var(--secondary)',
                    color: 'var(--midnight)',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  className="btn-hover"
                >
                  <MapPin size={16} />
                  {isRtl ? 'الموقع على الخريطة' : 'Google Maps'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
