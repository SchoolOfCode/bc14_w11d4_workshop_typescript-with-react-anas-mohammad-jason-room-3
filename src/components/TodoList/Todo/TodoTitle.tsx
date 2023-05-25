import React, { ChangeEvent } from 'react';
// Define the props for TodoTitle component
type TodoTitleProps = {
	isEditing: boolean;
	isComplete: boolean;
	title: string;
	editedTodoTitle: string;
	// SetEditedTodoTitle is the function to set the new title
	setEditedTodoTitle: (title: string) => void;
};
// Define the TodoTitle component that renders an input field if isEditing is true,
// otherwise renders a div element
export const TodoTitle: React.FC<TodoTitleProps> = ({
	isEditing,
	isComplete,
	title,
	editedTodoTitle,
	setEditedTodoTitle,
}) => {
	// Function to handle changes in the input field
	const onTodoTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newTodoTitle = e.target.value;
		// Sets the new title with the setEditedTodoTitle function
		setEditedTodoTitle(newTodoTitle);
	};
	// Render the TodoTitle component with checked and unchecked buttons or
	// an input field or a div element, depending on the value of the props
	return (
		<div className='todo-title'>
			<span>{isComplete ? `✔️` : `❌`}</span>
			{isEditing ? (
				<input
					className='edit-todo'
					type='text'
					value={editedTodoTitle}
					onChange={onTodoTitleChange}
				/>
			) : (
				<div className={`${isComplete && 'todo-done'}`}>{title}</div>
			)}
		</div>
	);
};
