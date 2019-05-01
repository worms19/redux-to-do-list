import {ADD_ARTICLE, REMOVE_ARTICLE, REMOVE_SPECIFIC_ARTICLE} from "../constants/action-types";


const initialState = {
    articles: []
};
function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_ARTICLE :
            console.log(action.payload.id)
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
        case REMOVE_SPECIFIC_ARTICLE :
            console.log("id to delete " + action.payload.idToDelete);
            console.log("liste of ids " + state.articles.id);


           return Object.assign({}, state, {
                articles: state.articles.filter(articles => articles.id !== action.payload.idToDelete)

            });

        default : return state;
    }



}
export default rootReducer;
/*
There are two key points for avoiding mutations in Redux:

Using concat(), slice(), and …spread for arrays
    Using Object.assign() and …spread for objects*/