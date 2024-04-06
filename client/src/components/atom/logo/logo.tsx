import { Link } from 'react-router-dom';
import './logo.css';
import logoImage from '../../../assets/blue-bg.png';

const Logo = () => {
  return (
    <Link
      to="/document/create"
      className="logo-container"
    >
      <img src={logoImage}></img>
    {/* <Link
      to="/document/create"
      className="logo-container"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#3b82f6"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg> */}
    </Link>
  )
}

export default Logo;
