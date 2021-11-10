import React from 'react';
import { Route, Redirect,  Switch} from "react-router-dom";
import ViewContainer from "../../components/view-container";

import contents from '../../contents';

const Project = () => (
  <ViewContainer>
    <Switch>
      {contents.map( c => (
        <Route key={c.path} exact path={c.path} component={c.component} />
      ))}
      <Route path='*'> 
        <Redirect to="/404" />
      </Route>
    </Switch>
  </ViewContainer>
);

export default Project;
