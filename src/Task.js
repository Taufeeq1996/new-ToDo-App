import './App.css';
import React from 'react';

export const Task = (props) => {
    return( 
    <div className="task" style={{backgroundColor:props.completed ? "green" : "white"}}>
        <h1>{props.taskName}</h1>
        <button id = "complete" onClick={() => props.completeTask(props.id)}>completed</button>
        <button id = "delete" onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
    )
}