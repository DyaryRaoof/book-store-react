import { NavLink } from 'react-router-dom';
import profileImg from '../images/account.png';
import './Header.css';

const Header = () => (
  <div className="header-wrapper">
    <span className="logo">BookStore CMS</span>
    <NavLink exact to="/" activeClassName="activated-link">BOOKS</NavLink>
    <NavLink exact to="/categories" activeClassName="activated-link">CATEGORIES</NavLink>
    <img src={profileImg} alt="profile" className="profile" />
  </div>
);

export default Header;
