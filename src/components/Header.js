import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSignInAlt, FaHome, FaUser, FaSignOutAlt, FaInfoCircle, FaPlus } from "react-icons/fa";
import "../App.css"

function Header({ user, handleLogout }) {
      const logo = "https://imgur.com/1vfKBtj.png";
  return !user ?

    (<Navbar style={{ backgroundColor: "#7431A2", textAlign: "center"  }} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="logo-image" src={logo} alt="logo image"></img></Navbar.Brand>
        <Nav className="d-inline-flex p-2 bd-highlight" style={{textAlign: "center", margin: "auto", fontSize: "24px"}}>
          <Nav.Link as={Link} to="/"><FaHome />Home</Nav.Link>
          <Nav.Link as={Link} to="/register"><FaUser /> SignUp</Nav.Link>
          <Nav.Link as={Link} to="/login"><FaSignInAlt /> Login</Nav.Link>
          <Nav.Link as={Link} to="/about"><FaInfoCircle/>About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>) :
    (<Navbar style={{ backgroundColor: "#7431A2"}} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="logo-image" src={logo} alt="logo image" /></Navbar.Brand>
        <Nav className="d-inline-flex p-2 bd-highlight" style={{textAlign: "center", margin: "auto", fontSize: "24px"}}>
          <Nav.Link as={Link} to="/"><FaHome /> Home</Nav.Link>
          <Nav.Link as={Link} to="/about"><FaInfoCircle/>About</Nav.Link>
          <Nav.Link as={Link} to="/create"><FaPlus/>Add Content</Nav.Link>
          <Nav.Link as={Link} to="#" onClick={handleLogout}
          ><FaSignOutAlt /> Logout</Nav.Link>
          <h5 id="nav-header-name">Yaaas, {user.name}!</h5>
        </Nav>
      </Container>
    </Navbar>)

    




//inline style for the nav tag
  // const navStyle = {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   border: "3px solid black",
  //   padding: "8px",
  //   width: "90%",
  //   margin: "auto",
  // };




  // return (
    //     <header>
    //     <nav style={navStyle}>
    //     <Link to="/register">SIGNUP</Link>
    //     <Link to="/login">LOGIN</Link>
    //     <Link to="#">Logout</Link>
    //     {/* <Link to="/">INDEX</Link> */}
    //     <Link to="/about">ABOUT</Link>
    //     <Link to="/create">ADD CONTENT</Link>
    //     <h5 id="nav-header-name">Welcome {user.name}!</h5>
    //   </nav>
    //   <h1>Is It Gay?</h1>
    // </header>
  // );
}

export default Header;