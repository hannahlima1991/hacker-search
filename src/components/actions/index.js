import searchReducer from "../../reducers";

//All of my redux and API actions
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

export const callHackerNews = (searchTerm, category) => {
  // grab the user input and selected category and use that to drive the API call
  //returns data.hits because that is where the array of data was stored.
  return fetch(
    `http://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=${category}`
  ).then((response) => response.json().then((data) => data.hits));
};
