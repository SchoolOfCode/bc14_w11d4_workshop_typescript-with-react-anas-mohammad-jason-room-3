// Define the type of props passed to TodoButtons component
type TodoButtonsProps = {
	isEditing: boolean;
	isComplete: boolean;
	onClickToggle: () => void; // Function to toggle completeness of todo
	onClickDelete: () => void; // Function to delete todo
	onClickEditOrDone: () => void; // Function to switch between edit and done modes
};
// TodoButtons component receives props and renders button elements
export const TodoButtons: React.FC<TodoButtonsProps> = ({
	isEditing,
	isComplete,
	onClickToggle,
	onClickDelete,
	onClickEditOrDone,
}) => {
	return (
		<div className='todo-buttons'>
			{!isEditing && ( // Render toggle button if not in edit mode
				<button className='toggle-button' onClick={onClickToggle}>
					{isComplete ? 'Mark Not Done' : 'Mark Done'}
				</button>
			)}
			{!isComplete && ( // Render edit button if not complete
				<button className='edit-button' onClick={onClickEditOrDone}>
					{isEditing ? 'Done' : 'Edit'}
				</button>
			)}
			{!isEditing && ( // Render delete button if not in edit mode
				<button className='delete-button' onClick={onClickDelete}>
					Delete
				</button>
			)}
		</div>
	);
};
