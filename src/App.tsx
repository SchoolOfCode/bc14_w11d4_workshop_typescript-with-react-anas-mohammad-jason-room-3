import React from 'react';
import Header from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<TodoList />
		</div>
	);
};

export default App;
