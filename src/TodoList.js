import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem'
class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  // handleItemClick(index) {
  //   const list = [...this.state.list]
  //   list.splice(index, 1)
  //   this.setState({list})
  // }
  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
              return <TodoItem delete={this.handleDelete} content={item} key={index} index={index} />
            })
          }
        </ul>
      </div>
      
    );
  }
}

export default TodoList;
