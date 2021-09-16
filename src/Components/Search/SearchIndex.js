import React from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends React.Component {
	constructor(){
	super()
   this.state = {
		 searchTerm: "",
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
		 filteredSearch: []
		 
   }
 }
 
 componentDidMount(){
	 this.searchFunction()
 }

 searchFunction = () => {
	 const inputValue = document.getElementById("search").value.toLowerCase()
	 if (inputValue === '') {
		 this.setState({ filteredSearch: this.state.things})
	 } else {
		 let thingsFiltered = this.state.things.filter((thing) => {
			 if (thing.toLowerCase().includes(inputValue)){
				 return thing
			 }
		 })
		 this.setState({ filteredSearch: thingsFiltered })
	 }
	 
 }

 render() {
	 return(
     <div>
       <Input id="search" placeholder='Search Here' onChange={this.searchFunction} />
       <h3>Results:</h3>
			 {this.state.filteredSearch.map(item => {
				 return (
					 <p>{item}</p>
				 )
			 })}
     </div>
	 )
 }
}
 
export default SearchIndex;
