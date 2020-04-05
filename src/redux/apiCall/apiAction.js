import {Tribe_Change} from './apiType';

export const tribeChange = (payload) => {
    return {
       type: Tribe_Change,
       payload
    }
}