import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page not-found">
      <div className="page-header">
        <p className="eyebrow">Page not found</p>
        <h1>Oops! Nothing to see here.</h1>
        <p>The page you are looking for doesn’t exist. Use the menu to find what you need.</p>
        <Link className="button primary" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
