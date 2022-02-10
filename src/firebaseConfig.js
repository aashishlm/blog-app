import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDlDI6f6r8ezsO9Kr4R_P9jaG8F0yhMFt4',
	authDomain: 'blog-website-e6cd7.firebaseapp.com',
	projectId: 'blog-website-e6cd7',
	storageBucket: 'blog-website-e6cd7.appspot.com',
	messagingSenderId: '43422718988',
	appId: '1:43422718988:web:9e631ca00ad44549882229',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
