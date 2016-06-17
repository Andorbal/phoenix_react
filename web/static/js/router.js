"use strict";

import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Core from './core'

export default React.createClass({
  render() {
    <Router history={hashHistory}>
      <Route path="/" component={Core}>
        <IndexRoute component={Home} />

        <Route path="/repos" component={Repos}>
          <Route path="/repo/:userName/:repoName" component={Repo} />
        </Route>
        <Route path="/about" component={About} />
      </Route>
    </Router>
  }
});
