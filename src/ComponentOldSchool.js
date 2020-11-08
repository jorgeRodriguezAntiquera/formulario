import React from "react";//es6

export  class ComponentOldSchool extends React.Component{

    constructor(props){
       super(props);
       this.state = {seconds : 0};
    
    }
    
    cambiarSegundo(){
        this.setState({seconds : this.state.seconds +1});
    }

    mostrarMensaje(){

        return "nuevo mensaje";
    }

    componentDidMount(){
        this.interval = setInterval(() => this.cambiarSegundo(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return ( <div><p>El componente nro 213214322141 mas cool del mundo</p>
        <p><img alt ="marcelo" src="https://www.filo.news/__export/1597948253943/sites/claro/img/2020/07/19/marcelo_bielsa_leeds_portada_1.jpg_423682103.jpg" /></p>
        <h1>{this.mostrarMensaje()}</h1>
        <h2>Segundo : {this.state.seconds}</h2>
        
        </div>)
    }
}

export const Holamundo = ()=><p>Hola mundo</p>;
