import React from 'react';
import './Body.css';
import Header from './Header';

function Body({ spotify }) {
	return (
		<div className='body'>
			<Header spotify={spotify} />

			<div className='body__info'>
				<img src='https://i.scdn.co/image/6682aad217c11156e6d8985036996f1ea7ebb518' alt='' />
				<div className='body__infoText'>
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>description...</p>
				</div>
			</div>
		</div>
	);
}

export default Body;
