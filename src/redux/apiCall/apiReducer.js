import {Tribe_Change} from './apiType';

const initialState ={
    numOfTeams : 0,
    teams:[]
}

const apiReducer = (state = initialState, action) => {
    console.log("data inside Reducer",state,action);
    switch(action.type){
      case Tribe_Change: 
          return{
              ...state,
              numOfTeams : action.payload.length,
              teams : action.payload
          }
        break;  
      default: 
      console.log("default  block..........");
        return {
          ...state        
      }
    }

}

export default apiReducer;