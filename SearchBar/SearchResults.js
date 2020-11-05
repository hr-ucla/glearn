import React from 'react';
import SearchResultsKeywords from './SearchResultsKeywords.js';

const SearchResults = (props) => {

    return (
      <div className="nav-search-results-dropdown">
        {props.keywords.map((keyword, index) => {
        return <SearchResultsKeywords key={index} keyword={keyword}/>;
        })}
      </div>
    );
  };
  
  export default SearchResults;