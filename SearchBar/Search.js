import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Search() {
  const [keywords, setKeywords] = useState([]);
  const search =
  <Icon
    name="search"
    color="black"
    size={20}
  />;

 // Debounce function for search
 let debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  };

  // Axios request to database with a delay to account for search time
  let onChange = (term) => {
    if (term.length !== 0) {
      axios.get(`/api/search/keywords/${term}`)
        .then(results => setKeywords(results.data))
        .catch((err) => console.error(err));
        }
    if (term.length < 1) {
      setKeywords([]);
    }
  };

  const debounceOnChange = React.useCallback(debounce(onChange, 500), []);
  
  return (
    <View>
      <Text>{search}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Search in g-learn "
        onChangeText={text => onChangeText(debounce(text))}
      />
      {keywords.length ? <SearchResults keywords={keywords} /> : ''}
    </View>

  );

}
export default Search;