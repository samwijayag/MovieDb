import React, { Component } from 'react';
import MovieList from './Movielist'
import Search from './Search'


class App extends Component{
  render(){
    return (
      <div>
        <h1>Movie Database</h1>
        <MovieList />
        <Search />
      </div>
    )
  }
}

export default App;
