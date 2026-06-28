import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo_Trans.png';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const links = [
  { label: 'Home', path: '/' },
  { label: 'Collections', path: '/collections' },
  { label: 'About Us', path: '/about' },
  { label: 'How To Order', path: '/how-to-order' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-brand">
        <img src={logo} alt="Kala Sparsha logo" className="nav-logo" />
      </div>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="nav-actions">
        <a className="button nav-button secondary" href="https://instagram.com/kala_sparsha_by_anu" target="_blank" rel="noreferrer">
          <span className="nav-icon"><FaInstagram size={30}/></span>
          DM on Instagram
        </a>
        <a className="button nav-button primary" href="https://wa.me/910000000000" target="_blank" rel="noreferrer">
          <span className="nav-icon"><FaWhatsapp size={30}/></span>
          WhatsApp Us
        </a>
      </div>
    </nav>
  );
}
