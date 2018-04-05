import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionsCreator';
//
import Main from './Main';

function mapStateToProps(state){
	return {
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchTpProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchTpProps)(Main);

export default App;