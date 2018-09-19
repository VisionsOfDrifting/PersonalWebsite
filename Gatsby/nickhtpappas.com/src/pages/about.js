import React from 'react'
import Link from 'gatsby-link'

// import Tech from '../components/tech'

const About = () => (
  <div>
    <div className="row">
      <h2>About Me</h2>
      <div className="columns eight">
        <p className="centeredP">
          I grew up in the foothills of Los Angeles. I have a love for the beach
          and a passion for technology. I've had an interest in technology all
          my life. In college I spent most of my free time learning about
          different programming languages, tech stacks, and machine learning
          algorithms.
        </p>
        <p className="centeredP">
          Since graduating I have been building websites for people. When I
          don't have work I keep busy working on side projects of my own and
          reading articles about web technologies.
        </p>
      </div>
      <div className="columns four">
        <div className="centeredImg">
          <img
            // className="centeredImg"
            src="../website_resources/scaled.jpg"
            alt="Profile picture"
          />
        </div>
        {/* <h4>(Picture goes here)</h4> */}
      </div>
    </div>
    <div className="row">
      {/* May want to add padding so that the twelve columns are the same width */}
      <div className="columns twelve">
        <h2>Education</h2>
        {/* Add responsive classes before you justify the content */}
        <div className="timeline-wrap ">
          <div className="timeline-block">
            <div className="timeline-ico">
              <div className="timeline-ico2" />
              <i className="fa fa-graduation-cap" />
            </div>
            <div className="timeline-content">
              <h2 className="">University of California, Santa Cruz</h2>
              <h3 id="p-one">Bachelor of Science</h3>
              <h4 id="p-two">Computer Science</h4>
              <br />
              <br />
              <p id="p-one">Degree Awarded: </p>
              <p id="p-two">March 2018</p>
              <br />
              <br />
              <p id="p-one">Began Studies: </p>
              <p id="p-two">June 2016</p>
            </div>
          </div>
          {/* <!-- /timeline-block --> */}
          <div className="timeline-block">
            <div className="timeline-ico">
              <div className="timeline-ico2" />
              <i className="fa fa-graduation-cap" />
            </div>
            <div className="timeline-content">
              <h2 className="">Glendale Community College</h2>
              <h3 id="p-one">Associate of Science</h3>
              <h4 id="p-two">Mathematics</h4>
              <br />
              <br />
              <p id="p-one">Degree Awarded: </p>
              <p id="p-two">June 2016</p>
              <br />
              <br />
              <p id="p-one">Began Studies: </p>
              <p id="p-two">Februrary 2013</p>
            </div>
          </div>
          {/* <!-- /timeline-block --> */}
        </div>
        {/* <!-- /timeline-wrap -->   			 */}
      </div>
    </div>
    {/* <p>
      When I took my first class in Software Engineering I had my first chance
      to put the things I'd read about into practice. In that class I completed
      my first fullstack project with a team. The project was a CRUD application
      we created with a LAMP stack. Looking back at the original source code
      there's a lot that could be done differently, but I'm still proud of what
      my team and I were able to acomplish in 5 weeks.
    </p>
    <p>
      Since that first project I've learned a considerable ammount and have
      completed other projects on various stacks. If you'd like to see live
      demos of my completed work check out my portfolio there's a link to the
      source code hosted on github as well.
    </p>
    <h3>My thoughts about tech today</h3>
    <p>
      The next technologies I've been eyeing are React Native and Flutter. I
      think that hybrid app Frameworks are important tools that are going to
      become widespread in the next few years as they update the technology.
    </p> */}

    {/* <Tech /> */}
  </div>
)

export default About
