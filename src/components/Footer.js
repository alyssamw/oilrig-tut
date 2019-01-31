import React, { Component } from 'react';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <footer className="footer">
      <span className="todo-count"><strong>0</strong> item left</span>
      {/* <!-- Remove this if you don't implement routing --> */}
      <ul className="filters">
        <li>
          <a className="selected" href="#/" onClick={()=> {this.props.changeFilter("all")}}>All</a>
        </li>
        <li>
          <a href="#/active" onClick={()=> {this.props.changeFilter("active")}}>Active</a>
        </li>
        <li>
          <a href="#/completed" onClick={()=> {this.props.changeFilter("completed")}}>Completed</a>
        </li>
      </ul>
      {/* <!-- Hidden if no completed items are left ↓ --> */}
      <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

export default Footer
