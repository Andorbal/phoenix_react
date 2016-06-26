"use strict";

import NavLink from '../controls/navLink'
import MenuLink from '../controls/menuLink'
import React, { PropTypes } from 'react'

const fetchingRepos = (repos, children, onAddRepo) => (
  <div>
    <MenuLink text="New" canOpen={!repos.isAdding}>
      <form onSubmit={evt => {
          evt.preventDefault()
          const author = evt.target.elements[0].value;
          const name = evt.target.elements[1].value;
          onAddRepo(author, name)
        }}>
        <input type="text" placeholder="userName"/> / {' '}
        <input type="text" placeholder="repo"/> {' '}
        <button type="submit">Go</button>
      </form>
    </MenuLink>

    <ul>
      {repos.items.map(repo =>
        <li key={repo.id}>
          <NavLink to={`/repo/${repo.author}/${repo.name}`}>{`${repo.author}/${repo.name}`}</NavLink>
        </li>
      )}
    </ul>

    {children}
  </div>
)

const Repos = ({ repos, children, onAddRepo }) => (
  <div>
    <h2>Repos</h2>

    {repos.isFetching ? <span>Loading...</span> : fetchingRepos(repos, children, onAddRepo)}
  </div>
)

Repos.propTypes = {
  repos: PropTypes.shape({
    isAdding: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired
  }).isRequired,
  children: PropTypes.node,
  onAddRepo: PropTypes.func.isRequired
}

export default Repos
