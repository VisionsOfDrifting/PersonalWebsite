import React from 'react'
import Link from 'gatsby-link'

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
      </div>
      <div className="columns four">
        <h4>(Picture goes here)</h4>
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
    <div className="Grid Grid--full u-textCenter">
      <div className="Grid-cell Grid-cell-tech">
        <div className="Demo">
          <h2>Technologies</h2>
          <h4>Languages. Libraries. Tools. Frameworks.</h4>
          <div className="Grid Grid--gutters-tech Grid--cols-3">
            <div className="Grid-cell Grid-cell-tech">
              <div className="Demo">
                <h4>Front End</h4>
                <div className="Grid Grid--gutters-tech Grid--cols-3">
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>React</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>Redux</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>Jquery</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Grid-cell Grid-cell-tech">
              <div className="Demo">
                <h4>Back End</h4>
                <div className="Grid Grid--gutters-tech Grid--cols-3">
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>Node</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>Express</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>MongoDB</h6>
                    </div>
                  </div>
                </div>
                <div className="Grid Grid--gutters-tech Grid--cols-3">
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>MySQL</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>PostgreSQL</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>Firebase</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>PHP</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>Bash</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Grid-cell Grid-cell-tech">
              <div className="Demo">
                <h4>Other Tools</h4>
                <div className="Grid Grid--gutters-tech Grid--cols-3">
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>Git</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>Docker</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>Github</h6>
                    </div>
                  </div>
                </div>
                <div className="Grid Grid--gutters-tech Grid--cols-3">
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>Google Cloud</h6>
                    </div>
                  </div>
                  <div className="Grid-cell Grid-cell-tech">
                    <div className="Demo">
                      <h6>AWS</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
