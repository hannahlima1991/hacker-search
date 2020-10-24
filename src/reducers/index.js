const initialState = {
  searchTerm: "",
  searchResults: [],
  tag: "story",
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.data };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.data };
    case "SET_CATEGORY_TYPE":
      return { ...state, tag: action.data };
    default:
      return state;
  }
}
export default searchReducer;
