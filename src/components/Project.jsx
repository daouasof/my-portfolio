import '../styles/Project.css';

function Project({ name, description, link, cover, stack }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="project">
      <img src={cover} className="project_image" alt="" />
      <div>
        <h2>
          {name}
          <span>
            <i class="fa-solid fa-link"></i>
          </span>
        </h2>
        <p>{description}</p>
        <ul className="stack_list">
          {stack.map((element, index) => (
            <li key={`${index}${element.name}`}>
              <img src={element.source} alt={element.name} />
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default Project;
