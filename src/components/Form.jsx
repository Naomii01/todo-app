import React, { useState, useEffect } from "react";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
            setIsEditing(true);
        } else {
            setInput("");
            setIsEditing(false);
        }
    }, [editTodo, setInput]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isEditing) {
            const updatedTodos = todos.map((todo) =>
                todo.id === editTodo.id ? { ...todo, title: input } : todo
            );
            setTodos(updatedTodos);
            setEditTodo(null);
        } else {
            setTodos([...todos, { id: Date.now(), title: input, completed: false }]);
        }
        setInput("");
    };

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a Todo...."
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="button-add" type="submit">
                {isEditing ? "OK" : "Add"}
            </button>
        </form>
    );
};

export default Form;
