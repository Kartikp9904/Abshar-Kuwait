import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Fish, Beef } from 'lucide-react';

const Quality = ({ isRtl }) => {
  const features = [
    {
      icon: <Beef size={40} />,
      title: isRtl ? 'لحوم طازجة' : 'Premium Beef',
      description: isRtl ? 'نستخدم أجود أنواع اللحوم المحلية الطازجة يومياً لضمان أعلى جودة.' : 'We use only the finest local fresh beef, delivered daily for maximum quality.'
    },
    {
      icon: <Fish size={40} />,
      title: isRtl ? 'أسماك منتقاة' : 'Selected Fish',
      description: isRtl ? 'مجموعة متنوعة من الأسماك الطازجة: هامور، زبيدي، وسيباس.' : 'A selection of fresh fish including Hamour, Zubaidi, and Sea Bass.'
    },
    {
      icon: <CheckCircle size={40} />,
      title: isRtl ? 'حلال ١٠٠٪' : '100% Halal',
      description: isRtl ? 'جميع منتجات الدجاج واللحوم لدينا معتمدة حلال ومذبوحة وفقاً للشريعة.' : 'All our chicken and meat products are certified Halal and prepared according to Sharia.'
    },
    {
      icon: <ShieldCheck size={40} />,
      title: isRtl ? 'جودة مضمونة' : 'Guaranteed Quality',
      description: isRtl ? 'التزامنا بالجودة يبدأ من مطبخنا وينتهي برضاك التام.' : 'Our commitment to quality starts in our kitchen and ends with your satisfaction.'
    }
  ];

  return (
    <section id="quality" className="section-padding" style={{ background: 'var(--primary)', color: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 style={{ color: 'var(--secondary)', fontSize: '2.5rem', marginBottom: '1rem' }}>
              {isRtl ? 'التزامنا بالجودة' : 'Our Commitment to Quality'}
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: '#ccc', fontSize: '1.1rem' }}>
              {isRtl ? 'في أبشار الكويت، نعتبر الجودة هي سر نجاحنا والأساس الذي نبني عليه علاقتنا مع عملائنا.' : 'At Abshar Kuwait, quality is the secret to our success and the foundation of our relationship with our customers.'}
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '2.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                transition: 'var(--transition-smooth)'
              }}
              whileHover={{ 
                background: 'rgba(255,255,255,0.1)', 
                transform: 'translateY(-10px)',
                borderColor: 'var(--secondary)'
              }}
            >
              <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h3 style={{ color: 'var(--white)', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                {item.title}
              </h3>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             style={{ padding: '2rem', border: '1px dashed var(--secondary)', borderRadius: '12px' }}
          >
            <p style={{ fontStyle: 'italic', color: 'var(--secondary)', fontSize: '1.2rem' }}>
               {isRtl ? 'المصدر: الشركة الكويتية للمواشي وشركة الصفاة (دجاج كويتي)' : 'Source: Kuwait Livestock Transport and Trading Co. & Al-Safat (Kuwaiti Chicken)'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
