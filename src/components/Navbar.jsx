import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
]

function ToothIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 8C38 8 28 16 24 28C20 16 10 8 4 15C-2 22 2 38 6 48C12 62 12 74 15 86C18 98 23 110 31 110C39 110 41 102 45 94C47 89 49 88 50 88C51 88 53 89 55 94C59 102 61 110 69 110C77 110 82 98 85 86C88 74 88 62 94 48C98 38 102 22 96 15C90 8 80 16 76 28C72 16 62 8 50 8Z"
        fill="#0D9488"
        opacity="0.85"
      />
    </svg>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'sticky',
          top: '16px',
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 20px',
        }}
      >
        <nav style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(13,148,136,0.08)',
          borderRadius: '14px',
          boxShadow: '0 4px 20px rgba(30,58,95,0.06)',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '0',
          width: '100%',
          maxWidth: '960px',
        }}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              textDecoration: 'none',
              flexShrink: 0,
              marginRight: 'auto',
            }}
          >
            <ToothIcon />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '17px', color: '#1A1A2E', letterSpacing: '-0.3px' }}>Dental</span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: '17px', color: '#64748B' }}>Care</span>
          </Link>

          {/* Desktop: center links */}
          <div
            className="desktop-only"
            style={{ display: 'flex', gap: '4px', alignItems: 'center', margin: '0 auto' }}
          >
            {NAV_LINKS.map(({ path, label }) => {
              const active = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                    letterSpacing: '0.3px',
                    color: active ? '#0D9488' : '#64748B',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '5px 12px 9px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#0D9488' }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#64748B' }}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute',
                        bottom: 2,
                        left: '12px',
                        right: '12px',
                        height: '2px',
                        background: '#0D9488',
                        borderRadius: '2px',
                        display: 'block',
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop: CTA button */}
          <motion.div
            className="desktop-only"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ marginLeft: 'auto', flexShrink: 0 }}
          >
            <Link
              to="/contact"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: 'white',
                background: '#0D9488',
                padding: '10px 22px',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'block',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0B8278' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0D9488' }}
            >
              Book Appointment
            </Link>
          </motion.div>

          {/* Mobile: hamburger */}
          <button
            className="mobile-only"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '5px',
              marginLeft: 'auto',
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  width: '22px',
                  height: '2px',
                  background: '#1A1A2E',
                  borderRadius: '2px',
                  display: 'block',
                  transition: 'all 0.3s ease',
                  transform:
                    i === 0 && menuOpen ? 'rotate(45deg) translate(5px, 5px)' :
                    i === 2 && menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>
      </motion.header>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '16px',
              right: '16px',
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '16px',
              border: '1px solid rgba(13,148,136,0.1)',
              boxShadow: '0 8px 40px rgba(30,58,95,0.12)',
              zIndex: 49,
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: location.pathname === path ? '#0D9488' : '#1A1A2E',
                  textDecoration: 'none',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: location.pathname === path ? '#F0FDF9' : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: '15px',
                color: 'white',
                background: '#0D9488',
                padding: '13px 16px',
                borderRadius: '10px',
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: '6px',
              }}
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
