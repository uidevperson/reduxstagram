// index.js
import { combineReduxers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';
//
const RouterReducer = combineReduxers({
	posts,
	comments,
	routing: routerReducer
});

export default RouterReducer;


