import Presentation from './Presentation';
import '../styles/Header.css';
import Nav from './Nav';

function Header() {
  return (
    <div className="header-container">
      <Presentation />
      <Nav />
    </div>
  );
}

export default Header;
