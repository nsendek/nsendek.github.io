/* eslint-disable indent */
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {HashRouter, useLocation} from 'react-router-dom';

import ParticleWall from "./components/particle-wall";
import ContactIcons from "./components/contact-icons";
import Menu from "./components/menu";
import Views from "./views";

const ScrollRestore = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Website = () => (
    <React.Fragment>

      {/* Using Hash routes because github.io doesn't allow routing configuration */}
      <HashRouter hashType="noslash">
        <Menu />

        <ScrollRestore />
        <ParticleWall />
        <Views />

      </HashRouter>

      
      <ContactIcons />
      
    </React.Fragment>
);

ReactDOM.render(<Website />, document.getElementById("root"));
