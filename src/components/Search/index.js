import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Search.css";
import cat from "../assets/cat.svg";

function Search() {
  //searchReducer represents all of the state
  const searchReducer = useSelector((state) => state);

  const dispatch = useDispatch();

  //These state variables have initial states and will be changed via user input
  const { searchTerm, category, searchResults } = searchReducer;

  //being used to initialize card animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="wrapper container">
      <div className="headers">
        <a target="_blank" href="http://www.frontendfeline.com/">
          <img src={cat} />
        </a>
        <h5 className="title">FrontEnd Feline News</h5>
      </div>
      <div className="userSearch">
        <input
          type="text"
          placeholder="Search Hacker News."
          className="SearchBox"
          onChange={async (event) => {
            //getting the user input
            const userInput = event.target.value;
            //this action uses the value of userInput and changes redux state of searchTerm
            dispatch(actions.setSearchTerm(userInput));
            //waits for the api call, using the user input and the selected category to create the call
            const results = await actions.callHackerNews(userInput, category);
            //changes redux state for searchResults based on the data from the api call above
            dispatch(actions.setSearchResults(results));
          }}
          value={searchTerm}
        />
        <select
          className="selectBox"
          onChange={(event) => {
            //grabs the category value
            const categoryType = event.target.value;
            //changes the category type in redux
            dispatch(actions.setCategoryType(categoryType));
          }}
        >
          <option value="story" default>
            Story
          </option>
          <option value="show_hn">Show Hn</option>
          <option value="front_page">Front Page</option>
        </select>
      </div>
      <div className="row">
        {searchResults.map((news, i) => {
          const { title, url } = news;

          return (
            <div className="newsList" key={i} data-aos="fade-up">
              <a target="_blank" href={url}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      <p>{title}</p>
                    </h4>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
