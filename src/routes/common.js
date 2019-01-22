import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import BaseRoute from '../components/BaseRoute';
import Home from '../pages/home/Home';
import ErrorPage from '../pages/ErrorPage';

class Common extends Component {
  componentDidMount

  render() {
    return (
      <div>
        <Switch>
          <BaseRoute exact path="/" component={Home} />
          <BaseRoute exact path="/error/404" component={ErrorPage} />
          <BaseRoute component={() => <Redirect to="/error/404" />} />
        </Switch>
      </div>
    );
  }
}

export default Common;
