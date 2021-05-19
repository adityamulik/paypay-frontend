import React from 'react';
import {Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isAuthed, isLoading, ...props }) => {
  if (isLoading) {
    return <p>Loading ....</p>;
  }

  if (!isAuthed) {
    return <Redirect to="/login" />
  }

  return (
    <Route {...props} />
  )
};

export default PrivateRoute;