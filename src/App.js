import React, { Component } from 'react';

import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

import './App.css';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => this.setState({ monsters: response.data }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Robot Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
