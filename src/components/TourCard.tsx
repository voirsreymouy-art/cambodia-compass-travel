import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">✦</span>
            <span>
              <strong>Cambodia</strong>
              <small>Compass Travel</small>
            </span>
          </div>
          <p>Immersive journeys for curious travelers seeking Cambodia’s culture, landscapes, and stories.</p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            <li><Link href="/tours">Tours</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        <div>
          <h3>Support</h3>
          <ul>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/admin/login">Admin login</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Email: hello@cambodiacompasstravel.com</li>
            <li>WhatsApp: +855 12 345 678</li>
            <li>Telegram: @cambodiacompass</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Cambodia Compass Travel</span>
        <span>Private journeys, public memories.</span>
      </div>
    </footer>
  );
}
