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
        <h2>CADASTRO CLIENTE Componente controlado </h2>
        <label>
            Nome:
            <input type="text" name="name" value={state.nome} onChange={this.atualizarDados}></input> 
        </label>
        <br/>
        <br/>
        <label>
            Celular:
            <input type="number" name="celular" value={state.celular} onChange={this.atualizarDados} ></input> {state.celular}
        </label>
        <br/>
        <br/>
        <label>
            Cidade:
            <input type="text" name="cidade" value={state.cidade} onChange={this.atualizarDados} ></input> 
        </label>
        <br/>
        <br/>
        <label>
            Informação adicional:
            <textarea type="type" name="adicionalinfo" value={state.adicionalinfo} onChange={this.atualizarDados}></textarea>
        </label>
        <br/>
        <br/>
        <label>
            Genero:
            <select name="genero" value={state.genero} onChange={this.atualizarDados}>
                {
                 
                 this.generos.map(genero => <option value={genero.value}>{genero.name}</option> )

                }
            </select>
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