import React, { Component } from 'react';

import Title from './components/Title';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import './App.css'

var lookupTable = {
	'correr': '🏃',
  'gritar': '🗣',
  'vomitar': '🤢',
  'comer': '🤤',
  'pizza': '🍕',
}

class App extends Component {

  constructor(){
    super();

    this.state = {
      data: [],
      text: ''
    }
  }

  handleAddTodo = (e) => {
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

    function emojify (text) {

      var words = text.split(' ')
      var result = []
      
      words.forEach(function (word) {
        if (lookupTable[word]) {
          result.push(lookupTable[word])
        } else {
          result.push(word)
        }
      })
      
      return result.join(' ')
    }

    return this.state.data.map((todo) => {
      return (
          <Todo todoText={emojify(todo)}/>
      );
    });
  }

  handleKeyPress = (e) => {
    
    if(e.key == 'Enter'){
      e.preventDefault();
      this.state.data.push(this.state.text)

      this.setState({
        data: this.state.data
      })
    }
  }

  render(){

    return(
      <div>
        <div className="containerTitle">
          <Title titleName="Emoji Todo List"/>
        </div>
        <div className="btnAfter">
        </div>
        <TodoForm 
          inputValue={this.state.text}
          handleOnChange={this.handleOnChange}
          enter={this.handleKeyPress}
          onClick={this.handleAddTodo}
        />
        <TodoList todo={this.renderTodoNode()}/>
        </div>
    );
  }
}

export default App;
