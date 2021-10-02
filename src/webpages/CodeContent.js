import React, { Component } from 'react';
import './styles/explore_page.css';

class CodeContent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {    }

  render() {
    return (
      <div >
        <div className = "content-header" style = {{color : "white" , paddingTop: "100px" }}> REIMAGINING CLOCKS (4.032)</div>
        <iframe frameBorder="0" 
        src="https://nsendek.github.io/sketches/clock1/index.html" 
        width = "450px" height = "450px"/>
        <iframe frameBorder="0" 
        src="https://nsendek.github.io/sketches/clock2/index.html" 
        width = "400px" height = "400px"/>
        <iframe frameBorder="0"
         src="https://nsendek.github.io/sketches/clock3/index.html" 
         width = "400px" height = "400px"/>

        
<div className = "content-header" style = {{color : "white", paddingTop: "100px"  }}> INTERACTIVE SPACE : mouse hover fireworks (4.022)</div>
        <iframe frameBorder="0" 
        src="https://nsendek.github.io/sketches/interaction/index.html" 
        width = "750px" height = "750px"/>
      
      <div className = "content-header" style = {{color : "white" , paddingTop: "500px"}}> MORE TO COME</div>
      </div>
    );
  }
}


export default CodeContent;
