import { Link } from 'react-router-dom';
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500&display=swap" rel="stylesheet"></link>
const collections = [
  { title: 'Minimal Chic', detail: 'Soft, elegant looks with subtle shimmer.' },
  { title: 'Bridal Bliss', detail: 'Romantic finishes made for special moments.' },
  { title: 'Glam Stones', detail: 'Sparkle-rich nail art with crystal details.' },
  { title: 'Cute & Trendy', detail: 'Playful pastel designs for every mood.' },
];

const iconFeatures = [
  { label: 'Handmade', icon: '🖐️' },
  { label: 'Reusable 10-15 times', icon: '🔄' },
  { label: 'Custom sizing', icon: '📏' },
  { label: 'Salon finish', icon: '💅' },
];

const benefitCards = [
  { title: 'Premium Quality', body: 'High quality materials for long lasting wear.' },
  { title: 'Handcrafted', body: 'Each set is handmade with love and perfection.' },
  { title: 'Custom Fit', body: 'We provide custom sizing for the perfect fit.' },
  { title: 'Pan India Shipping', body: 'Safe & secure delivery across India.' },
];

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-copy">
          {/* <p className="eyebrow hero-tagline">Handcrafted Press-On Nails</p> */}
          <h1>
            Kala Sparsha <span     style={{ paddingLeft: '50%',color:'#020100' }}>
              by Anu&hearts;
            </span>
          </h1>
          <p className="hero-text">Handcrafted Press-On Nails for Every Mood ✨</p>

           <div className="hero-actions">
            <a className="button primary" href="https://wa.me/910000000000" target="_blank" rel="noreferrer">
              Order Now
            </a>
          </div> 

          <div className="hero-icon-row">
            {iconFeatures.map((item) => (
              <div key={item.label} className="icon-feature">
                <div className="icon-bubble">{item.icon}</div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="hero-visual">
          <div className="hero-badge">Order on WhatsApp</div>
          <div className="hero-image-card">
            <div className="hero-image-glow" />
            <div className="hero-image-placeholder" />
          </div>
        </div> */}
      </section>

      <section className="collection-preview">
        <div className="section-heading">
          <p className="eyebrow">Explore</p>
          <h2>Our Collections</h2>
        </div>

        <div className="collection-grid">
          {collections.map((item) => (
            <article key={item.title} className="collection-card">
              <div className="collection-card-image" />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <button className="button tertiary">View More</button>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits-row">
        {benefitCards.map((card) => (
          <article key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </section>

      <section className="social-banner">
        <div>
          <p className="eyebrow">Follow Us on Instagram</p>
          <h2>@kala_sparsha_by_anu</h2>
        </div>
        <div className="social-cta">
          <p className="eyebrow">DM or WhatsApp to Order</p>
          <button className="button primary">Chat on WhatsApp</button>
        </div>
      </section>

      <section className="contact-footer">
        <div>
          <p>Email</p>
          <strong>yourmail@gmail.com</strong>
        </div>
        <div>
          <p>Instagram</p>
          <strong>@kala_sparsha_by_anu</strong>
        </div>
        <div>
          <p>WhatsApp</p>
          <strong>+91 00000 00000</strong>
        </div>
        <div>
          <p>Location</p>
          <strong>India</strong>
        </div>
      </section>
    </div>
  );
}
