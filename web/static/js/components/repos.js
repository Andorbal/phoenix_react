"use strict";

import React from 'react'
import NavLink from '../controls/navLink'
import MenuLink from '../controls/menuLink'
import WebRequest from '../services/webRequest'

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
    WebRequest.getJson('/api/repos')
      .then(x => this.setState({"repos": x}))
      .catch(x => console.log(x));
  },
  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repo/${userName}/${repo}`;

    WebRequest.post('/api/repos/create', {
        userName: userName,
        repo: repo
      })
      .then(x => {
        console.log(x);
        this.setState({
          repos: this.state.repos.concat({ author: userName, repo: repo})
        });
        this.context.router.push(path);
      })
      .catch(x => {
        console.log(x);
      });
  },
  render() {
    const repos = this.state.repos.map(repo => {
      return (
        <li key={`${repo.author}-${repo.repo}`}>
          <NavLink to={`/repo/${repo.author}/${repo.repo}`}>{repo.repo}</NavLink>
        </li>
      )
    })

    return (
      <div>
        <h2>Repos</h2>
        <MenuLink text="New">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="userName"/> / {' '}
            <input type="text" placeholder="repo"/> {' '}
            <button type="submit">Go</button>
          </form>
        </MenuLink>

        <ul>
          {repos}
        </ul>

        {this.props.children}
      </div>
  )}
});
