import '../styles/Nav.css';
import { Link } from 'react-scroll';

function Nav() {
  const options = ['About', 'Projects', 'Contact'];
  return (
    <ul className="nav">
      {options.map((option, index) => (
        <li key={`${option}${index}`}>
          <Link
            to={`${option}`}
            spy={true}
            smooth={true}
            offset={-50}
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
