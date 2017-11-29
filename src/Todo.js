import React from 'react';



class Todo extends React.Component {

	render(){
  		return(
  			<div>
  			<h1>{this.props.task}</h1>
  			<h1>{this.props.importance}</h1>
  			<h1>{this.props.completed}</h1>

  			<button onClick={(e) => this.props.alert(e)}>What am I?</button>
  			</div>
  		)
  	}	
}

export default Todo
