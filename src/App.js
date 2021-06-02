import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../src/Pages/homepage/homepage.component';
import ShopPage from '../src/Pages/shop/shop.component';

const HatsPage = () => (
	<div>
		<h2>This is HatsPage functional component</h2>
	</div>
);

function App() {
  return (
    	<div>
		    <Switch>
				<Route exact path='/' component={ HomePage } />
				<Route exact path='/shop' component={ ShopPage } />
		    </Switch>
		
	</div>
  );
}

export default App;
