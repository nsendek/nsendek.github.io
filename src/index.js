import React from "react";
import ReactDOM from "react-dom";


import ParticleWall from "./components/particle-wall";
import ContactIcons from "./components/contact-icons";
import Menu from "./components/menu";

// import Home from './views/home'

/*
 * Import { Provider } from 'react-redux';
 * import { createStore } from 'redux';
 * import updateState from './reducers'
 * import './index.css';
 * import WebSite from './webpages/index.js'
 */

import {
  HashRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
  useLocation,
  useParams
} from 'react-router-dom'

const Website = () => (
  <React.Fragment>
    <ParticleWall />
    <Menu />
    <ContactIcons />
  </React.Fragment>
)

ReactDOM.render(<Website />, document.getElementById("root"));
