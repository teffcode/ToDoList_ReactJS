import React from 'react';
import './TodoList.css';

const TodoList = ({ onSubmit, ref, children }) => (
    <div className="todoListMain">
        <div className="header">
            <form onSubmit={onSubmit}>
                <input ref={ref}
                    placeholder="enter task">
                </input>
                <button type="submit">add</button>
            </form>
        </div>
        {children}
    </div>
);

export default TodoList;