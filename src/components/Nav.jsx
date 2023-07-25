import '../styles/Nav.css';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <div className="nav-container">
      <ul className="nav">
        <li key={`about00`}>
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li key={`projects01`}>
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li key={`contact02`}>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
