import React from "react";

import Todo from "./Todo";

const Todolist = ({todos, setTodos}) => {
    return(
        <div className="todo-container">
      <ul className="todo-list">
      {todos.map((todo) => (
        <Todo setTodos={setTodos}
         key={todo.id}
          text={todo.text} 
          todo={todo}
          todos={todos}
            />
      ))}
      </ul>
   
    </div>

    );
};

export default Todolist;