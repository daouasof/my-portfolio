import '../styles/Main.css';
import Project from './Project';

function Main() {
  return (
    <div>
      <div className="section">
        <h2 className="title" id="About">
          About me
        </h2>
        <p>
          I am passionate about digital projects with a social impact. For
          several years, I have worked as a Product Owner on softwares aimed at
          supporting NGOs. I then decided to become a web developer and embarked
          on an intensive web development bootcamp. My technology skillset
          includes Ruby on Rails, Javascript, React.JS, HTML and CSS.
        </p>
      </div>
      <div className="section">
        <h2 className="title" id="Projects">
          Projects
        </h2>
        <Project />
      </div>
    </div>
  );
}

export default Main;
