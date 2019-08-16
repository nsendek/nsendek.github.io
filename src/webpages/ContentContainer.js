import React, { Component } from 'react';
import './styles/ExplorePage.css';

import './styles/parallax.css';

import pic from './resources/NikoSendek.jpg'
import pic1 from './resources/wallpapers/pic1.png';
import pic2 from './resources/wallpapers/pic2.png';
import pic3 from './resources/wallpapers/pic3.png';
import pic4 from './resources/wallpapers/pic4.png';
import pic5 from './resources/wallpapers/pic5.png';


class ContentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    }
  }

 changeState(event) {
 if (event.target.scrollTop <= 0) {
   if(this.state.scrolled) {
     console.log("TOP");
     this.setState({scrolled: false});
   }
 } else if (event.target.scrollTop > 0) {
   if (!this.state.scrolled) {
     console.log("DOWN");
     this.setState({scrolled: true});
     }
 }
}

  render() {
//TODO: move parallax stuff from portfolio content
// into content conatiner so all pages have it.
    return (
      <div className = "content" onScroll={(event) => this.changeState(event)}>
         <div className="main-container">
           <div>
                <div className = 'background-parallax pic1 gradient' >
                <img src={pic1} alt="colorbar" height = '100%' />
                </div>
                <div className = 'background-parallax pic2 gradient'  >
                <img src={pic2} alt="colorbar" height = '100%' />
                </div>
                <div className = 'background-parallax pic3 gradient' >
                <img src={pic3} alt="colorbar" height = '100%'/>
                </div>
                <div className = 'background-parallax pic4 gradient' >
                <img src={pic4} alt="colorbar" height = '100%'/>
                </div>
                <div className = 'background-parallax pic5 gradient' >
                <img src={pic5} alt="colorbar" height = '100%'/>
                </div>
           </div>

         <div className="parallax-title">
             <h1>
               {this.props.title}
             </h1>
         </div>

         <div className="parallax-content-container">
            {this.props.content}
         </div>

         </div>
      </div>


    );
  }
}


export default ContentContainer;
