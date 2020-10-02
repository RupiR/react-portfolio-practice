import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import { Navbar } from 'react-bootstrap';

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
      
      <Navbar className="border-bottom">
        <Navbar.Brand>
        Rupi Rajput
        </Navbar.Brand>
    
      </Navbar>
      </Container>
    </Router>
    );
}
}

export default App;

