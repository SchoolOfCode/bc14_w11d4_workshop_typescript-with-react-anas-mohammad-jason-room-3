import { useState } from 'react';
import { TodoButtons } from './TodoButtons';
import { TodoTitle } from './TodoTitle';
type TodoProps = {
	todo: {
		id: string;
		title: string;
		isComplete: boolean;
	};
	updateTodo: (
		id: string,
		update: { id: string; title?: string; isComplete?: boolean }
	) => void;
	deleteTodo: (id: string) => void;
};
export const Todo: React.FC<TodoProps> = ({ todo, updateTodo, deleteTodo }) => {
	const { id, title, isComplete } = todo;
	const [isEditing, setIsEditing] = useState(false);
	const [editedTodoTitle, setEditedTodoTitle] = useState(title);
	function onClickToggle() {
		const updatedTodo = { ...todo, isComplete: !isComplete };
		updateTodo(id, updatedTodo);
	}
	function onClickEdit() {
		setIsEditing(true);
	}
	function onClickDelete() {
		deleteTodo(id);
	}
	function onClickDone() {
		const updatedTodo = { ...todo, title: editedTodoTitle };
		updateTodo(id, updatedTodo);
		setIsEditing(false);
	}
	return (
		<div className='todo'>
			<TodoTitle
				title={title}
				isComplete={isComplete}
				isEditing={isEditing}
				editedTodoTitle={editedTodoTitle}
				setEditedTodoTitle={setEditedTodoTitle}
			/>
			<TodoButtons
				isComplete={isComplete}
				isEditing={isEditing}
				onClickToggle={onClickToggle}
				onClickEditOrDone={isEditing ? onClickDone : onClickEdit}
				onClickDelete={onClickDelete}
			/>
		</div>
	);
};
