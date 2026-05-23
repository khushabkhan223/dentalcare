import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const WA_PATH =
  'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'

const INFO_PILLS = [
  { icon: '📍', text: 'Koramangala, Bangalore' },
  { icon: '🕐', text: 'Mon–Sat: 9AM – 8PM' },
  { icon: '⚡', text: 'Same Day Appointments' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Contact() {
  return (
    <PageWrapper>
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* header */}
          <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '1px', background: '#0D9488', opacity: 0.4 }} />
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: '#0D9488', letterSpacing: '3px', textTransform: 'uppercase' }}>
                GET IN TOUCH
              </p>
              <div style={{ width: '36px', height: '1px', background: '#0D9488', opacity: 0.4 }} />
            </div>
            <h1 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 600,
              fontSize: 'clamp(34px,4.5vw,50px)', color: '#1E3A5F',
              letterSpacing: '-0.5px', marginBottom: '16px',
            }}>
              Book Your Appointment
            </h1>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#64748B',
              maxWidth: '480px', margin: '0 auto', lineHeight: 1.65,
            }}>
              The easiest way to book is through WhatsApp. We'll confirm your slot within minutes.
            </p>
          </motion.div>

          {/* main WhatsApp card */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              maxWidth: '560px', margin: '0 auto 44px',
              background: 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(13,148,136,0.1)',
              borderRadius: '24px', padding: 'clamp(32px,5vw,52px) clamp(24px,5vw,44px)',
              boxShadow: '0 8px 44px rgba(30,58,95,0.08)', textAlign: 'center',
            }}
          >
            {/* pulsing WA logo */}
            <motion.div
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block', marginBottom: '20px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="56" height="56">
                <path fill="#25D366" d={WA_PATH} />
              </svg>
            </motion.div>

            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '24px',
              color: '#1A1A2E', letterSpacing: '-0.3px', marginBottom: '11px',
            }}>
              Chat With Us on WhatsApp
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
              color: '#64748B', lineHeight: 1.65, marginBottom: '28px',
            }}>
              Tell us your concern, preferred date, and time. We'll get back to you instantly.
            </p>

            <motion.a
              href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(37,211,102,0.32)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-block', fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500, fontSize: '16px', color: 'white',
                background: '#25D366', padding: '16px 44px', borderRadius: '50px',
                textDecoration: 'none', boxShadow: '0 4px 16px rgba(37,211,102,0.22)',
              }}
            >
              Open WhatsApp
            </motion.a>
          </motion.div>

          {/* info pills */}
          <motion.div
            {...fadeUp(0.18)}
            style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}
          >
            {INFO_PILLS.map(({ icon, text }) => (
              <div key={text} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(13,148,136,0.1)', borderRadius: '50px',
                padding: '10px 20px', boxShadow: '0 2px 12px rgba(30,58,95,0.05)',
                fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#1A1A2E',
              }}>
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* direct contact */}
          <motion.div {...fadeUp(0.26)} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#64748B', marginBottom: '13px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Or reach us directly
            </p>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+919876543210" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '15px', color: '#0D9488', textDecoration: 'none' }}>
                📞 +91 98765 43210
              </a>
              <a href="mailto:hello@smilecaredental.in" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '15px', color: '#0D9488', textDecoration: 'none' }}>
                ✉️ hello@smilecaredental.in
              </a>
            </div>
          </motion.div>

          {/* map */}
          <motion.div
            {...fadeUp(0.32)}
            style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(13,148,136,0.1)',
              borderRadius: '24px', padding: '14px',
              boxShadow: '0 4px 24px rgba(30,58,95,0.06)', overflow: 'hidden',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0174!2d77.6254!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144b3ef01f63%3A0x6d89a8bfefc76921!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '14px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SmileCare Dental — Koramangala, Bangalore"
            />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
