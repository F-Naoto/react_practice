import React, {Component} from 'react';

class Todo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }

  onInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  redner(){
    const { todos } = this.state;
    return(
      <>
        <input type="text" oninput={this.onInput} />
        <button>登録</button>
        <ul>
          {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </>
    );
    }
  }

  export default Todo;
