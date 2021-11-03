import React from 'react';

import ViewContainer from "../../components/view-container";
import styles from "./styles.scss";


const About = () => {
  return (
    <ViewContainer className={styles.aboutView}>
      <img className={styles.portrait} src="./static/images/me.jpg" />

      <div className={styles.bio}>
        <p>
          I'm Niko and I'm unemployed please give me a job 😃
        </p>
        <p> 
          My professional experiences include extensive amounts of 
          web development and full-stack projects as well as UI/UX design. I'm currently seeking a job post gradauation.
        </p>
        <p>
          I've recently graduated from MIT with a B.S. in Computer Science and Engineering with a minor in Design, 
          my previous work while as a student was in the Tangible Media Group in MIT Media Lab. There 
          I worked as an undergrad researcher, then a project Assistant, working on a prototype 
          web application utilizing <a target="_blank" className={styles.link} href="https://scratch.mit.edu">Scratch</a>.
          My endgame is to continue my passion for art and technology in whatever opportunities arise. 
        </p>

        <div className={styles.buttons}>
          <a target="_blank" href="static/documents/resume.pdf" >
            CV
          </a>
          <a target="_blank" href="static/documents/portfolio.pdf" >
            Portfolio
          </a>
        </div>
      </div>
    </ViewContainer>
  );
};

export default About;
