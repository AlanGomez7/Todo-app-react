import "./TodoList.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import EditTodo from '../components/EditTodo';
import React, { useEffect, useRef, useState } from "react";


function TodoInput() {
  let [todo, setTodo] = useState('');
  let [todos, setTodos] = useState([]);
  let inputFocus = useRef(null)
  useEffect(()=>{
    inputFocus.current.focus()
  })

  const handleDelete = (id)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleCompletion = (id)=>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: true} : todo))
  }

  const editTodo = (id)=>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: true} : todo))
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
      <div className="TodoWrapper">
        <h1 className="poppins">Enter what you want to do?</h1>
        <input type="text" ref={inputFocus} className="todo-input" onChange={(e) => setTodo(e.target.value)} placeholder="Enter your To Do."/>
        <button className="todo-btn" onClick={() => setTodos([...todos,{id: Date.now(),task: todo,completed: false, isEditing: false}])}>
          Add Task</button>
        {todos.map((todo) => (
          todo.isEditing ? <EditTodo editTodo={editTask} task={todo}/> : 
          <>
          <div className="Todo poppins">
            <p className={todo.completed ? 'completed' : ''} onClick={()=>handleCompletion(todo.id)}>{todo.task}</p>
            <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(todo.id)}/>
            <FontAwesomeIcon icon={faTrash}  onClick={()=>handleDelete(todo.id)} style={{marginRight:'15px'}}/>
            </div>
          </div>
         </>
        ))}
      </div>
    </div>
  );
}

export default TodoInput;
 