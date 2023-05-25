// Import required modules
import { useState, ChangeEvent } from 'react';
// Define prop types
type AddTodoProps = {
	addTodo: (title: string) => void;
};
// Define AddTodo component
const AddTodo: React.FC<AddTodoProps> = props => {
	// Destructure props
	const { addTodo } = props;
	// State for todo title
	const [todoTitle, setTodoTitle] = useState('');
	// Handle input change
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodoTitle(e.target.value);
	};
	// Handle add button click
	const onClickAdd = () => {
		if (todoTitle.trim() === '') {
			return;
		}
		addTodo(todoTitle);
		setTodoTitle('');
	};
	// Render component
	return (
		<div className='add-todo'>
			<span className='add-todo-prefix'>👉</span>
			<input
				type='text'
				placeholder='I need to ...'
				value={todoTitle}
				onChange={onChange}
			/>
			<button className='add-todo-add' onClick={onClickAdd}>
				Add
			</button>
		</div>
	);
};
// Export component
export default AddTodo;
