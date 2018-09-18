import React from 'react'
import Link from 'gatsby-link'

import '../style/projects.css'

const Projects = () => (
  <div>
    <div className="portfolio-cards-container">
      <div className="portfolio-card Card textCenter">
        <h3>Mock Linkedin</h3>
        <h6>
          A novice attempt at making a fully functional Linkedin type website.
          Users can sign up, post, like, comment. Users can also create a
          profile with education, experience, and skills.
        </h6>
        {/* <h4>You could possibly put an image here</h4> */}
        <div>
          <h4>Technologies Used</h4>
          <div className="tech-cell-container">
            <div className="tech-cell">
              <div className="tech-box">Node.js</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Express.js</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">MongoDB</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">React.js</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Redux</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Bootstrap</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Docker</div>
            </div>
          </div>
        </div>
        <div className="project-container ">
          {/* <a href="#" className="project-button-flex  project-button">
            <i className="fa fa-link" /> Live Demo
          </a> */}
          <a href="#" className="project-button-flex project-button">
            <i className="fa fa-github" /> View Code
          </a>
        </div>
      </div>
      <div className="portfolio-card Card textCenter">
        <h3>Personal Website</h3>
        <h6>
          This website you're currently viewing. If you like my work feel free
          to <Link to="/contact">contact me</Link>.
        </h6>
        {/* <h4>You could possibly put an image here</h4> */}
        {/* This div is just for space-between */}
        <div>
          <h4>Technologies Used</h4>
          <div className="tech-cell-container">
            <div className="tech-cell">
              <div className="tech-box">Gatsby</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">React.js</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Flexbox</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Apache</div>
            </div>
          </div>
        </div>
        <div className="project-container ">
          {/* <a href="#" className="project-button-flex  project-button">
            <i className="fa fa-download" /> Live Demo
          </a> */}
          <a
            href="https://github.com/VisionsOfDrifting/PersonalWebsite/tree/master/Gatsby/nickhtpappas.com"
            className="project-button-flex project-button"
          >
            <i className="fa fa-github" /> View Code
          </a>
        </div>
      </div>
      <div className="portfolio-card Card textCenter">
        <h3>Budget Trace</h3>
        <h6>
          Track your budget! Users can signup and add, edit, and delete their
          transactions. Visualize your spending with various graphs.
          Documentation is on github.
        </h6>
        {/* <h4>You could possibly put an image here</h4> */}
        <div>
          <h4>Technologies Used</h4>
          <div className="tech-cell-container">
            <div className="tech-cell">
              <div className="tech-box">HTML</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">CSS</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">JavaScript</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">PHP</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">MySQL</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Apache</div>
            </div>
          </div>
        </div>
        <div className="project-container ">
          {/* <a href="#" className="project-button-flex  project-button">
            <i className="fa fa-link" /> Live Demo
          </a> */}
          <a
            href="https://github.com/VisionsOfDrifting/CMPS115"
            className="project-button-flex project-button"
          >
            <i className="fa fa-github" /> View Code
          </a>
        </div>
      </div>
      {/* <div className="portfolio-card Card textCenter">
        <h3>TODO To Done</h3>
        <h4>You could possibly put an image here</h4>
        <div>
          {' '}
          <h4>Technologies Used</h4>
          <div className="tech-cell-container">
            <div className="tech-cell">
              <div className="tech-box">Node.js</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Express.js</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">MongoDB</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">React.js</div>
            </div>
          </div>
        </div>
        <div className="project-container ">
          <a href="#" className="project-button-flex  project-button">
            <i className="fa fa-link" /> Live Demo
          </a>
          <a href="#" className="project-button-flex project-button">
            <i className="fa fa-github" /> View Code
          </a>
        </div>
      </div> */}
      <div className="portfolio-card Card textCenter">
        <h3>IdeaStore</h3>
        <h6>
          Share and store your ideas! Users login with google, can post ideas,
          and can comment on other ideas.
        </h6>
        {/* <h4>You could possibly put an image here</h4> */}
        <div>
          {' '}
          <h4>Technologies Used</h4>
          <div className="tech-cell-container">
            <div className="tech-cell">
              <div className="tech-box">Node.js</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Express.js</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">MongoDB</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Handlebars.js</div>
            </div>
            <div className="tech-cell">
              <div className="tech-box">Materialize CSS</div>
            </div>
          </div>
        </div>
        <div className="project-container ">
          <a
            href="https://pacific-lake-95761.herokuapp.com/"
            className="project-button-flex  project-button"
          >
            <i className="fa fa-link" /> Live Demo
          </a>
          <a
            href="https://github.com/VisionsOfDrifting/IdeaStore"
            className="project-button-flex project-button"
          >
            <i className="fa fa-github" /> View Code
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
