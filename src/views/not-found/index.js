import React from "react";
import { Link } from "react-router-dom";
import ViewContainer from "../../components/view-container";

const NotFound = () => {
  return (
    <ViewContainer>
      <h1>404 - Not Found!</h1>
      <Link to="/">
        Go Home
      </Link>
    </ViewContainer>
  )
};

export default NotFound;
