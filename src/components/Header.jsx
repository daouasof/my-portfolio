import Presentation from './Presentation';
import '../styles/Header.css';
import Nav from './Nav';
import Social from './Social';

function Header() {
  return (
    <div className="header-container">
      <Presentation />
      <Nav />
      <Social />
    </div>
  );
}

export default Header;
