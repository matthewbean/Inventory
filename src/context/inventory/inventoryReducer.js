import { ADD_ITEM } from '../types';

export default (state, action)=>{
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state;
    }
}