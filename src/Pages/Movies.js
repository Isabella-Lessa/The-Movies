import { Component } from "react";
import axios from "axios";

const MyMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=2ca68b2ad8acad4e5b9444b713f55c11&language=en-US&page=1'
})

export default class Movies extends Component{

  state = {
    movies: []
  }

  getMovies = async () => {
    const response = await MyMovies.get()
    
    const AllMovies = response.data.results.map(item =>{
      return{
        ...item
      }
      console.log(response)
    })
    this.setState({movies: AllMovies})
  }

  componentDidMount(){
    this.getMovies()
  }

  render(){

    return(
      <div>
        <h1>Movies</h1>
        <ul>{this.state.movies.map(item =>(
          <>
          <h2>{item.title}</h2>
          <p>{item.overview}</p>
          </>
        ))}</ul>
      </div>
    )
  }
}
