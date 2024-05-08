import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import axios from "axios";

const App = () => {
const initialState = JSON.parse(localStorage.getItem("todos")) || [];
const [input, setInput] = useState ("");
const [todos, setTodos] = useState(initialState);
const [editTodo, setEditTodo] = useState(null);


useEffect(()=> {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


useEffect(() => {
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000');
      setTodos(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  fetchTasks();
}, []);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />  
        </div>
        <div>
        <Form
        input= {input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        </div>
       <div>
        <TodoList todos= {todos} setTodos={setTodos} setEditTodo={setEditTodo} />
       </div>
      </div>
    </div>
  );
};

export default App;
