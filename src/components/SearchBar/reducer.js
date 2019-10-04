import { SearchBarActions } from "./action";
const initialState = {
    value: ""
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case SearchBarActions.LoadInitialData:
            return {
                ...state,
                twitterData: action.twitterData,
            }
        case SearchBarActions.UpdateValue:
            return {
                ...state,
                value: action.value
            }
        case SearchBarActions.StoreSearchObject:
            return {
                ...state,
                searchedTweet:[...action.twitterResult],
            }
        default:
            return {
                ...state
            }
    }
}
export default reducer;