import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompTwo from './CustomComponents/CompTwo/CompTwo.js';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './CustomComponents/cakeContainer';
import TotalItemContainer from './CustomComponents/totalItemCount';
import TotalItemLeft from './CustomComponents/TotalItemLeft';
import NumberOfTeamsGet from './CustomComponents/NumberOfTeamsGet';
import UseSelectorComp from './Hooks/UseSelectorComp';
import CakeContainerForPayload from './CustomComponents/CakeContainerForPayload/CakeContainerForPayload';
import UsersContainer from './CustomComponents/UsersContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">

        
        
      {<UsersContainer></UsersContainer>}
     
      { <CakeContainer></CakeContainer> }
      { <TotalItemContainer></TotalItemContainer> }
      {<UseSelectorComp></UseSelectorComp>}

      {<CakeContainerForPayload></CakeContainerForPayload>}

      <TotalItemLeft></TotalItemLeft>
      <NumberOfTeamsGet></NumberOfTeamsGet>
    </div>
    </Provider>
  );
}

export default App;
