import '../styles/Nav.css';

function Nav() {
  const options = ['About', 'Projects', 'Contact'];
  return (
    <ul className="nav">
      {options.map((option, index) => (
        <li key={`%{option}%{index}`}>
          <a href="/">{option}</a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
