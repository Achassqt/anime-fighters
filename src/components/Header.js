import { Link } from 'react-router-dom';

import './header.css'

import logo from '../assets/images/logo_test.png';

function Header() {
  return (
    <div className='header-wrapper'>
      <header>
        <div className='header-logo-container'>
          <Link to="/">
            <img src={logo} alt='alt' />
          </Link>
        </div>
        <nav className='header-nav'>
          <ul>
            <li><Link to="/fighters">Combatants</Link></li>
            <li><Link to="/add-anime">Ajouter un anime</Link></li>
            <li><Link to="/add-fighter">Ajouter un combatant</Link></li>
            {/* <li><Link to="/fights">Fights</Link></li> */}
          </ul>
        </nav>
        <div>
          <span>Loupe</span>
        </div>
      </header>
    </div>
  );
}

export default Header;