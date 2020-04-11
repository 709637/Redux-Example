import { Fetch_Users_Failure, Fetch_Users_Request, Fetch_Users_Success} from './userTypes';
import axios from 'axios';

export const fetchUsersRequest = () => {
    return {
       type: Fetch_Users_Request
    }
}

export const fetchUsersSuccess = (users) => {
    return {
       type: Fetch_Users_Success,
       payload : users
    }
}

export const fetchUsersFailure = (error) => {
    return {
       type: Fetch_Users_Failure,
       payload : error
       
    }
}

export const fetchUsers = () => {
   return (dispatch) => {
    dispatch(fetchUsersRequest);
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res =>{
           const users = res.data;
           dispatch(fetchUsersSuccess(users));
        })
        .catch( error =>{
            const errorMessage = error.message;
            dispatch(fetchUsersFailure(errorMessage));
        })
   }
}