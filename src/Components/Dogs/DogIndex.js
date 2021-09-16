import React, { Component } from "react";

export default class DogIndex extends React.Component{
	constructor(){
	super()
	this.state = {
		randomPic: ''
	}
}


componentDidMount() {
	this.randomImage()

}
randomImage = () => {
fetch('https://dog.ceo/api/breeds/image/random')
	.then(res => res.json())
	.then(json => this.setState({ randomPic: json.message}))
}

render(){
	return(
		<div>
			<button onClick={() => this.randomImage()}>Click</button>
			<img src={this.state.randomPic} alt='Dog Pic'/>
		
		</div>
	)
}
}