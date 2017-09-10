import React from 'react';

import '../styles/TodoForm.css';

const TodoForm = ({ inputValue, handleOnChange, enter, onClick }) => (

    <div>
      <input 
        value={inputValue}
        onChange={handleOnChange}
        onKeyPress={enter}
      />
      <button onClick={onClick}>
        add
      </button>
    </div>

);

export default TodoForm;