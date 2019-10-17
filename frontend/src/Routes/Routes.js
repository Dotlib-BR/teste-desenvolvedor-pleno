import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

//
//	Public Pages
//
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Edit from '../Pages/Edit';

// const Page404 = ({ location }) => (
// 	<NotFound route={location.pathname} />
// );

const Routes = () => {
	return(
		<div className="App">
			<BrowserRouter>
				<Navigation />
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/create' component={Register} />
					<Route exact path='/edit/:id' component={Edit} />
					{/* <Route component={Page404} /> */}
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	)
};

export default Routes;
