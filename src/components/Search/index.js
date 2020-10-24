import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "debounce";
import * as actions from "../../actions";
import "./Search.css";

function Search() {
  const searchReducer = useSelector((state) => state);

  const dispatch = useDispatch();

  const { searchTerm, tag, searchResults } = searchReducer;

  console.log(searchResults);

  return (
    <div className="wrapper container">
      <h1 className="title">
        <b>Hacker News Finder</b>
      </h1>
      <div className="userSearch">
        <input
          type="text"
          placeholder="Search Hacker News."
          className="SearchBox"
          onChange={async (event) => {
            const userInput = event.target.value;
            dispatch(actions.setSearchTerm(userInput));
            const results = await actions.callHackerNews(userInput, tag);
            dispatch(actions.setSearchResults(results));
          }}
          value={searchTerm}
        />
        <select
          className="selectBox"
          onChange={(event) => {
            const categoryType = event.target.value;
            dispatch(actions.setCategoryType(categoryType));
          }}
        >
          <option value="story" default>
            Story
          </option>
          <option value="comment">Comment</option>
          <option value="poll"> Poll</option>
          <option value="pollopt">Pollopt</option>
          <option value="show_hn">Show Hn</option>
          <option value="ask_hn">Ask Hn</option>
          <option value="front_page">Front Page</option>
          <option value="author_:USERNAME"> Author's Name</option>
        </select>
      </div>
      <div className="row">
        {searchResults.map((news, i) => {
          const { title, url } = news;

          return (
            <div className="newsList" key={i}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    <a target="_blank" href={url}>
                      <p>{title}</p>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
