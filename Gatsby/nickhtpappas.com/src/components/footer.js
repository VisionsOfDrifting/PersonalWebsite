import React from 'react'
import Link from 'gatsby-link'
import '../style/footer.css'

const Footer = () => {
  return (
    <footer className="footer center">
      <h6>Copyright &copy; {new Date().getFullYear()} Nicholas Pappas</h6>
    </footer>
  )
}

export default Footer
