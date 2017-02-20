import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';

import Master from './components/Master.jsx';
import Home from './components/pages/Home.jsx';

const AppRoutes = (
    <Route path="/" component={Master}>
        <IndexRoute component={Home} />
    </Route>
);

export default AppRoutes;
