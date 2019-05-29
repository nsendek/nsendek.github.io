import React, { Component} from 'react';
import SideBar from './SideBar';
import './index.css';
import ContactContent from './ContactContent';
import { connect } from 'react-redux';

class ExplorePage extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleClick = () => {
    console.log(this.props.tab);
  }

  render() {
    return (
      <div className = "explore">
        <SideBar/>

        {this.props.tab === "CONTACT"
        ?
          <ContactContent />
        :
          null
        }
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tab: state.tab
  }
}

export default connect(mapStateToProps)(ExplorePage);
