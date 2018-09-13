import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <div>
    <div className="row">
      <h2>Contact Details</h2>
      <div
        className="columns six center"
        style={{
          lineHeight: 1.5,
        }}
      >
        <p class="address">
          <span>Nicholas Pappas</span>
          <br />
          <span>Los Angeles, CA</span>
          {/* <br />
      <span>(123)456-7890</span> */}
          <br />
          <span>
            <a href="mailto:nickhtpappas@gmail.com">nickhtpappas@gmail.com</a>
          </span>
        </p>
      </div>
      <div className="columns six center">
        <h4>Social Media Profiles</h4>
        <ul className="social-links">
          <li>
            <a href="#">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-github" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="row"> More stuff</div> */}
      <p className="centeredP">
        If you are interested in hiring me or would like to colaborate on
        present or future projects contact me. Feel free to send me an email or
        message me on Linkedin.
      </p>
      {/* <div className="row">
      <div className="columns cenetered">
        <p className="centeredP">
          If you would like to colaborate on present or future projects contact
          me. Feel free to send me an email or message me on Linkedin.
        </p>
      </div>
    </div> */}
    </div>
  </div>
)

export default Contact
