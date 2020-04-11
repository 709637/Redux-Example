import {Buy_Cake} from './cakeType';

export const buyCake = ( number =1 ) => {
    console.log("cake action called", number)
    return {
       type: Buy_Cake,
       payload : number
    }
}