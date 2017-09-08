import React from 'react';
import './TodoList.css';

const TodoItems = ({ listItems }) => {

    return(

        <div className="todoListMain">
            <ul className="theList">
                {listItems}
            </ul>
        </div>
    );
};

export default TodoItems;