import searchReducer from "../reducers";

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
export const setCategoryType = (data) => {
  return {
    type: "SET_CATEGORY_TYPE",
    data,
  };
};

export const callHackerNews = (searchTerm, tag) => {
  return fetch(
    `http://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`
  ).then((response) => response.json().then((data) => data.hits));
};
