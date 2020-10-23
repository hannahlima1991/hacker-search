const initialState = {
  searchTerm: "",
  searchResults: [],
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.data };
    case "SET_SEARCH_RESULTS":
      return { ...state, error: (state.error = true) };
    default:
      return state;
  }
}
export default searchReducer;
