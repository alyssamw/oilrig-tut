import React, { Component } from 'react';

class ToDo extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name,
    };
  }

  handleChange = (event)=> {
    this.setState({value: event.target.value})
    /*this.state.done ? this.props.finishToDo : return*/
  }

  handleSubmit = (event)=>{
    this.props.addToDo(this.state.value)
    this.setState({value: ''})
    event.preventDefault();
  }

  test = ()=>{
    return(<h1>Hey</h1>)
  }

renderCheckbox = () => {
  if(this.props.done)
    return(
      <input className="toggle" type="checkbox" checked onClick={() => {this.props.toggleToDo(this.props.index)}} />
    )
  return(
    <input className="toggle" type="checkbox" onClick={() => {this.props.toggleToDo(this.props.index)}} />
  )
}

  render() {
	return(
    <li className={(this.props.done) ? "completed" : ""}>
      <div className="view">
        {this.renderCheckbox()}
        <label>{this.props.name}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" defaultValue={this.props.name}/>
    </li>
          )
	}
}

export default ToDo
