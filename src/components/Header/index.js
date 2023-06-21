import {Link} from 'react-router-dom'

const Header = () => {
  ;<div className="header-container">
    <ul className="nav-container">
      <Link to="/" className="nav-link">
        <li>Home</li>
      </Link>
      <Link to="/about" className="nav-link">
        <li>About</li>
      </Link>
    </ul>
  </div>
}
export default Header
