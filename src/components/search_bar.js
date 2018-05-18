//Components are two type - Functional (easy) & Class(complex and flexible)
//This file is an example of Class Component
//Class Component should be used when you want to work with State
//React.Component is a module in React
//React.Component is the way to refer it
//{Component} simplies this. Now it can be called directly
//React module is imported.
import React, { Component } from 'react'; 


class SearchBar extends Component {
  // State is plain JS object that is used to record and react to user events
  // Each class based component has its own state based object
  // Functional components do not have State
  // Whenever the state is changed it re-renders the correponding component including its child components.
  // Constructor is called whenever an instance of the object is created.
  constructor(props) {
    super(props);
  
    this.state = { term: ''};//{ term: ''} is an object with term as property
  }


  //render method is called when the class is refered
  //render should return the required HTML
  render() {
    //=> functions are concise as you see below
    // return <input onChange ={event => console.log(event.target.value)} />;
    // return <input onChange ={this.onInputChange} />;

    return (
      <div className="search-bar">
       <input
        value = {this.state.term}
        //it means that input text value change calls the event to set the state but not the actual value of the input
        //input value is based on the value of the state property.
        // onChange ={event => this.setState({term: event.target.value})} 

        //Whenever input chagnes it calls onInputChange
        onChange ={event => this.onInputChange(event.target.value)} 
        />
      </div>
    );
  }
  
  //Event Handler to handle Input box change
  //event = event object, describe the context of the event
  // onInputChange(event) {
  //     console.log(event.target.value);
  // }

  onInputChange(term) {
    this.setState({term});
    //onSearchTermChange is being passed to search bar from the APP
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;