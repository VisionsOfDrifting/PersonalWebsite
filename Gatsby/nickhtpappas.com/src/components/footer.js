import React from 'react'
import Link from 'gatsby-link'
import '../style/footer.css'

const Footer = () => {
  return (
    <footer className="footer center">
      <div className="footer-cell-one ">
        <h6>Social</h6>
        <div className="footer-links">
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-github" />
          </a>
          <a href="#">
            <i className="fa fa-codepen" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </div>
      </div>
      <div className="footer-cell-two ">
        <div className="copyright-cell ">
          <h6>&copy; {new Date().getFullYear()} </h6>
        </div>
        <div className="copyright-cell-name">
          <div className="copyright-cell ">
            <h5>Nicholas</h5>
          </div>
          <div className="copyright-cell ">
            <h5>Pappas</h5>
          </div>
        </div>
      </div>
      <div className="footer-cell-three ">
        <h6>Site</h6>
        <div className="footer-links">
          <a href="#">
            <h5>Home</h5>
          </a>
          <a href="#">
            <h5>About</h5>
          </a>
          <a href="#">
            <h5>Contact</h5>
          </a>
          <a href="#">
            <h5>Portfolio</h5>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
