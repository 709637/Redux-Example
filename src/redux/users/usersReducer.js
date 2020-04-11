import { Fetch_Users_Success,Fetch_Users_Request, Fetch_Users_Failure} from './userTypes';
import { fetchUsersRequest } from './usersAction';

const initialState ={
    loading : false,
    users : [],
    error: ''
}

const usersReducer = (state = initialState, action) => {
    console.log("data inside Reducer",state,action);
    switch(action.type){
      case Fetch_Users_Request: 
          return{
              ...state,
              loading : true
          }
      case Fetch_Users_Success:
          return{
              ...state,
              loading : false,
              users : action.payload,
              error : ''
              
          }
      case Fetch_Users_Failure:
          return{
              ...state,
              loading : false,
              users : [],
              error : action.payload
          } 
      default: 
        return state;
    }

}

export default usersReducer;