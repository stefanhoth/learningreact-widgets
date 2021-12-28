import "./Search.css";

import { useEffect, useState } from "react";
import wikipedia from "../api/wikipedia";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (term === "") return; //don't do empty search

    const search = async () => {
      const { data } = await wikipedia(term);
      setResults(data.query.search);
    }; //could also be written as: (async () { //method })() without method name assignment

    //delay search to throttle number of API requests while typing
    const timeoutId = setTimeout(() => {
      console.log("Doing a search for", term);
      search();
    }, 500);

    return () => {
      console.log("Canceling timeout", timeoutId);
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });

  return (
    <div className="search">
      <div className="ui form">
        <form onSubmit={onFormSubmit}>
          <div className="field">
            <label htmlFor="term">Enter search term</label>
            <input
              name="term"
              className="input"
              type="text"
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
