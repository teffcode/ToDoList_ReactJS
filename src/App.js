import React, { Component } from 'react';

import Title from './components/Title';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

class App extends Component {

  constructor(){
    super();

    this.state = {
      data: [],
      text: ''
    }
  }

  handleAddTask = (e) => {
    e.preventDefault();

    this.state.data.push(this.state.text)

    this.setState({
      data: this.state.data
    })

    console.log(this.state.data)
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  renderTodoNode() {
    return this.state.data.map((todo) => {
      return (
          <Todo todoText={todo}/>
      );
    });
  }

  render(){

    return(
      <div>
        <Title titleName="Todo List 💛"/>
        <TodoForm 
          inputValue={this.state.text}
          handleOnChange={this.handleOnChange}
          onClick={this.handleAddTask}
        />
        <TodoList todo={this.renderTodoNode()}/>
      </div>
    );
  }
}

export default App;
