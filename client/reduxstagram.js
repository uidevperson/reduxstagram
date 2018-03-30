// let's go!
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import css from './styles/style.styl';
// import components
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
// router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main} >
			<IndexRoute component={PhotoGrid} ></IndexRoute>
			<Route path="/view/:postId"></Route>
		</Route>
	</Router>
);
	




render(<Main />, document.getElementById('root'));