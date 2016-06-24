import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../AppDispatcher'
import { RepoConstants } from '../constants/RepoConstants'

class RepoStoreClass extends ReduceStore {
  constructor(dispatcher: Dispatcher) {
    super(dispatcher);
  }

  getInitialState() {
    return [];
  }

  reduce(state, action) {
    switch (action.action.actionType) {
      case RepoConstants.REFRESH_REPOS_RESPONSE:
        return action.action.repos.sort(this.compareRepo.bind(this));
      case RepoConstants.NEW_REPO:
        return state.concat(action.action.repo).sort(this.compareRepo.bind(this));
      default:
        return state;
    }
  }

  compareRepo(x, y) {
    const xName = this.getRepoName(x);
    const yName = this.getRepoName(y);

    return xName < yName ? -1 :
      xName > yName ? 1 :
      0;
  }

  getRepoName(repo) {
    return `${repo.author}/${repo.name}`.toLowerCase();
  }
}

const RepoStore = new RepoStoreClass(AppDispatcher);
export default RepoStore;
