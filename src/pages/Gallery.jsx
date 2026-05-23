import { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const ITEMS = [
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop', label: 'Reception Area',      category: 'Clinic'    },
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop', label: 'Treatment Room',     category: 'Clinic'    },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop', label: 'Advanced Equipment', category: 'Equipment' },
  { src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&h=600&fit=crop', label: 'Beautiful Smiles',   category: 'Smiles'    },
  { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop', label: 'Our Expert Team',    category: 'Team'      },
  { src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop', label: 'Dental Care',        category: 'Clinic'    },
  { src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=600&fit=crop', label: 'Clinic Interior',    category: 'Clinic'    },
  { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop', label: 'Happy Patient',      category: 'Smiles'    },
]

const FILTERS = ['All', 'Clinic', 'Equipment', 'Team', 'Smiles']

function GalleryCard({ src, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      whileHover={{ scale: 1.03, boxShadow: '0 14px 40px rgba(30,58,95,0.15)' }}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        aspectRatio: '4 / 3',
        position: 'relative',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(30,58,95,0.07)',
        background: '#E6F7F5',
      }}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)',
      }} />
      <p style={{
        position: 'absolute', bottom: '14px', left: '16px',
        fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: '15px',
        color: 'white', textShadow: '0 1px 6px rgba(0,0,0,0.4)',
        zIndex: 1,
      }}>
        {label}
      </p>
    </motion.div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? ITEMS : ITEMS.filter(x => x.category === active)

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
            style={{ textAlign: 'center', marginBottom: '44px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '1px', background: '#0D9488', opacity: 0.4 }} />
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: '#0D9488', letterSpacing: '3px', textTransform: 'uppercase' }}>
                OUR CLINIC
              </p>
              <div style={{ width: '36px', height: '1px', background: '#0D9488', opacity: 0.4 }} />
            </div>
            <h1 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 600,
              fontSize: 'clamp(30px,4vw,44px)', color: '#1E3A5F',
              letterSpacing: '-0.5px', marginBottom: '13px',
            }}>
              Step Inside SmileCare
            </h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#64748B' }}>
              A modern, hygienic clinic designed for your comfort
            </p>
          </motion.div>

          {/* filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}
          >
            {FILTERS.map(f => (
              <motion.button
                key={f}
                onClick={() => setActive(f)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '14px',
                  padding: '9px 22px', borderRadius: '50px',
                  border: active === f ? 'none' : '1px solid #0D9488',
                  background: active === f ? '#0D9488' : 'white',
                  color: active === f ? 'white' : '#0D9488',
                  cursor: 'pointer', transition: 'background 0.2s, color 0.2s, border 0.2s',
                }}
              >
                {f}
              </motion.button>
            ))}
          </motion.div>

          {/* gallery grid — key forces re-mount on filter change for clean animation */}
          <div
            key={active}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '18px',
            }}
          >
            {filtered.map((item, i) => (
              <GalleryCard key={item.src} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
