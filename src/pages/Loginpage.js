import React from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Loginpage = ({ setIsAuth }) => {
	const navigate = useNavigate();
	const signInWithGoogle = () => {
		signInWithPopup(auth, provider).then((result) => {
			localStorage.setItem('isAuth', true);
			localStorage.setItem(
				'lsname',
				JSON.stringify(auth.currentUser.displayName)
			);
			setIsAuth(true);
			navigate('/');
		});
	};
	return (
		<div className='loginPage'>
			<p>Sign In With Google to Continue</p>
			<button onClick={signInWithGoogle} className='login-with-google-btn'>
				Sign in With Google
			</button>
		</div>
	);
};

export default Loginpage;
