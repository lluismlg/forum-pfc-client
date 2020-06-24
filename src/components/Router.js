import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar  from './NavBar';

import Home from './Home';
import Post from './Post.js';
import Search from './Search.js';
import FAQ from './FAQ.js';
import Submit from './Submit.js';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Privacy from './Privacy';
import Sitemap from './Sitemap';
import Error from './Error';


class Router extends Component {
	
	render() {
		return (
			<BrowserRouter>

				< NavBar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/post" component={Post} />
					<Route exact path="/search" component={Search} />
					<Route exact path="/faq" component={FAQ} />
					<Route exact path="/submit" component={Submit} />
					<Route exact path="/about_us" component={AboutUs} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/privacy" component={Privacy} />
					<Route exact path="/sitemap" component={Sitemap} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Router 
