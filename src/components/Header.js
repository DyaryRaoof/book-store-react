import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header-wrapper">
    <span className="logo">BookStore CMS</span>
    <NavLink exact to="/" activeClassName="activated-link">Books</NavLink>
    <NavLink exact to="/categories" activeClassName="activated-link">Categories</NavLink>
    <div className="profile" />
  </div>
);

export default Header;
