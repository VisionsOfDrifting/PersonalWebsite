import React from 'react'
import Link from 'gatsby-link'
import '../style/footer.css'

const Footer = () => {
  return (
    <footer className="footer center">
      <div className="footer-cell-one ">
        <h6>Social</h6>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/nicholas-pappas-044189130/">
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://github.com/VisionsOfDrifting">
            <i className="fa fa-github" />
          </a>
          <a href="https://codepen.io/VisionsOfDrifting/#">
            <i className="fa fa-codepen" />
          </a>
          <a href="https://twitter.com/Dreams_Of_AI">
            <i className="fa fa-twitter" />
          </a>
        </div>
      </div>
      <div className="footer-cell-two ">
        <div className="copyright-cell ">
          <h6>&copy; {new Date().getFullYear()} </h6>
        </div>
        <div className="copyright-cell-name copyright-cell">
          <div className="copyright-cell-name-cell ">
            <h5>Nicholas</h5>
          </div>
          <div className="copyright-cell-name-cell ">
            <h5>Pappas</h5>
          </div>
        </div>
      </div>
      <div className="footer-cell-three ">
        <h6>Site</h6>
        <div className="footer-links">
          <Link to="/">
            <h5>Home</h5>
          </Link>
          <Link to="/about">
            <h5>About</h5>
          </Link>
          <Link to="/contact">
            <h5>Contact</h5>
          </Link>
          <Link to="/portfolio/portfolio-index">
            <h5>Portfolio</h5>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
