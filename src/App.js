import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './componentes/formulario';
import FormularioNaoControlado from './componentes/formulariocomponentnao';
import FormularioNaoControladoDefaultValue from  './componentes/formulariocomponentnaocontroladodefaultvalue';

class App extends Component{

  render(){
  return (
    <div className="App">
      <h1>Verificar a saida de dados obtidos no Console.log</h1>
     <Formulario/>
     <FormularioNaoControlado/>
     <FormularioNaoControladoDefaultValue/>
    </div>
  );
 }
}
export default App;
