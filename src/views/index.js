import React from 'react';

import {
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

// import ViewContainer from "../components/view-container";
import About from "./about";
import Home from "./home";
import Projects from "./projects";

import "./styles.css";

const Views = withRouter(({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={700}
        classNames="slide" // global css from styles.css
        key={location.pathname}
      >
        <Switch location={location} >
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />

          {/* <Route exact path="/art">
            <ViewContainer> ARTS </ViewContainer>
          </Route> */}
          
          <Route path='*'>
            <Redirect to="/" />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )});

export default Views;
