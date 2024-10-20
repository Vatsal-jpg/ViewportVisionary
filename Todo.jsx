import React, { useState } from 'react';
import '../Todos.css';

const Todo = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    function AddTodo() {
        if (input.trim() && date && time) {
            const newTodo = {
                task: input,
                date: date,
                time: time,
            };
            setList([...list, newTodo]);
            setInput('');
            setDate('');
            setTime('');
        }
    }

    function RemoveTodo(indexToRemove) {
        const updatedList = list.filter((_, index) => index !== indexToRemove);
        setList(updatedList);
    }

    return (
        <div className="todo-container">
            <div className="todo">
                <input
                    type="text"
                    placeholder="Enter Todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <input 
                    type="date"
                    placeholder="Select Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Select Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <button onClick={AddTodo}>+</button>
            </div>

            <ul>
                {list.map((todo, index) => (
                    <li key={index}>
                        <span className="DisplayTodo">
                            <strong>{todo.task}</strong>
                            <small>{todo.date}</small>
                            <small>{todo.time}</small>
                        </span>
                        <button onClick={() => RemoveTodo(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
