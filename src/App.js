import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Assignment from './Components/Assignments/assignment';
import Login from './Components/Auth/Login/login';
import Register from './Components/Auth/Register/register';
import Contact from './Components/Contact/contact';
import Notes from './Components/Notes/notes';
import Footer from './Components/Footer/footer';
import AuthProvider from './Config/AuthContext';
import PrivateRoute from './Components/Auth/PrivateRoute'

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
						<PrivateRoute exact path='/notes' component={Notes} />
						<PrivateRoute exact path='/assignments' component={Assignment} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
					</Switch>
					<Footer />
				</>
			</AuthProvider>
		</BrowserRouter>
	)
};

export default App;
