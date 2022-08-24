import React, { Component } from 'react';
import axios from 'axios';

const MyAPI_Shows = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/550?api_key=2ca68b2ad8acad4e5b9444b713f55c11'
})

export default class Shows extends Component{

  state = {
    shows: []
  }

  render(){
    return(
      <h1>Séries</h1>
    )
  }
}
