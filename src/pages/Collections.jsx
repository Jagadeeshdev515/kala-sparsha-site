export default function Collections() {
  const collections = [
    { title: 'Minimal Chic', description: 'Soft and elegant for everyday glam.' },
    { title: 'Bridal Bliss', description: 'Perfect for weddings and romantic looks.' },
    { title: 'Glam Stones', description: 'Sparkling accents and rich finishes.' },
    { title: 'Cute & Trendy', description: 'Fun colors with playful details.' },
  ];

  return (
    <div className="page collections-page">
      <div className="page-header">
        <p className="eyebrow">Collections</p>
        <h1>Find your favorite set</h1>
        <p>Choose from curated nail collections made for every mood and occasion.</p>
      </div>

      <div className="collection-grid full">
        {collections.map((item) => (
          <article key={item.title} className="collection-card large">
            <div className="collection-card-image" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className="button tertiary">View More</button>
          </article>
        ))}
      </div>
    </div>
  );
}
