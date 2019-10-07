import { SearchBarActions } from "./action";
const initialState = {
    value: "",
    loadMore: false,
    buttonHidden:false
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
                searchedTweet: [...action.twitterResult],
            }
        case SearchBarActions.UpdateTweetData:
            return {
                ...state,
                loadMore: action.loadMore,
                buttonHidden: action.buttonHidden,
            }
        default:
            return {
                ...state
            }
    }
}
export default reducer;