import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, deleteToDo } from './ducks/reducer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: ''
    }
  }

  add() {
    this.props.addTodo(this.state.newTodo)
  }

  render() {
    let todos = this.props.todos.map((todo, i) => {
      return (
        <div key={i}> 
          <p>{todo}</p>
          <button onClick={() => this.props.deleteToDo(i)}>Delete</button>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>My To-dos</h1>
        <input onChange={(event) => this.setState({newTodo: event.target.value})}></input>
        <button onClick={() => this.add()}>Add</button>
        <hr />
        {todos}
      </div>
    );
  }
}

//reduxStore could also be referred to as state

function mapStateToProps(reduxStore) {
  // the key value pairs from the redux stroe get added to this.props
  return reduxStore
}

export default connect(mapStateToProps, { addTodo, deleteToDo })(App);
