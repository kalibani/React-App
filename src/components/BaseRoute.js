import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const BaseRoute = ({ component: Component, ...attributes }) => (
  <Route
    {...attributes}
    render={props => (
      <Component {...props} />
    )}
  />
);

BaseRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default BaseRoute;
