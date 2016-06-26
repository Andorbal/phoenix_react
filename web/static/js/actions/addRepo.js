import RepoApi from '../api/RepoApi'

export const REPO_ADDING = 'REPO_ADDING'
function addingRepo() {
  return {
    type: REPO_ADDING
  }
}

export const REPO_ADDED = 'REPO_ADDED'
function repoAdded(id, author, name) {
  return {
    type: REPO_ADDED,
    repo: {
      id: id,
      author: author,
      name: name
    }
  }
}

export default function addRepo(author, name) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    dispatch(addingRepo())
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return RepoApi.add(author, name)
      .then(id => dispatch(repoAdded(id, author, name)))
  }
}
