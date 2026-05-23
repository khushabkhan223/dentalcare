import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const SERVICES = [
  {
    icon: '🦷',
    title: 'General Dentistry',
    desc: 'Routine check-ups, cleanings, and preventive care to keep your teeth healthy for life.',
    includes: [
      'Comprehensive oral examination',
      'Professional scaling & polishing',
      'Cavity detection and tooth fillings',
      'Gum disease screening & treatment',
      'Oral cancer screening',
      'Digital X-rays & diagnostics',
    ],
    duration: '30 – 60 mins',
    suitable: 'All ages · Every 6 months recommended',
    tagline: 'Prevention is the most affordable treatment.',
  },
  {
    icon: '😁',
    title: 'Teeth Whitening',
    desc: 'Professional whitening treatments for a brighter, more confident smile in just one session.',
    includes: [
      'Pre-treatment shade assessment',
      'Gum & soft tissue protection',
      'Professional-grade bleaching gel',
      'LED activation light therapy',
      'Post-treatment care instructions',
      'Take-home maintenance kit',
    ],
    duration: '60 – 90 mins',
    suitable: 'Adults · Ideal for stained or yellowed teeth',
    tagline: 'Up to 8 shades brighter in a single visit.',
  },
  {
    icon: '🔧',
    title: 'Root Canal Treatment',
    desc: 'Painless root canal procedures using advanced technology. Save your natural tooth.',
    includes: [
      'Digital X-ray & 3D imaging',
      'Local anaesthesia (completely painless)',
      'Infected pulp removal & canal cleaning',
      'Antimicrobial irrigation',
      'Bio-compatible root filling',
      'Crown placement if required',
    ],
    duration: '60 – 90 mins (1–2 visits)',
    suitable: 'When infection or severe decay is present',
    tagline: 'Save your natural tooth — it\'s always worth it.',
  },
  {
    icon: '✨',
    title: 'Cosmetic Dentistry',
    desc: "Veneers, bonding, and smile makeovers designed to give you the smile you've always wanted.",
    includes: [
      'Smile design consultation & preview',
      'Dental veneers (porcelain & composite)',
      'Teeth bonding & contouring',
      'Smile gap closure',
      'Tooth reshaping & polishing',
      'Full smile makeover planning',
    ],
    duration: 'Varies by procedure (1–3 visits)',
    suitable: 'Anyone wanting to enhance their smile aesthetics',
    tagline: 'Your smile is the first thing people notice.',
  },
  {
    icon: '🦿',
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth.',
    includes: [
      'CT scan & implant planning',
      'Titanium implant placement',
      'Osseointegration period (healing)',
      'Custom abutment fitting',
      'Porcelain crown placement',
      'Long-term maintenance guidance',
    ],
    duration: '3 – 6 months total (multiple visits)',
    suitable: 'Adults with missing or extracted teeth',
    tagline: 'The closest thing to a natural tooth.',
  },
  {
    icon: '👶',
    title: 'Pediatric Dentistry',
    desc: 'Gentle, kid-friendly dental care in a fun and comfortable environment.',
    includes: [
      'Child-friendly oral examination',
      'Gentle teeth cleaning & fluoride',
      'Dental sealants for cavity prevention',
      'Habit counselling (thumb-sucking, etc.)',
      'Early orthodontic assessment',
      'Parent education & home care tips',
    ],
    duration: '30 – 45 mins',
    suitable: 'Children from first tooth through teens',
    tagline: 'Happy kids grow up with healthy teeth.',
  },
]

/* ── modal ──────────────────────────────────────── */
function ServiceModal({ service, onClose }) {
  if (!service) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(30,58,95,0.45)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px',
        }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: 'clamp(28px,4vw,44px)',
            maxWidth: '540px',
            width: '100%',
            boxShadow: '0 24px 80px rgba(30,58,95,0.18)',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          {/* close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '18px', right: '18px',
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'rgba(13,148,136,0.08)', border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '16px', color: '#64748B',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(13,148,136,0.16)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(13,148,136,0.08)' }}
          >
            ✕
          </button>

          {/* icon */}
          <div style={{
            width: '64px', height: '64px', borderRadius: '18px',
            background: 'rgba(13,148,136,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '30px', marginBottom: '18px',
          }}>
            {service.icon}
          </div>

          {/* title + tagline */}
          <h2 style={{
            fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '24px',
            color: '#1E3A5F', letterSpacing: '-0.4px', marginBottom: '6px',
          }}>
            {service.title}
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
            color: '#0D9488', fontWeight: 500, fontStyle: 'italic', marginBottom: '16px',
          }}>
            {service.tagline}
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
            color: '#64748B', lineHeight: 1.65, marginBottom: '24px',
          }}>
            {service.desc}
          </p>

          {/* what's included */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '13px',
              color: '#1A1A2E', letterSpacing: '1.5px', textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              What's Included
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {service.includes.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: 'rgba(13,148,136,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', color: '#0D9488', fontWeight: 700, flexShrink: 0,
                    marginTop: '1px',
                  }}>✓</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#1A1A2E', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* duration + suitable */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px',
          }}>
            {[
              { label: 'Duration', value: service.duration, icon: '⏱' },
              { label: 'Suitable For', value: service.suitable, icon: '👤' },
            ].map(({ label, value, icon }) => (
              <div key={label} style={{
                background: '#F0FDF9', borderRadius: '12px',
                padding: '14px 16px', border: '1px solid rgba(13,148,136,0.1)',
              }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#64748B', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {icon} {label}
                </p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A1A2E', lineHeight: 1.4 }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              onClick={onClose}
              style={{
                display: 'block', textAlign: 'center',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '15px',
                color: 'white', background: '#0D9488',
                padding: '14px', borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(13,148,136,0.25)',
              }}
            >
              Book This Treatment →
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}

/* ── card ───────────────────────────────────────── */
function ServiceCard({ service, col, onLearnMore }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: col * 0.1 }}
      whileHover={{ y: -7, boxShadow: '0 16px 44px rgba(30,58,95,0.11)', borderColor: 'rgba(13,148,136,0.2)' }}
      style={{
        background: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(13,148,136,0.08)', borderRadius: '18px',
        padding: '28px 26px 24px',
        boxShadow: '0 4px 20px rgba(30,58,95,0.05)',
        transition: 'box-shadow 0.3s, border-color 0.3s',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{
        width: '52px', height: '52px', borderRadius: '14px',
        background: 'rgba(13,148,136,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '26px', marginBottom: '18px', flexShrink: 0,
      }}>
        {service.icon}
      </div>

      <h3 style={{
        fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '20px',
        color: '#1E3A5F', letterSpacing: '-0.3px', marginBottom: '10px',
      }}>
        {service.title}
      </h3>

      <p style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
        color: '#64748B', lineHeight: 1.65, flex: 1, marginBottom: '20px',
      }}>
        {service.desc}
      </p>

      <motion.button
        onClick={() => onLearnMore(service)}
        whileHover={{ x: 3 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        style={{
          background: 'none', border: 'none', padding: 0,
          fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
          fontWeight: 500, color: '#0D9488', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '4px',
          width: 'fit-content',
        }}
      >
        Learn More →
      </motion.button>
    </motion.div>
  )
}

/* ── page ───────────────────────────────────────── */
export default function Services() {
  const [selected, setSelected] = useState(null)

  return (
    <PageWrapper>
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '1px', background: '#0D9488', opacity: 0.4 }} />
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: '#0D9488', letterSpacing: '3px', textTransform: 'uppercase' }}>
                OUR SERVICES
              </p>
              <div style={{ width: '36px', height: '1px', background: '#0D9488', opacity: 0.4 }} />
            </div>
            <h1 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 600,
              fontSize: 'clamp(30px,4vw,44px)', color: '#1E3A5F',
              letterSpacing: '-0.5px', marginBottom: '16px',
            }}>
              Comprehensive Dental Care
            </h1>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#64748B',
              maxWidth: '560px', margin: '0 auto', lineHeight: 1.65,
            }}>
              From preventive care to advanced treatments — everything your smile needs under one roof.
            </p>
          </motion.div>

          {/* grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '22px',
          }}>
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} service={s} col={i % 3} onLearnMore={setSelected} />
            ))}
          </div>
        </div>
      </section>

      {/* modal — rendered outside the section so it covers everything */}
      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </PageWrapper>
  )
}
