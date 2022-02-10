import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const CreatePostpage = ({ isAuth }) => {
	const [title, setTitle] = useState('');
	const [postText, setPostText] = useState('');
	const postsCollectionRef = collection(db, 'posts');
	const navigate = useNavigate();
	const createPost = async () => {
		await addDoc(postsCollectionRef, {
			title,
			postText,
			author_name: auth.currentUser.displayName,
			u_id: auth.currentUser.uid,
		});
		navigate('/');
	};
	useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		}
	}, []);

	return (
		<div className='createPostPage'>
			<div className=' cpContainer'>
				<h1>Create a Post</h1>
				<div className='inputGp'>
					<label>Title : </label>
					<input
						placeholder='Title...'
						onChange={(event) => {
							setTitle(event.target.value);
						}}
					/>
				</div>
				<div className='inputGp'>
					<label>Post :</label>
					<textarea
						placeholder='Post ...'
						onChange={(event) => {
							setPostText(event.target.value);
						}}
					/>
				</div>
				<button onClick={createPost}> Submit Post</button>
			</div>
		</div>
	);
};

export default CreatePostpage;
