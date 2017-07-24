import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar></SearchBar>
        <SearchButton></SearchButton>
      </div>
    );
  }
}

export default App;
