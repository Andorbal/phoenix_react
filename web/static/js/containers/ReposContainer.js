import { connect } from 'react-redux'
import { addRepo } from '../actions'
import Repos from '../components/Repos'

const mapStateToProps = (state, ownProps) => {
  return {
    repos: state.repos,
    children: ownProps.children
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddRepo: (author, name) => dispatch(addRepo(author, name))
  }
}

const ReposContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos)

export default ReposContainer
