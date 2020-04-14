import React, { Component } from 'react';

class FormularioNaoControladoDefaultValue extends Component{

  constructor(props){
    super(props)
    
    this.inputName = React.createRef();
    this.inputCelular = React.createRef();
    this.inputCidade = React.createRef();
    this.inputCurso = React.createRef();
    
    this.handleSubmit = this.handleSubmit.bind(this);  
    
    
}

  handleSubmit(event){
      //vai acessando os escopos dos elementos para pegar o valor atribuido
    console.log(this.inputName.current.value);
    console.log(" ");
    console.log(this.inputCelular.current.value);
    console.log(" ");
    console.log(this.inputCidade.current.value);
    console.log(" ");
    console.log(this.inputCurso.current.value);
    console.log(" ");
    
    
    event.preventDefault();
    
 
  }

  render(){
      
  return (
    <> 
    <form onSubmit={this.handleSubmit}>
        <h2>CADASTRO CLIENTE Componente não controlado com Default Value</h2>
        <label>
            Nome:
            <input type="text" name="name" ref={this.inputName} ></input> 
        </label>
        <br/>
        <br/>
        <label>
            Celular:
            <input defaultValue={'99'} type="number" name="celular" ref={this.inputCelular} ></input> 
        </label>
        <br/>
        <br/>
        <label>
            Cidade:
            <input type="text" name="cidade" ref={this.inputCidade} ></input> 
        </label>
        <br/>
        <br/>
        <label>
            Curso:
            <input defaultValue={'Graduação em'} type="text" name="curso" ref={this.inputCurso} ></input> 
        </label>
        <br/>
        <br/>
        <input type="submit" value="SalvarDados"></input>
    </form>
    </>
  );
 }
}

export default FormularioNaoControladoDefaultValue;