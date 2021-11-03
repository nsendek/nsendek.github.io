/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from 'react-router-dom';

import ParticleWall from "./components/particle-wall";
import ContactIcons from "./components/contact-icons";
import Menu from "./components/menu";
import Views from "./views";

const Website = () => (
    <React.Fragment>

      {/* Using Hash routes because github.io doesn't allow routing configuration */}
      <HashRouter hashType="noslash">
        <ParticleWall />
        <Views />
      </HashRouter>

      <Menu />
      <ContactIcons />
      
    </React.Fragment>
);

ReactDOM.render(<Website />, document.getElementById("root"));
