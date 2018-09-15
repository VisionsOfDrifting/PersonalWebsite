import React from 'react'
import Link from 'gatsby-link'
import '../style/test.css'

const Test = () => (
  <div>
    <div className="Box textCenter">
      <h2>Technologies</h2>
      <h4>Languages. Libraries. Frameworks. Tools.</h4>
      <div className="flex-container ">
        <div className="flex-item Box">
          <h4>Front End</h4>
          <div className="flex-container">
            <div className="flex-item Box">
              <h4>React</h4>
            </div>
            <div className="flex-item Box">
              <h4>Redux</h4>
            </div>
            <div className="flex-item Box">
              <h4>Jquery</h4>
            </div>
            <div className="flex-item Box">
              <h4>Bootstrap</h4>
            </div>
          </div>
        </div>
        <div className="flex-item Box">
          <h4>Back End</h4>
          <div className="flex-container">
            <div className="flex-item Box">
              <h4>Node</h4>
            </div>
            <div className="flex-item Box">
              <h4>Express</h4>
            </div>
            <div className="flex-item Box">
              <h4>PHP</h4>
            </div>
            <div className="flex-item Box">
              <h4>Bash</h4>
            </div>
          </div>
        </div>
        <div className="flex-item Box">
          <h4>Databases</h4>
          <div className="flex-container">
            <div className="flex-item Box">
              <h4>MySQL</h4>
            </div>
            <div className="flex-item Box">
              <h4>PostgreSQL</h4>
            </div>
            <div className="flex-item Box">
              <h4>MongoDB</h4>
            </div>
            <div className="flex-item Box">
              <h4>Firebase</h4>
            </div>
          </div>
        </div>
        <div className="flex-item Box">
          <h4>Other Tools</h4>
          <div className="flex-container">
            <div className="flex-item Box">
              <h4>Git</h4>
            </div>
            <div className="flex-item Box">
              <h4>Docker</h4>
            </div>
            <div className="flex-item Box">
              <h4>Github</h4>
            </div>
            <div className="flex-item Box">
              <h4>AWS</h4>
            </div>
            <div className="flex-item Box">
              <h4>Google Cloud</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Test
