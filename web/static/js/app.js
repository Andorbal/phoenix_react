// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix"
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import Core from './core'
import Home from './components/home'
import Repo from './components/repo'
import ReposContainer from './containers/ReposContainer'
import About from './components/about'
import buildStore from './buildStore'
import fetchRepos from './actions/fetchRepos'

import { useRouterHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

const appHistory = useRouterHistory(createBrowserHistory)({ basename: "/app" })
const store = buildStore();
const history = syncHistoryWithStore(appHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Core}>
        <IndexRoute component={Home} />

        <Route path="/repos" component={ReposContainer}>
          <Route path="/repo/:userName/:repoName" component={Repo} />
        </Route>
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

store.dispatch(fetchRepos());
