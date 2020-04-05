import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompTwo from './CustomComponents/CompTwo/CompTwo.js';
import {Provider} from 'react-redux';
import store from './redux/store';
import {storeApi} from './redux/store';
import CakeContainer from './CustomComponents/cakeContainer';
import TotalItemContainer from './CustomComponents/totalItemCount';
import TotalItemLeft from './CustomComponents/TotalItemLeft';
import NumberOfTeamsGet from './CustomComponents/NumberOfTeamsGet';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <form>
          <label>Name :  </label><input type="text"></input><br/>
          <label>Age :  </label><input type="text"></input>   
         </form>
      </header>
      {/* <CakeContainer></CakeContainer> */}
      {/* <TotalItemContainer></TotalItemContainer> */}
      <TotalItemLeft></TotalItemLeft>
      <NumberOfTeamsGet></NumberOfTeamsGet>
    </div>
    </Provider>
  );
}

export default App;
