import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <div>
    <h2>Contact Details</h2>
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
    <p>
      If you want to work with me or would like to colaborate on present or
      future projects contact me. Feel free to send me an email or message me on
      Linkedin.
    </p>
  </div>
)

export default Contact
