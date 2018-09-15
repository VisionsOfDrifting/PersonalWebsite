import React from 'react'
import Link from 'gatsby-link'
import '../../style/portfolio-index.css'

const Portfolio = () => (
  <div>
    {/* @TODO Find a way to make boxes uniform height based on the largest box. */}
    <div className="Grid Grid--full u-textCenter">
      <div className="Grid-cell">
        <div className="Demo">
          <h2>Portfolio</h2>
          <p className="centeredP">
            These are some of my completed projects that I've hosted on this
            server with live demos. Feel free to try them out and look at the
            source code.
          </p>
          <p className="centeredP">
            Other projects I've completed, but haven't hosted are on my github
            as well.
          </p>
        </div>
      </div>
    </div>
    <div className="Grid Grid--gutters Grid--cols-2 u-textCenter">
      <div className="Grid-cell">
        <div className="Demo">
          <h3>Mock Linkedin</h3>
          <h4>You could possibly put an image here</h4>
          <h4>Technologies Used</h4>
          {/* @TODO To modularize this into components. */}
          {/* You'll want to put a description or list like this on the actual project page */}
          {/* <ul className="leftAlignList">
            <li>
              Designed a fullstack application to mimick the social media
              website.
            </li>
            <li>
              Created a backend api with Node.js and Express.js that interfaces
              with MongoDB.
            </li>
            <li>
              Created a frontend application with React.js and Redux framework.
            </li>
            <li>
              Wrapped the web application in a Docker container and deployed to
              my server.
            </li>
          </ul> */}
          {/* <ul className="leftInlineList">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Docker</li>
          </ul> */}
          <div className="Grid Grid--gutters Grid--12 Grid--nested">
            <div className="Grid-cell">
              <div className="Demo">Node.js</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">Express.js</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">MongoDB</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">React.js</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">Redux</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">Bootstrap</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">Docker</div>
            </div>
          </div>
          <div className="Grid Grid--gutters Grid--2 Grid--nested">
            <div className="Grid-cell">
              <div className="Demo">
                <a href="#" className="button view-project">
                  <i className="fa fa-download" /> View Project
                </a>
              </div>
            </div>
          </div>
          {/* <div className="Grid Grid--gutters Grid--2 Grid--nested">
            <div className="Grid-cell">
              <div className="Demo">
                <a href="#" className="button live-demo">
                  <i className="fa fa-download" /> View Live Demo
                </a>
              </div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">
                <a href="#" className="button source-code">
                  <i className="fa fa-download" /> View Source Code
                </a>
              </div>
            </div>
          </div> */}

          {/* <p>
            Designed a fullstack application to mimick the social media website.
            Created a backend api with Node.js and Express.js that interfaces
            with MongoDB.{' '}
          </p> */}
        </div>
      </div>
      <div className="Grid-cell">
        <div className="Demo">
          <h3>Personal Website</h3>
          <h4>You could possibly put an image here</h4>
          <h4>Technologies Used</h4>
          <div className="Grid Grid--gutters Grid--12 Grid--nested">
            <div className="Grid-cell">
              <div className="Demo">Gatsby</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">React.js</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">CSS</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">Flexbox</div>
            </div>
          </div>
          <div className="Grid Grid--gutters Grid--2 Grid--nested">
            <div className="Grid-cell">
              <div className="Demo">
                <a href="#" className="button view-project">
                  <i className="fa fa-download" /> View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Grid Grid--gutters Grid--cols-2 u-textCenter">
      <div className="Grid-cell">
        <div className="Demo">
          <h3>Budget Trace</h3>
          <h4>You could possibly put an image here</h4>
          <h4>Technologies Used</h4>
          <div className="Grid Grid--gutters Grid--12 Grid--nested">
            <div className="Grid-cell">
              <div className="Demo">HTML</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">CSS</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">JavaScript</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">PHP</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">MySQL</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">Apache</div>
            </div>
          </div>
          <div className="Grid Grid--gutters Grid--2 Grid--nested">
            <div className="Grid-cell">
              <div className="Demo">
                <a href="#" className="button view-project">
                  <i className="fa fa-download" /> View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Grid-cell">
        <div className="Demo">
          <h3>TODO To Done</h3>
          <h4>You could possibly put an image here</h4>
          <h4>Technologies Used</h4>
          <div className="Grid Grid--gutters Grid--12 Grid--nested">
            <div className="Grid-cell">
              <div className="Demo">Node.js</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">Express.js</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">MongoDB</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">React.js</div>
            </div>
            <div className="Grid-cell">
              <div className="Demo">Bootstrap</div>
            </div>
          </div>
          <div className="Grid Grid--gutters Grid--2 Grid--nested">
            <div className="Grid-cell">
              <div className="Demo">
                <a href="#" className="button view-project">
                  <i className="fa fa-download" /> View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="Grid Grid--gutters Grid--cols-3 u-textCenter">
      <div className="Grid-cell">
        <div className="Demo content-1of3" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of3" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of3" />
      </div>
    </div> */}
  </div>
)

export default Portfolio
