import React, { Component } from 'react';

class Formulario extends Component{

  constructor(props){
    super(props);
    this.state = {
       name:'',
       cidade:'',
       celular:'',
       adicionalinfo:'',
       genero:'masculino',
    }

    this.generos = [
      {'name':'masculino','value':'Masculino' },{'name':'feminino','value':'Feminino'}
    ];


    this.atualizarDados = this.atualizarDados.bind(this);
   }
  /*pega o evento do input e passa para o value */
  atualizarDados(event){

    const target = event.target,
     value = target.type === 'checkbox' ? target.checked : target.value,
     name = target.name;

    this.setState({
      [name]: value,
     
    })

  }

  render(){
      const { state } = this;
  return (
    <>
    
    <form>
        <h2>CADASTRO CLIENTE</h2>
        <label>
            Nome:
            <input type="text" name="name" value={state.nome} onChange={this.atualizarDados}></input> 
        </label>
        <br/>
        <br/>
        <input type="submit" value="SalvarDados"></input>
    </form>
    
    </>
  );
 }
}

export default Formulario;