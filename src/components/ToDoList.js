import React, { Component } from 'react';
import Blah from './Blah.js'
import ToDo from './ToDo.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class ToDoList extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let filteredList = this.props.tdlist.filter((val, ind)=> {
      switch(this.props.listFilter) {
        case "active":
          return val.done == false;
        case "completed":
          return val.done == true;
        default:
          return true;
      }
    })
    console.log(filteredList)

    let todos = filteredList.map((val,index) => {
      return (
        <ToDo key={index} name={val.name} done={val.done} toggleToDo={this.props.toggleToDo} index={index}/>
      )
    })

    return (
      <section className="main">
      {/* <!-- This section should be hidden by default and shown when there are todos --> */}
      <input id="toggle-all" className="toggle-all" type="checkbox"/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos}
        {/* <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" defaultChecked/>
            <label>Taste JavaScript</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" defaultValue="Create a TodoMVC template"/>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>Buy a unicorn</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" defaultValue="Rule the web"/>
        </li>
      </ul>
      </section>
          )
  }
}

export default ToDoList
