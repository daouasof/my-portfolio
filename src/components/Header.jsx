import Presentation from './Presentation';
import '../styles/Header.css';
import Nav from './Nav';
import Social from './Social';

function Header() {
  return (
    <div className="header-container">
      <div className="header-sub-container">
        <Presentation />
        <Nav />
      </div>
      <Social />
    </div>
  );
}

export default Header;
