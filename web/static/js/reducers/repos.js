import { REPO_ADDED } from '../actions/addRepo'
import { REPOS_FETCHED } from '../actions/fetchRepos'

export default function update(state = [], action) {
  switch (action.type) {
    case REPO_ADDED:
      return [...state, action.repo]
    case REPOS_FETCHED:
      return action.repos
    default:
      return state
  }
  return state
}
