import RepoApi from '../api/RepoApi'

export const REPOS_FETCHING = 'REPOS_FETCHING'
function fetchingRepos() {
  return {
    type: REPOS_FETCHING
  }
}

export const REPOS_FETCHED = 'REPOS_FETCHED'
function reposFetched(repos) {
  return {
    type: REPOS_FETCHED,
    repos: repos
  }
}

export default function fetchRepos() {
  return function (dispatch) {
    dispatch(fetchingRepos())

    return RepoApi.getAll()
      .then(repos => dispatch(reposFetched(repos)))
  }
}
