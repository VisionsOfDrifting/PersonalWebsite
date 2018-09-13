import React from 'react'
import Link from 'gatsby-link'
import '../style/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      Copyright &copy; {new Date().getFullYear()} Nicholas Pappas
    </footer>
  )
}

export default Footer
