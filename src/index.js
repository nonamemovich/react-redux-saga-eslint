import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import store from './store/index';
import { Provider } from 'react-redux';

ReactDom.render(
	<Provider store = {store}>
		<App />
	</Provider>, 
	document.getElementById("index")
);