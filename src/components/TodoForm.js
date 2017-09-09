import React from 'react'

const TodoForm = ({ inputValue, handleOnChange, onClick }) => (

    <div>
      <input 
        value={inputValue}
        onChange={handleOnChange}
      />
      <button onClick={onClick}>
        +
      </button>
    </div>

);

export default TodoForm;