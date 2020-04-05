import React from 'react';
import { createStore } from 'redux';
import App from '../../App.js';

class CompTwo extends React.Component{

  constructor(props){
    super(props);    
    this.state= {
      count:0
    }
    }


  render() {
    let store = createStore(this.counter);
    this.operateOnSomeAction();
    store.subscribe(() => {
      console.log(store.getState()); 
      this.setState({
        count:store.getState()})
      
  })
    return (
      <div className="App">
        <div>From Comp two {this.state.count}</div>
      </div>
    );
  }


  counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }


  operateOnSomeAction() {
    let store = createStore(this.counter);
    store.dispatch({ type: 'INCREMENT' })
    // 1
    store.dispatch({ type: 'INCREMENT' })
    // 2
    store.dispatch({ type: 'DECREMENT' })
    // 1
  }
}



export default CompTwo;
