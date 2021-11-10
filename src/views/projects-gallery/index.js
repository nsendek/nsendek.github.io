import React from 'react';
import ViewContainer from "../../components/view-container";
import Grid from "../../components/content-grid";
import styles from "./styles.scss";

import contents from "../../contents";

const ProjectsGallery = (props) => {
  return (
    <ViewContainer className={styles.projectsView}>
      <Grid className={styles.grid} contents={contents} />
    </ViewContainer>
  );
};

export default ProjectsGallery;
