"use strict";

import React from 'react'
import NavLink from '../controls/navLink'
import MenuLink from '../controls/menuLink'
import WebRequest from '../services/webRequest'
import RepoStore from '../stores/repoStore'
import { getAllRepos, addRepo } from '../actions/RepoActions'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState() {
    return {
      repos: RepoStore.getState()
    }
  },
  componentWillMount() {
    getAllRepos();
  },
  componentDidMount() {
    this.storeChangeListener = RepoStore.addListener(this.onChange);
  },
  componentWillUnmount() {
    this.storeChangeListener.remove();
  },
  onChange(data) {
    this.setState({repos: RepoStore.getState()});
  },
  handleSubmit(event) {
    event.preventDefault();
    const author = event.target.elements[0].value;
    const name = event.target.elements[1].value;

    addRepo(author, name);

    this.newRepoForm.closePopup();
  },
  render() {
    const repos = this.state.repos.map(repo => {
      return (
        <li key={repo.id}>
          <NavLink to={`/repo/${repo.author}/${repo.name}`}>{RepoStore.getRepoName(repo)}</NavLink>
        </li>
      )
    })

    return (
      <div>
        <h2>Repos</h2>
        <MenuLink text="New" ref={c => this.newRepoForm = c}>
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
