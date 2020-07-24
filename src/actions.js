import {CHANGE_SEARCH_FIELD} from './constants';

const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export {setSearchField};