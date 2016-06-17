"use strict";

import React from 'react'
import NavLink from '../controls/navLink'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState() {
    return {
      repos: []
    }
  },
  componentDidMount() {
    var request = new XMLHttpRequest();
    request.open('GET', '/api/repos', true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data);
        console.log(this);
        this.setState({"repos": data});
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  },
  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repo/${userName}/${repo}`;

    this.context.router.push(path);

    console.log(path);
  },
  render() {
    const repos = this.state.repos.map(repo => {
      console.log("Repo");
      console.log(repo);
      return (
        <li key={`${repo.author}-${repo.repo}`}>
          <NavLink to={`/repo/${repo.author}/${repo.repo}`}>{repo.repo}</NavLink>
        </li>
      )
    })

    return (
      <div>
        <h2>Repos</h2>

        <ul>
          {repos}
          <li>
            <NavLink to="/repo/reactjs/react-router">React Router</NavLink>
          </li>
          <li>
            <NavLink to="/repo/facebook/react">React</NavLink>
          </li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/> {' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>

        {this.props.children}
      </div>
  )}
});
