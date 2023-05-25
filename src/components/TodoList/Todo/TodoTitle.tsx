import React, { ChangeEvent } from "react";

type TodoTitleProps = {
  isEditing: boolean;
  isComplete: boolean;
  title: string;
  editedTodoTitle: string;
  setEditedTodoTitle: (title: string) => void;
};
export const TodoTitle: React.FC<TodoTitleProps> = ({
  isEditing,
  isComplete,
  title,
  editedTodoTitle,
  setEditedTodoTitle,
}) => {
  const onTodoTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTodoTitle = e.target.value;
    setEditedTodoTitle(newTodoTitle);
  };
  return (
    <div className="todo-title">
      <span>{isComplete ? `✔️` : `❌`}</span>
      {isEditing ? (
        <input
          className="edit-todo"
          type="text"
          value={editedTodoTitle}
          onChange={onTodoTitleChange}
        />
      ) : (
        <div className={`${isComplete && "todo-done"}`}>{title}</div>
      )}
    </div>
  );
};
