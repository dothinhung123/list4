import {combineReducers} from 'redux';
const posts =(state=[],action)=>{
    switch(action.type){
        case 'FETCH_POSTS':return action.payload
        default :return state
    }
}

export default combineReducers({
posts :posts
})