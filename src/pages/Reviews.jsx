export default function Reviews() {
  const reviews = [
    { name: 'Priya', note: 'Amazing nails and great service. The fit was perfect!' },
    { name: 'Meera', note: 'Loved the bridal set. So pretty and reusable.' },
    { name: 'Anika', note: 'Quick response on WhatsApp and beautiful finishes.' },
  ];

  return (
    <div className="page reviews-page">
      <div className="page-header">
        <p className="eyebrow">Reviews</p>
        <h1>What our customers say</h1>
        <p>Real feedback from people who ordered Kala Sparsha sets.</p>
      </div>

      <div className="review-grid">
        {reviews.map((review) => (
          <article key={review.name} className="review-card">
            <p className="review-note">“{review.note}”</p>
            <p className="review-author">— {review.name}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
