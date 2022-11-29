import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo'>Booking</span>
        <div className='navItems'>
          <button className='navButton'>
            <Link to='/register' className='styledLink'>
              Register
            </Link>
          </button>
          <button className='navButton'>
            <Link to='/login' className='styledLink'>
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
