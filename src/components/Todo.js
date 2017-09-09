import React from 'react';

const Todo = ({ todoText }) => {
  // Each Todo
  return (
    <li>
        {todoText}
    </li>
    );
}

export default Todo;