import React from 'react'
import DisplayTodos from "./DisplayTodos";
import Todos from "./Todos";
import "../css/todo.css"

function TodoMain() {
    return (
        <div>

            <div className="App">
                <h1><b> Todo App</b></h1>
                <Todos />
                <DisplayTodos />
            </div>
            );
        </div>
    )
}

export default TodoMain
