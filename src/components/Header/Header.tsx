import React from 'react';
import logo from '../../soc-logo.svg';

const Header: React.FC = () => {
	return (
		<header className='header'>
			<img src={logo} className='logo' alt='logo' />
			<h1>Todo List</h1>
		</header>
	);
};

export default Header;
