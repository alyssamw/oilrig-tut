import React, { Component } from 'react';
import Blah from './Blah.js'
import Header from './Header.js'
import ToDoList from './ToDoList'
import Footer from './Footer.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tdlist: [],
      filter: "all"
    };
  }
// make a function for ToDo List to add todos
  addToDo = (todo)=>{
    let newList = this.state.tdlist
    newList.push({
      name: todo,
      /*editing: false,*/
      done: false,
    })
    console.log("new list", newList)
    this.setState({
      tdlist: newList,
    })
  }

  toggleToDo = (index)=>{
    let newList = this.state.tdlist;
    newList[index].done = !newList[index].done;
    this.setState({
      tdlist: newList,
    })
  }

  changeFilter = (filter) => {
    this.setState({
      filter: filter,
    })
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header addToDo={this.addToDo}/>
          {/* <!-- This section should be hidden by default and shown when there are todos --> */}
          <ToDoList tdlist={this.state.tdlist} listFilter={this.state.filter} toggleToDo={this.toggleToDo}/>
          {/* <!-- This footer should hidden by default and shown when there are todos --> */}
          {/* <!-- This should be `0 items left` by default --> */}
          <Footer tdlist={this.state.tdlist} changeFilter={this.changeFilter}/>
        </section>
        <Blah/>
      </div>
    );
  }
}

export default App;
