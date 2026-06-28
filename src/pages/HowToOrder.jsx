export default function HowToOrder() {
  const steps = [
    'Select your favorite collection.',
    'Send your nail size using WhatsApp.',
    'Approve the design and place your order.',
    'Receive delivery anywhere in India.',
  ];

  return (
    <div className="page howto-page">
      <div className="page-header">
        <p className="eyebrow">How to Order</p>
        <h1>Simple steps to place your order</h1>
        <p>We make it easy to order your dream nails in just a few messages.</p>
      </div>

      <ol className="steps-list">
        {steps.map((step, index) => (
          <li key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
