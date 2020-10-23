export const setSearchTerm = (data) => {
  return {
    type: "SET_SEARCH_TERM",
    data,
  };
};
export const setSearchResults = (data) => {
  return {
    type: "SET_SEARCH_RESULTS",
    data,
  };
};
