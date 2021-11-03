import React from 'react';

import ViewContainer from "../../components/view-container";
import styles from "./styles.scss";


const About = () => {
  return (
    <ViewContainer className={styles.aboutView}>
      <img className={styles.portrait} src="./static/images/me.jpg" />

      <div className={styles.bio}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit. Sed arcu non odio euismod. Accumsan tortor posuere ac ut consequat semper. Purus in mollis nunc sed id semper risus in hendrerit. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Scelerisque felis imperdiet proin fermentum. Orci a scelerisque purus semper eget duis at tellus at. Tellus pellentesque eu tincidunt tortor aliquam. Sit amet commodo nulla facilisi. Eu ultrices vitae auctor eu augue ut lectus arcu. Ullamcorper a lacus vestibulum sed arcu. Mi eget mauris pharetra et ultrices. Purus viverra accumsan in nisl. Suscipit adipiscing bibendum est ultricies integer quis. Aenean sed adipiscing diam donec adipiscing tristique. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Orci a scelerisque purus semper eget duis at tellus at. Non quam lacus suspendisse faucibus interdum posuere lorem.
        </p>
        <p>
          Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Orci phasellus egestas tellus rutrum tellus pellentesque. In aliquam sem fringilla ut morbi tincidunt. Feugiat in fermentum posuere urna. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. In hac habitasse platea dictumst quisque sagittis purus. Euismod lacinia at quis risus sed vulputate odio ut enim. Placerat in egestas erat imperdiet sed. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Diam vulputate ut pharetra sit amet. Odio euismod lacinia at quis risus sed vulputate odio. Est ante in nibh mauris cursus. In aliquam sem fringilla ut morbi tincidunt. Ut ornare lectus sit amet est placerat. Bibendum enim facilisis gravida neque convallis a cras. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing.
        </p>
      </div>
    </ViewContainer>
  );
};

export default About;
