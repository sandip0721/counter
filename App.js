import React from 'react';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      counter :0
    };
  }
increment = ()=>{
  this.setState({counter:this.state.counter +1});
};
decrement = ()=>{
  this.setState({counter:this.state.counter -1});
};
reset = ()=>{
  this.setState({counter:0});
};
  render(){
    return(
      <div>
        <h3>Hello Sandip Your Counter is Ready for Execution</h3>
        <p>Counter :{this.state.counter} </p>
        <button onClick = {this.increment} >Increment</button>
        <button onClick = {this.decrement}>Decrement</button>
        <button onClick = {this.reset}>Reset</button>
      </div>
    )
  }
}