import React, { Component } from 'react';
import {Deck} from './components/deck/deck';
import {SearchBox} from './components/searchbox/searchbox';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  constructor(){
    super();

    this.state = {
      robots : [],
      searchTerm: ''
    };
  }

  componentDidMount(){
    fetch('//jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(robots => this.setState({ robots }));
  }

  handleChange = (e) =>{
    this.setState({searchTerm:e.target.value})
  }

  render(){
    const {robots, searchTerm} = this.state;
    const filtered = robots.filter(m =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
      <div className="App">
        <h1>Robot Deck</h1>
        <SearchBox 
        placeholder="filter the robots" 
        handleChange={this.handleChange}
         />
        <Deck robots={filtered} />
      </div>
    );
  }
}

export default App;
