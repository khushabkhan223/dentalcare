import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Book Appointment' },
]

const SOCIAL = [
  { icon: '📸', label: 'Instagram', href: '#' },
  { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/919876543210' },
  { icon: '👍', label: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A2E', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 40px 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          paddingBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0D9488', display: 'block', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '20px', color: 'white' }}>Dental Care</span>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '240px' }}>
              Your smile, our priority. Advanced dental care with a gentle touch, in the heart of Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {QUICK_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Connect With Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {SOCIAL.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
                >
                  {icon} {label}
                </a>
              ))}
              <a
                href="tel:+919876543210"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#0D9488', textDecoration: 'none', marginTop: '6px' }}
              >
                📞 +91 98765 43210
              </a>
              <a
                href="mailto:hello@smilecaredental.in"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#0D9488', textDecoration: 'none' }}
              >
                ✉️ hello@smilecaredental.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Dental Care. All rights reserved.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            Crafted with ♥ by Khushab
          </p>
        </div>
      </div>
    </footer>
  )
}
