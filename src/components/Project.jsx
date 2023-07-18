import '../styles/Project.css';
import Frontrow from '../assets/images/Frontrow.png';

function Project() {
  return (
    <div className="project">
      <img src={Frontrow} alt="" />
      <div>
        <h2>Frontrow</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt{' '}
        </p>
      </div>
    </div>
  );
}

export default Project;
