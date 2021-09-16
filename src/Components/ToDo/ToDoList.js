import React, { Component } from "react";
import NavItem from "reactstrap/lib/NavItem";

export default class ToDoList extends Component {
	constructor(){
		super();

		this.state = {
			userInput: '',
			list: [],
		}
	}
 changeUserInput(key, value){
	 this.setState({
		 [key]: value
	 });
 }

 addToList(){
	 const userInput={
    id: 1 + Math.random(),
		value: this.state.userInput.slice()
	 }
 
	 const list = [...this.state.list]

	 list.push(userInput)

	 this.setState({
		 list,
		 userInput: ''
	 })
 }
 deleteItem(id){
	 const list = [...this.state.list]

	 const updatedList =list.filter(item => item.id !== id)

	 this.setState({list: updatedList})
 }

 
 
	render() {
		return (
			<div className="to-do-list">
				<input type="text" placeholder="Type item here..." value={this.state.userInput}
				onChange={e => this.changeUserInput("userInput", e.target.value)}/>
				<button onClick={e => this.addToList()}>Click</button>
				<ul>
					
					{this.state.list.map( item => {
						return(
							<li key={item.id}>
								{item.value}
								<button onClick={() => this.deleteItem(item.id)}>X</button>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}