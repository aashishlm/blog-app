import React, { useState } from 'react';
import { Routes, Route, Router, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import CreatePostpage from './pages/CreatePostpage';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

const App = () => {
	const navigate = useNavigate();
	const [isAuth, setIsAuth] = useState(false);
	const signUserOut = () => {
		signOut(auth).then(() => {
			localStorage.clear();
			setIsAuth(false);
			navigate('/login');
		});
	};
	return (
		<div>
			<nav>
				<Link to='/'>Home</Link>

				{!isAuth ? (
					<Link to='/login '>Login</Link>
				) : (
					<>
						<Link to='/post'>Create Post</Link>
						<p>Welcome {auth.currentUser.displayName}</p>

						<button className='button-6' onClick={signUserOut}>
							Sign Out
						</button>
					</>
				)}
			</nav>
			<Routes>
				<Route path='/' element={<Homepage isAuth={isAuth} />} />

				<Route path='/login' element={<Loginpage setIsAuth={setIsAuth} />} />
				<Route path='/post' element={<CreatePostpage isAuth={isAuth} />} />
			</Routes>
		</div>
	);
};

export default App;
