import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchResultsKeywords = (props) => {
  const document =
    <Icon
      name="document"
      color="grey"
      size={20}
    />;
  return (
    <li className="nav-search-result-keywords-container">
      <div className="nav-search-result-document-icon">
        {document}
      </div>
      <div className="nav-search-keyword">
        {props.keyword}
      </div>
    </li>
  );
};

export default SearchResultsKeywords;