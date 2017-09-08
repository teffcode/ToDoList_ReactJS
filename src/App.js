import React, { Component } from 'react';

import TodoList from './components/TodoList'
import TodoItems from './components/TodoItems'
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      items: []
    }
  }

  addItem(e){

    let itemArray = this.state.items;

    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );
  
    this.setState({
      items: itemArray
    });
  
    this._inputElement.value = "";

    e.preventDefault();
  }
 
  createTasks = (item) => (
    this.setState({
      items: this.state.items.map({item.text})
    })
  )

  render() {

    return (
      <div>
          <TodoList 
            onSubmit={this.addItem} 
            ref={(a) => this._inputElement = a}
          >
            <TodoItems listItems={this.createTasks}/>
          </TodoList>
      </div>
    );
  }
}

export default App;
