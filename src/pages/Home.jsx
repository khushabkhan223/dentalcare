import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

/* ── animated counter ───────────────────────────── */
function useCounter(end, duration = 1800, startVal = 0) {
  const [count, setCount] = useState(startVal)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (end - startVal) + startVal))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(end)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration, startVal])

  return { count, ref }
}

/* ── trust badges ───────────────────────────────── */
const BADGES = ['IDA', 'ISO 9001', 'NABH', 'Google Verified']

/* ── testimonials ───────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: 'Dr. Sharma and the team made my root canal completely painless. I was terrified, but they were so patient and caring. Truly the best dental experience I\'ve had.',
    name: 'Rahul K.',
    location: 'Koramangala',
  },
  {
    quote: 'We\'ve been bringing our entire family here for 3 years. The clinic is spotlessly clean, the staff is warm, and they always explain everything clearly.',
    name: 'Meera P.',
    location: 'Indiranagar',
  },
  {
    quote: 'Got my teeth whitening done here and the results were amazing. Very professional, transparent pricing, and no upselling. Highly recommend.',
    name: 'Arjun D.',
    location: 'HSR Layout',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function TestimonialCard({ quote, name, location: loc, delay }) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(30,58,95,0.11)' }}
      style={{
        background: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(13,148,136,0.1)',
        borderRadius: '20px',
        padding: '28px 28px 24px',
        boxShadow: '0 4px 24px rgba(30,58,95,0.06)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s',
      }}
    >
      {/* decorative quote mark */}
      <span style={{
        position: 'absolute',
        top: '10px',
        right: '18px',
        fontSize: '80px',
        lineHeight: 1,
        fontFamily: 'Georgia, serif',
        color: '#0D9488',
        opacity: 0.08,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>"</span>

      {/* stars */}
      <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: '#D4A853', fontSize: '15px' }}>★</span>
        ))}
      </div>

      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#1A1A2E', lineHeight: 1.65, marginBottom: '20px' }}>
        {quote}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%',
          background: '#0D9488', display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: 'white',
          fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '16px', flexShrink: 0,
        }}>
          {name.charAt(0)}
        </div>
        <div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '14px', color: '#1A1A2E' }}>{name}</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#64748B' }}>{loc}</p>
        </div>
      </div>
    </motion.div>
  )
}

/* ── page ───────────────────────────────────────── */
export default function Home() {
  const { count: years, ref: yearsRef }     = useCounter(15)
  const { count: patients, ref: patientsRef } = useCounter(2000)
  const { count: rating, ref: ratingRef }   = useCounter(48, 1600, 40)

  return (
    <PageWrapper>
      {/* ── HERO ─────────────────────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(280px,55%,660px) 1fr',
            gap: 'clamp(32px,5vw,72px)',
            alignItems: 'center',
          }} className="hero-layout">

            {/* LEFT */}
            <div>
              {/* trust badge */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginBottom: '26px' }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#F0FDF9', border: '1px solid rgba(13,148,136,0.18)',
                  borderRadius: '50px', padding: '7px 16px',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
                  color: '#0D9488', fontWeight: 500,
                }}>
                  <span style={{ fontWeight: 700 }}>✓</span>
                  Trusted by 2000+ Patients in Bangalore
                </span>
              </motion.div>

              {/* headline */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                  fontSize: 'clamp(38px,5.5vw,62px)', lineHeight: 1.08,
                  letterSpacing: '-1px', color: '#1A1A2E', marginBottom: '20px',
                }}
              >
                Your Smile,{' '}
                <span style={{ color: '#0D9488' }}>Our Priority</span>
              </motion.h1>

              {/* sub */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '17px',
                  color: '#64748B', lineHeight: 1.65,
                  maxWidth: '460px', marginBottom: '34px',
                }}
              >
                Advanced dental care with a gentle touch. From routine check-ups to cosmetic dentistry — experience world-class treatment in a comfortable, caring environment.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" style={{
                    display: 'inline-block', fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 500, fontSize: '15px', color: 'white',
                    background: '#0D9488', padding: '14px 32px', borderRadius: '50px',
                    textDecoration: 'none', boxShadow: '0 4px 16px rgba(13,148,136,0.28)',
                  }}>
                    Book Appointment
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/services" style={{
                    display: 'inline-block', fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 500, fontSize: '15px', color: '#0D9488',
                    background: 'transparent', padding: '14px 32px', borderRadius: '50px',
                    textDecoration: 'none', border: '1px solid rgba(13,148,136,0.32)',
                  }}>
                    Our Services →
                  </Link>
                </motion.div>
              </motion.div>

              {/* stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '36px' }}
              >
                <div ref={yearsRef} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '24px', color: '#1E3A5F', lineHeight: 1 }}>{years}+</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Years Experience</p>
                </div>
                <div style={{ width: '1px', height: '36px', background: 'rgba(100,116,139,0.2)', flexShrink: 0 }} />
                <div ref={patientsRef} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '24px', color: '#1E3A5F', lineHeight: 1 }}>{patients.toLocaleString()}+</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Happy Patients</p>
                </div>
                <div style={{ width: '1px', height: '36px', background: 'rgba(100,116,139,0.2)', flexShrink: 0 }} />
                <div ref={ratingRef} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '24px', color: '#1E3A5F', lineHeight: 1 }}>{(rating / 10).toFixed(1)} ★</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Google Rating</p>
                </div>
              </motion.div>

              {/* trust logos */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#64748B', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Certified & Recognized by
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                  {BADGES.map(b => (
                    <div key={b} style={{
                      fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '11px',
                      color: '#1A1A2E', opacity: 0.32, padding: '5px 11px',
                      border: '1.5px solid rgba(26,26,46,0.32)', borderRadius: '6px', letterSpacing: '0.5px',
                    }}>{b}</div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — visual composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              className="hero-visual"
            >
              {/* main card */}
              <div style={{
                width: 'min(420px, 90vw)', height: '480px', borderRadius: '32px',
                background: 'linear-gradient(135deg, #F0FDF9 0%, #E4F4F2 100%)',
                border: '1px solid rgba(13,148,136,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 24px 64px rgba(13,148,136,0.09)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?q=80&w=687&auto=format&fit=crop"
                  alt="Dental care professional"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', borderRadius: '30px',
                    zIndex: 0,
                  }}
                />

                {/* top-right glass card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute', top: '28px', right: '-18px', zIndex: 2,
                    background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(13,148,136,0.12)', borderRadius: '14px',
                    padding: '11px 18px',
                    boxShadow: '0 4px 20px rgba(30,58,95,0.09)',
                    fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
                    color: '#1A1A2E', whiteSpace: 'nowrap',
                    display: 'flex', alignItems: 'center', gap: '7px',
                  }}
                >
                  🛡️ Safe &amp; Hygienic
                </motion.div>

                {/* bottom-left glass card */}
                <motion.div
                  animate={{ y: [0, 9, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  style={{
                    position: 'absolute', bottom: '44px', left: '-18px', zIndex: 2,
                    background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(13,148,136,0.12)', borderRadius: '14px',
                    padding: '11px 18px',
                    boxShadow: '0 4px 20px rgba(30,58,95,0.09)',
                    fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
                    color: '#1A1A2E', whiteSpace: 'nowrap',
                    display: 'flex', alignItems: 'center', gap: '7px',
                  }}
                >
                  <span style={{ color: '#D4A853' }}>⭐</span> 4.8 Rating
                </motion.div>

                {/* teal check circle */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  style={{
                    position: 'absolute', top: '44px', left: '-14px', zIndex: 2,
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: '#0D9488',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '20px', fontWeight: 700,
                    boxShadow: '0 4px 16px rgba(13,148,136,0.32)',
                  }}
                >
                  ✓
                </motion.div>

                {/* navy dot */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  style={{
                    position: 'absolute', bottom: '28px', right: '-8px',
                    width: '34px', height: '34px', borderRadius: '50%',
                    background: '#1E3A5F', opacity: 0.14,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────── */}
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', background: '#F0FDF9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500,
              color: '#0D9488', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px',
            }}>
              WHAT OUR PATIENTS SAY
            </p>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 600,
              fontSize: 'clamp(26px,4vw,40px)', color: '#1A1A2E', letterSpacing: '-0.5px',
            }}>
              Trusted by Families Across Bangalore
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '22px',
          }}>
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} delay={i * 0.12} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
