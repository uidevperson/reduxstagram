// let's go!
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import css from './styles/style.styl';
// import components
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
// router
import { Router, Route, IndexRouter, browserHistory } from 'react-router'



render(<Main />, document.getElementById('root'));