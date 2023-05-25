import { useState, ChangeEvent } from "react";

type AddTodoProps = {
  addTodo: (title: string) => void;
}


const AddTodo: React.FC<AddTodoProps> = props => {
  const { addTodo } = props;

  const [todoTitle, setTodoTitle] = useState("");

  const onChange=(e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  }

  const onClickAdd = () => {
    if (todoTitle.trim() === "") {
      return;
    }
    addTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <div className="add-todo">
      <span className="add-todo-prefix">👉</span>
      <input
        type="text"
        placeholder="I need to ..."
        value={todoTitle}
        onChange={onChange}
      />
      <button className="add-todo-add" onClick={onClickAdd}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;