import React, { Component } from 'react';

export default class Home extends Component{
state = {
  
   frutas: [
      'limão',
      'abacaxi',
      'maçã',
      'banana'
    ],

    listaFiltrada: []
}


  filterFruits = (event) => {
    const Filtro = this.state.filter(item =>{
      if(item.toLowerCase().includes(event.target.value.toLowerCase())){
        return true
      }else{
        return ''
      }
    })

    this.setState({listaFiltrada: Filtro})

    if(event.target.value === ''){
      this.setState({listaFiltrada: []})
    }
  }

  render(){
    return(
      <>
        <input onChange={this.filterFruits}/>
        <ul>{this.state.frutas.map(item =>(
          <li>{item}</li>
        ))}</ul>
      </>
    )
  }
}
