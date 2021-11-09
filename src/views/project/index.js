import React from 'react';
import { useParams , Link} from "react-router-dom";
import ViewContainer from "../../components/view-container";

import {components} from '../../contents';

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

const  Project = () => {
  const params = useParams();

  const Content = components[params.id] || NotFound;

  return (
    <ViewContainer>
      <Content />
    </ViewContainer>
  )
};

export default Project;
