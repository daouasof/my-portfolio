import Presentation from './Presentation';
import '../styles/Header.css';
import Nav from './Nav';
import Social from './Social';

function Header() {
  return (
    <div className="header-container">
      <Presentation />
      <div>
        <Nav />
        <Social />
      </div>
    </div>
  );
}

export default Header;
