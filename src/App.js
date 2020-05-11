import React, { Component } from "react";
import "./App.css";
import "./style/forumStyle.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Router from './components/Router';
import Footer from './components/Footer';


class App extends Component {
	render() {
		return (
			<div className="App">
				< Router />
				< Footer />
			</div>
		);
	}
}


export default App;
