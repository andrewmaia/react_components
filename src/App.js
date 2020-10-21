import React from 'react';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
        meuEstado:'Estado Inicial'
    }
    
  }
  novoEstado(){
    this.setState({meuEstado: 'Novo Estado'});
  }

  voltaEstado(){
    this.setState({meuEstado: 'Estado Inicial'});
  }

  render(){
    return(
        <div>
            Este é o meu componente que mantém o estado
            <br/>
            {this.state.meuEstado}
            <br/>            
            <button onClick={()=>this.novoEstado()}>Novo Estado</button>
            <br/>            
            <button onClick={()=>this.voltaEstado()}>Volta Estado</button>            
        </div> 
        
    );
  }
}


