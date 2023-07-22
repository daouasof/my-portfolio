import '../styles/Nav.css';
import { Link } from 'react-scroll';

function Nav() {
  const options = ['Projects', 'Contact'];
  return (
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
      {options.map((option, index) => (
        <li key={`${option}${index}`}>
          <Link
            to={`${option}`}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {option}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
