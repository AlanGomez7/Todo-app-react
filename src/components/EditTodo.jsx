import React, {useState} from 'react'

const EditTodo = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form action="">
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="todo-input" placeholder="Update your To Do."/>
        <button className="todo-btn" type='submit' onClick={(e)=>handleSubmit(e)}>Update</button>
    </form>
  )
}

export default EditTodo