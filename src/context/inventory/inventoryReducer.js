import { ADD_ITEM, REMOVE_ITEM } from '../types';

export default (state, action)=>{
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                items: [...state.items, action.payload].sort((a, b) => a.location.toUpperCase() > b.location.toUpperCase() ? 1:-1)
            }
        case REMOVE_ITEM:
            return{
                ...state,
                items: state.items.filter((item)=> item.id != action.payload)
            }
        default:
            return state;
    }
}