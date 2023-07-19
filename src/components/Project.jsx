import '../styles/Project.css';
import Frontrow from '../assets/images/Frontrow.png';
import Rails from '../assets/images/Rails.svg';
import PostgreSQL from '../assets/images/PostgreSQL.svg';

function Project() {
  const stack = [
    { name: 'Rails', source: Rails },
    { name: 'postgreSQL', source: PostgreSQL },
  ];

  return (
    <div className="project">
      <img src={Frontrow} className="project_image" alt="" />
      <div>
        <h2>
          Frontrow{' '}
          <span>
            <i class="fa-solid fa-link"></i>
          </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt{' '}
        </p>
        <ul className="stack_list">
          {stack.map((element, index) => (
            <li key={`${index}${element.name}`}>
              <img src={element.source} alt={element.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
