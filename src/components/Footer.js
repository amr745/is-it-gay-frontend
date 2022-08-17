import React from "react"
import { FaLinkedinIn, FaGithub} from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer(props) {

  // const social= () => {
  //   window.location.href="https://www.linkedin.com/in/ashleymrichard1";
  // }

  // const git= () => {
  //   window.location.href = "https://github.com/amr745/express-and-react-lab-frontend";
  // }

  return (
    <footer className="footer" style={{ backgroundColor: "#FF689F" }}>
      <p className="footer-tag">Is it Gay</p>
      <p className="footer-rights">IIG All Right Reserved®</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/ashleymrichard1" className="social-link" alt="Linkedin Link"><FaLinkedinIn/></a>
        <a href="https://github.com/amr745" className="social-link" alt="Github Link"><FaGithub/></a>
      </div>
    </footer>
  )
}
  
  export default Footer