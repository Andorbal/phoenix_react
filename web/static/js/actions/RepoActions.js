import AppDispatcher from '../AppDispatcher';
import { RepoConstants } from '../constants/RepoConstants';
import RepoApi from '../api/RepoApi';

export function getAllRepos() {
  RepoApi.getAll()
    .then(data => {
      AppDispatcher.handleViewAction({
        actionType: RepoConstants.REFRESH_REPOS_RESPONSE,
        repos: data
      })
    })
    .catch(x => {
      console.log(x)
    });
}

export function addRepo(author, name) {
  RepoApi.add(author, name)
    .then(data => {
      AppDispatcher.handleViewAction({
        actionType: RepoConstants.NEW_REPO,
        repo: {
          id: data.repo_id,
          author: author,
          name: name
        }
      });
    })
    .catch(x => console.log(x));
}
