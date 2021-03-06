import React, { lazy } from 'react';
// import { Route, Switch, Router } from 'react-router';
// import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Article from '../pages/Article';
import Profile from '../pages/Profile';

import { DefaultLayout } from '../layout';

// const Home = lazy(() => import(/* webpackChunkName: 'Home' */ '../pages/Home'));
// const About = lazy(() => import(/* webpackChunkName: 'About' */ '../pages/About'));
// const Article = lazy(() => import(/* webpackChunkName: 'Article' */ '../pages/Article'));
// const Profile = lazy(() => import(/* webpackChunkName: 'Profile' */ '../pages/Profile'));

// console.log({ About });
// console.log({ Home });

// import reactRouterToArray from './RouteHelper';

export default [
	{
		path: '/',
		component: Home,
		exact: true,
		layout: DefaultLayout
	},
	{
		path: '/home',
		component: Home,
		exact: true,
		layout: DefaultLayout
	},
	{
		path: '/about',
		component: About,
		exact: true,
		layout: DefaultLayout
	},
	{
		path: '/article',
		component: Article,
		exact: true,
		layout: DefaultLayout
	},
	{
		path: '/profile',
		component: Profile,
		exact: true,
		layout: DefaultLayout
	}
];

// const outerToArray = reactRouterToArray(
// 	<Switch>
// 		<Route path='/' component={Home} />
// 		<Route path='about' component={About} />
// 		<Route path='users' component={Article} />
// 		<Route path='profile' component={Profile} />
// 	</Switch>
// );

// const Routes = () => {
// 	console.log('Routes');
// 	return (
// 		<Switch>
// 			<Route path='/' component={Home} exact />
// 			<Route path='/about' component={About} exact />
// 			<Route path='/users' component={Article} exact />
// 			<Route path='/profile' component={Profile} exact />
// 		</Switch>
// 	);
// };

// export default Routes;
