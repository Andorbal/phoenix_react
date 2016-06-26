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

export const REPOS_NOT_FETCHED = 'REPOS_NOT_FETCHED'
function reposNotFetched(reason) {
  return {
    type: REPOS_NOT_FETCHED,
    reason: reason
  }
}

export default function fetchRepos() {
  return function (dispatch) {
    dispatch(fetchingRepos())

    return RepoApi.getAll()
      .then(repos => dispatch(reposFetched(repos)))
      .catch(ex => dispatch(reposNotFetched(ex)))
  }
}
