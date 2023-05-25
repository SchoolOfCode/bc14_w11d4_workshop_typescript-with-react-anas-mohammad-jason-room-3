type TodoButtonsProps = {
  isEditing: boolean;
  isComplete: boolean;
  onClickToggle: () => void;
  onClickDelete: () => void;
  onClickEditOrDone: () => void;
};

export const TodoButtons: React.FC<TodoButtonsProps> = ({
  isEditing,
  isComplete,
  onClickToggle,
  onClickDelete,
  onClickEditOrDone,
}) => {
  return (
    <div className="todo-buttons">
      {!isEditing && (
        <button className="toggle-button" onClick={onClickToggle}>
          {isComplete ? "Mark Not Done" : "Mark Done"}
        </button>
      )}
      {!isComplete && (
        <button className="edit-button" onClick={onClickEditOrDone}>
          {isEditing ? "Done" : "Edit"}
        </button>
      )}
      {!isEditing && (
        <button className="delete-button" onClick={onClickDelete}>
          Delete
        </button>
      )}
    </div>
  );
};
