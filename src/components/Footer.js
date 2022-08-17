import React from "react"
import { FaLinkedinIn, FaGithub} from "react-icons/fa"

function Footer(props) {
  return (
    <footer className="footer" style={{ backgroundColor: "#7431A2" }}>
      <p className="footer-tag">Is it Gay</p>
      <p className="footer-rights">IIG All Right Reserved®</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/ashleymrichard1" className="social-link" alt="Link/edin Link"><FaLinkedinIn size ={20}/></a>
        <a href="https://github.com/amr745" className="social-link" alt="Github Link"><FaGithub size ={20}/></a>
      </div>
    </footer>
  )
}
  
  export default Footer