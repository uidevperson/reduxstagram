// index.js
import { combineReduxers } from 'redux';
import { routerReducer } from 'react-router-redux';
//
import posts from './posts';
import comments from './comments';

const routerReducer = combineReduxers({
	posts,
	comments,
	route: routerReducer
});

export default routerReducer;


