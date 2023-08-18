import React, { useState } from "react";
import './../styles/App.css';

let arr = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a React app", completed: false },
  { id: 3, text: "Deploy the React app", completed: false }
];

const App = () => {
  const [todos, setTodos] = useState(arr);

  const handleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div >
          <h2 style={{padding:"0 30px"}}>Child Component</h2>
            <ul>
                { todos.map((todo) => {
                  return(
                    <div style={{display:"flex"}}>
                      <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                      </li>
                      <button onClick={() => handleComplete(todo.id)}>
                        Complete
                      </button>                  
                    </div>
                  )
                })}
            </ul>
        </div>
    </div>
  )
}

export default App;