export default function About() {
  return (
    <div className="page about-page">
      <div className="page-header">
        <p className="eyebrow">About Us</p>
        <h1>Handcrafted beauty with every set</h1>
        <p>
          Kala Sparsha is a small creative studio making custom press-on nails for women who want gorgeous style without the salon trip.
        </p>
      </div>

      <section className="about-grid">
        <article>
          <h2>Crafted by Anu</h2>
          <p>Each set is carefully designed by hand, blending classic elegance with modern trends.</p>
        </article>
        <article>
          <h2>Reusable Finish</h2>
          <p>Designed to last through 10-15 wears with proper care.</p>
        </article>
        <article>
          <h2>Custom Sizing</h2>
          <p>We offer sizing guidance so your nails feel secure and natural.</p>
        </article>
      </section>
    </div>
  );
}
