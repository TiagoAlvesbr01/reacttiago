import React, { Component } from "react";
import api from './api'
import api2 from './api2'

class App extends Component {

  state = {
    artigos: [],
  }

  async componentDidMount() {
    let response = await api2.get('/artigo')

    console.log(response.data)

    this.setState({artigos: response.data})
  }

  render() {

    let {artigos} = this.state

    console.log(artigos)
      return(
        <div>
          <h1>Listar artigos</h1>
          <ul style= {{listenStyleType: "none", margin: 0, padding: 0}}>
            {artigos.map(artigo =>(
              <li key={artigo._id}>
                <h2>titulo:{artigo.titulo}</h2>
                <p>
                  Conteudo: {artigo.conteudo}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )
  }
}

/*class App extends Component{
//estado para salvar informaçoes
state= {
  filmes: [],
}
// Buscar na api
async componentDidMount(){
  const response = await api.get('')



  this.setState({ filmes: response.data})
}


  render() {

    let { filmes } = this.state;

    //retorna os valores
    return(
      <div>
        <h1>Listar os filmes</h1>
        {console.log(filmes)}
        {filmes.map(filme =>(
          <li key={filme.show.id}>
            <h2>
              <strong>Título: </strong>
              {filme.show.name}
            </h2>
            <p>
              {filme.show.url}
            </p>
          </li>
          ))}
      </div>
    )
  }
}*/

export default App;
