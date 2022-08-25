import { Component } from "react";
import {Link} from 'react-router-dom';
export default class ErrorPage extends Component{
   render(){
    return(
        <>
        <h1>Error</h1>
        <Link to="/movies">Voltar pra filmes</Link>
        </>
    )
   }
}
