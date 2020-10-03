import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Rupi Rajput",
      headerLinks: [
        { title: 'Home', path: "/"},
        { title: 'About', path: "/about"},
        { title: 'Languages', path: "/languages"},
        { title: 'Portfolio', path: "/portfolio"},
        { title: 'Contact', path: "/contact"},
      ],
      home: {
        title: "Be Relentless",
        subTitle: "Projects that make a difference",
        text: "Checkout My Portfolio Below"
      },
      about: {
        title: "Who is Rupi R.?",
        
      },
      languages: {
        title: "Languages I'm proficient in",
    
      },
      portfolio: {
        title: "My Projects",
        
      },
      contact: {
        title: "Let's Talk",
        
      },
    }
  }

  render(){
    return (
    <Router>
      <Container className="p=0" fluid={true}>
      
      <Navbar className="border-bottom" bg="transparent" expand="lg">

        <Navbar.Brand>Rupi Rajput</Navbar.Brand>

        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/languages">Languages</Link>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Footer />

      </Container>
    </Router>
    );
}
}

export default App;

