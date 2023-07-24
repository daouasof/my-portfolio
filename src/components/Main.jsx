import '../styles/Main.css';
import Project from './Project';
import Frontrow from '../assets/images/Frontrow.png';
import Jungle from '../assets/images/La-maison-jungle.png';
import Pawch from '../assets/images/Pawch.png';
import Rails from '../assets/images/Rails.svg';
import React from '../assets/images/React.svg';
import JS from '../assets/images/JS.svg';
import Bootstrap from '../assets/images/Bootstrap.svg';
import PostgreSQL from '../assets/images/PostgreSQL.svg';

function Main() {
  return (
    <div>
      <div className="section" id="About">
        <h2 className="title">About me</h2>
        <p>
          I am passionate about digital projects with a social impact. For
          several years, I have worked as a Product Owner on softwares aimed at
          supporting NGOs. I then decided to become a web developer and embarked
          on an intensive web development bootcamp. My technology skillset
          includes Ruby on Rails, Javascript, React.JS, HTML and CSS.
        </p>
      </div>
      <div className="section" id="Projects">
        <h2 className="title">Projects</h2>
        <Project
          name="Frontrow"
          description="A social platform where fans can log concerts they've seen by rating and reviewing their experience, follow other fans and interact with them. FrontRow is the final project for Le Wagon's web development bootcamp."
          link="https://www.front-row.site"
          cover={Frontrow}
          stack={[
            { stackname: 'Rails', source: Rails },
            { stackname: 'postgreSQL', source: PostgreSQL },
            { stackname: 'JS', source: JS },
          ]}
        />
        <Project
          name="La Maison Jungle"
          description="Fictional plant store website created with React"
          link="https://daouasof.github.io/la-maison-jungle/"
          cover={Jungle}
          stack={[{ stackname: 'React', source: React }]}
        />
        <Project
          name="Pawch"
          description="A web app that allows users to browse pet outfits, rent them, and post their own outfits to rent. Pawsh is an Airbnb clone and one of two final projects for Le Wagon's web development bootcamp."
          link="https://pawsh.herokuapp.com/"
          cover={Pawch}
          stack={[
            { stackname: 'Rails', source: Rails },
            { stackname: 'postgreSQL', source: PostgreSQL },
            { stackname: 'Bootstrap', source: Bootstrap },
          ]}
        />
      </div>
      <div className="section" id="Contact">
        <h2 className="title">Contact</h2>
        <p>
          Want to work with me ? Contact me on my{' '}
          <a
            href="https://www.linkedin.com/in/sofia-daouadji/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{' '}
        </p>
      </div>
    </div>
  );
}

export default Main;
