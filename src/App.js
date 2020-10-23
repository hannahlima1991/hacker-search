import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";
import "./App.css";

function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input
        onChange={(event) =>
          dispatch(actions.setSearchTerm(event.target.value))
        }
      />
    </div>
  );
}

export default App;
