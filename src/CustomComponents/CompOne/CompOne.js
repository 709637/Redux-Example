import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import App from '../../App.js';

class CompOne extends React.Component{

  constructor(props){
  super(props); 
  const store = createStore(App) 
  }

  render(){
    return (
      <div className="App">
          <div>From Comp 1</div>
      </div>
    );
  }

  componentDidMount(){
    this.checkStatus();
  }

checkStatus(){
  //store.subscribe(() => console.log(store.getState()));
}
  
}

export default CompOne;
