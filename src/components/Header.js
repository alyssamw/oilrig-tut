import React, { Component } from 'react';
import App from './App.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
    };
  }

  handleChange = (event)=> {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event)=>{
    this.props.addToDo(this.state.value)
    this.setState({value: ''})
    event.preventDefault();
  }

  render() {
	return(<header className="header">
            <h1>todos</h1>
            <form onSubmit={this.handleSubmit}>
            <input className="new-todo" placeholder="What needs 2 be done" value={this.state.value} onChange={this.handleChange} autoFocus/>
            </form>
          </header>
          )
	}
}

export default Header
