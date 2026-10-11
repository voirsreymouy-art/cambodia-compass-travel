export const metadata = {
  title: 'Contact | Cambodia Compass Travel',
  description: 'Get in touch with Cambodia Compass Travel for itineraries, questions, and custom travel planning.',
};

export default function ContactPage() {
  return (
    <section className="section container contact-layout">
      <div>
        <p className="eyebrow text-accent">Contact</p>
        <h1>Start your Cambodia story with us.</h1>
        <p>Share your ideas, questions, or timeline and a member of our team will get back to you.</p>

        <form className="contact-form">
          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={6} placeholder="Tell us about your dream trip" />
          </div>
          <button type="submit" className="button primary">
            Send message
          </button>
        </form>
      </div>

      <aside className="contact-sidebar">
        <div className="sidebar-card">
          <h3>Reach us directly</h3>
          <p>Email: hello@cambodiacompasstravel.com</p>
          <p>WhatsApp: +855 12 345 678</p>
          <p>Telegram: @cambodiacompass</p>
        </div>
      </aside>
    </section>
  );
}
