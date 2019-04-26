import {ADD_ARTICLE, REMOVE_ARTICLE} from "../constants/action-types";


const initialState = {
    articles: []
};
function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_ARTICLE :
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        case REMOVE_ARTICLE :
            if(state.articles.length > 0){

                return Object.assign({}, state, {
                    articles : state.articles.slice(0, state.articles.length-1)
                });
            }
            return state;
        default : return state;
    }



}
export default rootReducer;
/*
There are two key points for avoiding mutations in Redux:

Using concat(), slice(), and …spread for arrays
    Using Object.assign() and …spread for objects*/