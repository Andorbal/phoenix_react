import { REPO_ADDING, REPO_ADDED, REPO_NOT_ADDED } from '../actions/addRepo'
import { REPOS_FETCHING, REPOS_FETCHED, REPOS_NOT_FETCHED } from '../actions/fetchRepos'

const initialState = {
  items: [],
  isFetching: false,
  isAdding: false
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case REPO_ADDING:
      return {
        ...state,
        isAdding: true
      }
    case REPO_ADDED:
      return {
        ...state,
        isAdding: false,
        items: [...(state.items), action.repo].sort(compareRepo)
      }
    case REPO_NOT_ADDED:
      return {
        ...state,
        isAdding: false
      }
    case REPOS_FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case REPOS_FETCHED:
      return {
        ...state,
        isFetching: false,
        items: action.repos.sort(compareRepo)
      }
    case REPOS_NOT_FETCHED:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

function compareRepo(x, y) {
  const xName = getRepoName(x);
  const yName = getRepoName(y);

  return xName < yName ? -1 :
    xName > yName ? 1 :
    0;
}

function getRepoName(repo) {
  return `${repo.author}/${repo.name}`.toLowerCase();
}
