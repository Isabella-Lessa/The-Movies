import React, { Component } from 'react';
import Home from './Pages/Home.js';
import Movies from './Pages/Movies';
import Shows from './Pages/Shows.js';
import ErrorPage from './Pages/ErrorPage.js'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default class App extends Component{

  render(){
    return(
      <Router>

        <div>
          <Link to='/'><h3>HOME</h3></Link>
          <Link to='/movies'><h3>MOVIES</h3></Link>
          <Link to='/shows'><h3>SERIES</h3></Link>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/shows' element={<Shows/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>


      </Router>
    )
  }
}
