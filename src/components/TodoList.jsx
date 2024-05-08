import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
    const handleComplete = (id) => {
        setTodos(
            todos.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    const handleEdit = (todo) => {
        setEditTodo(todo);
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            {todos.map((todo) => (
                <div className="list-item" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "completed" : ""}`}
                        readOnly
                    />
                    <div className="buttons-container">
                        <button className="button-complete task-button" onClick={() => handleComplete(todo.id)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
