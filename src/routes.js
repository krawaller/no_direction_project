/*
This is the "sitemap" of our app!
*/

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Wrapper} from './components/wrapper';
import Home from './components/home';
import Timer from './components/timer';
import Stopwatch from './components/stopwatch';

export default (
	<Route component={Wrapper} path="/" >
     	<IndexRoute component={Home}/>
    	<Route path='/timer' component={Timer}/>
    	<Route path='/stopwatch' component={Stopwatch}/>
    </Route>
);