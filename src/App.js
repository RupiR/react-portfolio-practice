import React from 'react';
import './App.css';

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
    <div>Hello from React</div>
    );
}
}

export default App;

