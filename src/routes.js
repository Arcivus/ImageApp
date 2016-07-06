import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PicturesIndex from './components/pictures_index';
import PicturesShow from './components/pictures_show';
import PicturesNew from './components/pictures_new';

import { fetchPicture } from './actions/index';

export default(
	<Route path="/" component={App}>
		<IndexRoute component={PicturesIndex} />
		<Route path="pictures/new" component={PicturesNew} />
		<Route path="pictures/:id" component={PicturesShow} />
	</Route>
);