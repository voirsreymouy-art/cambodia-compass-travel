import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-wrap">
        <Link href="/" className="brand" aria-label="Cambodia Compass Travel home">
          <span className="brand-mark">✦</span>
          <span>
            <strong>Cambodia</strong>
            <small>Compass Travel</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/tours">Journeys</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </nav>

        <div className="header-actions">
          <Link href="/payment" className="button secondary">
            Book now
          </Link>
        </div>
      </div>
    </header>
  );
}
