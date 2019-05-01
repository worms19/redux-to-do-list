// src/js/actions/index.js
import { ADD_ARTICLE,REMOVE_ARTICLE,REMOVE_SPECIFIC_ARTICLE } from "../constants/action-types";


export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}

export function removeArticle(payload) {
    return { type: REMOVE_ARTICLE, payload };
}

export function removeSpecificArticle(payload) {
    return { type: REMOVE_SPECIFIC_ARTICLE, payload };
}
