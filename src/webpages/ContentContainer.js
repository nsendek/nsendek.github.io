import React, { Component } from 'react';
import './styles/parallax.css';

import pic1 from './resources/wallpapers/pic1.png';
import pic2 from './resources/wallpapers/pic2.png';
import pic3 from './resources/wallpapers/pic3.png';
import pic4 from './resources/wallpapers/pic4.png';
import pic5 from './resources/wallpapers/pic5.png';

const SCROLLER_FADE_DISTANCE = 10;

class ContentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    }
  }

  componentDidMount() {
    const content = document.getElementById('contentBox');
    console.log(content.getBoundingClientRect()); // only works once

    window.addEventListener("resize", this.updateDimensions);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  // componentDidUpdate() { // only being used because of redux rn
  //   const content = document.getElementById('contentBox');
  //   console.log(content.getBoundingClientRect()); // only works once
  // }

  updateDimensions = () => {
  }

 async changeScroll(event) {
    const title = document.getElementById("parallaxTitle");
    const titleOpacity = Math.max(0, 1 - event.target.scrollTop / (window.innerHeight * 0.5));

    // const scroller = document.getElementById("scroller");
    // const scrollerOpacity = Math.max(0, 1 - event.target.scrollTop / (SCROLLER_FADE_DISTANCE));

    title.setAttribute("style", `opacity:${titleOpacity};`);

}

  render() {
    return (
      <div className = "content" onScroll={(event) => this.changeScroll(event)}>
         <div className="main-container">
           <div id="colorbars" height='100%'>
                <div className = 'background-parallax pic1 gradient' >
                <img src={pic1} alt="colorbar" height = '100%' />
                </div>
                <div className = 'background-parallax pic2 gradient' >
                <img src={pic2} alt="colorbar" height = '100%' />
                </div>
                <div className = 'background-parallax pic5 gradient' >
                <img src={pic5} alt="colorbar" height = '100%'/>
                </div>
                <div className = 'background-parallax pic4 gradient' >
                <img src={pic4} alt="colorbar" height = '100%'/>
                </div>
                <div className = 'background-parallax pic3 gradient' >
                <img src={pic3} alt="colorbar" height = '100%'/>
                </div>
           </div>

         <div className="parallax-title">
             <h1 id= "parallaxTitle">
               {this.props.title}
             </h1>
         </div>

         <div id = 'contentBox' className="parallax-content-container">
            {this.props.content}
         </div>

         </div>
      </div>
    );
  }
}


export default ContentContainer;
