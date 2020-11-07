import React from 'react'
import { SafeAreaView, Dimensions, StyleSheet, View, TextInput, Text, Image,TouchableHighlight, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Animated, { Easing } from 'react-native-reanimated'
import axios from 'axios';
const { Value, timing } = Animated

// Calculate window size
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const backButton = 
<Icon
  name="arrow-left"
  color="black"
  size={35}
/>;
const searchButton = <Icon name="search" size={16} color="#cccccc" />;
class Search extends React.Component {
  
  constructor(props){
    super(props)

    // state
    this.state = {
      isFocused: false,
      searchData: ["hello"],
      searching: false,
      keyword:'',
    }

    // animation values
    this._input_box_translate_x = new Value(width)
    this._back_button_opacity = new Value(0)
    this._content_translate_y = new Value(height)
    this._content_opacity = new Value(0)
    this.getSearches= this.getSearches.bind(this);
  }
  getSearches(term) {
    if (term.length !== 0 && this.state.searching === true) {
      axios.get(`http://localhost:3000/api/search/keywords/${term}`)
        .then((results) => {
          this.setState({
            searchData: results.data,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (term.length < 1 && this.state.searching === true) {
        this.setState({
          searchData: [],
        })
    }
  }

  _onFocus = () => {
    // update state
    this.setState({isFocused: true})
    // animation config
    // input box
    const input_box_translate_x_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }
    const back_button_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    }

    // content
    const content_translate_y_config = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }
    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    }

    // run animation
    timing(this._input_box_translate_x, input_box_translate_x_config).start()
    timing(this._back_button_opacity, back_button_opacity_config).start()
    timing(this._content_translate_y, content_translate_y_config).start()
    timing(this._content_opacity, content_opacity_config).start()

    // force focus
    this.refs.input.focus()

  }

  _onBlur = () => {
    // update state
    this.setState({isFocused: false})
    // animation config
    // input box
    const input_box_translate_x_config = {
      duration: 200,
      toValue: width,
      easing: Easing.inOut(Easing.ease)
    }
    const back_button_opacity_config = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }

    // content
    const content_translate_y_config = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease)
    }
    const content_opacity_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }

    // run animation
    timing(this._input_box_translate_x, input_box_translate_x_config).start()
    timing(this._back_button_opacity, back_button_opacity_config).start()
    timing(this._content_translate_y, content_translate_y_config).start()
    timing(this._content_opacity, content_opacity_config).start()

    // force blur
    this.refs.input.blur();

  }
  
  render(){

    if (this.props.page === 'Student Wiki' || this.props.page === 'Junior Section' || this.props.page === 'Senior Section' || this.props.page === 'Quizzes') {
      return (
        <>
          <SafeAreaView style={styles.header_safe_area}>
            <View style={styles.header}>
              <View style={styles.header_inner}>
                <TouchableOpacity
                  onPress={() => {
                  this.props.setPage("home")
                  }}>
                  <Text>{backButton} </Text>
              </TouchableOpacity>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.setPage("home"),
                      console.log(this.props.page)}}>
                    <Image 
                      source={require('../logo.png')}
                      style={{width: 152, height: 30, marginLeft:"20%"}}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor={"#ccd0d5"}
                  onPress={this._onFocus}
                  style={styles.search_icon_box}
                >
                  <Icon name="search" size={22} color="#000000" />
                </TouchableHighlight>
                <Animated.View
                  style={[ styles.input_box, {transform: [{translateX: this._input_box_translate_x}] } ]}
                >
                  <Animated.View style={{opacity: this._back_button_opacity}}>
                    <TouchableHighlight
                      activeOpacity={1}
                      underlayColor={"#ccd0d5"}
                      onPress={this._onBlur}
                      style={styles.back_icon_box}
                    >
                      <Icon name="chevron-left" size={22} color="#000000" />
                    </TouchableHighlight>
                  </Animated.View>
                  <TextInput 
                    ref="input"
                    placeholder="Search g-Learn"
                    clearButtonMode="always"
                    value={this.state.keyword}
                    onChangeText={(value) => {this.setState({keyword: value}, 
                      () => {
                      this.setState({searching: !this.state.searching});
                      this.getSearches(value);
                    })}}
                    style={styles.input}
                  />
                </Animated.View>
              </View>
            </View>
          </SafeAreaView>
  
          <Animated.View style={[styles.content, { opacity: this._content_opacity, transform: [{translateY: this._content_translate_y }] }]}>
            <SafeAreaView style={styles.content_safe_area}>
              <View style={styles.content_inner}>
                <View style={styles.separator} />
                {
                  this.state.keyword === ''
                  ?
                  <View style={styles.image_placeholder_container}>
                    <Image 
                      source={require('../search.jpg')} 
                      style={styles.image_placeholder}
                    />
                    <Text style={styles.image_placeholder_text}>
                      Enter a key word{"\n"}
                      to search on g-Learn
                    </Text>
                  </View>
                  :
                  <View style={styles.search_item}>
                  {/* <Text>{this.state.keyword}</Text> */}
                  <Text style={styles.item_icon}>{searchButton} </Text>
                  <FlatList
                    contentContainerStyle={styles.search_item}
                    data ={this.state.searchData}
                    renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        this.props.setPage(item.moduleName)
                        this.setState({searching: !this.state.searching})
                        }}>
                      <View>
                        <Text>{item.moduleName}</Text>
                      </View>
                    </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>
                }
              </View>
            </SafeAreaView>
          </Animated.View>
        </>
      )
    }
    if (this.props.page === 'Orientation and Precourse' || this.props.page === 'Data Modeling and Classes' || this.props.page === 'Inheritance Patterns') {
      return (
        <>
          <SafeAreaView style={styles.header_safe_area}>
            <View style={styles.header}>
              <View style={styles.header_inner}>
                <TouchableOpacity
                  onPress={() => {
                  this.props.setPage("Junior Section")
                  }}>
                  <Text>{backButton} </Text>
              </TouchableOpacity>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.setPage("home"),
                      console.log(this.props.page)}}>
                    <Image 
                      source={require('../logo.png')}
                      style={{width: 152, height: 30, marginLeft:"20%"}}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor={"#ccd0d5"}
                  onPress={this._onFocus}
                  style={styles.search_icon_box}
                >
                  <Icon name="search" size={22} color="#000000" />
                </TouchableHighlight>
                <Animated.View
                  style={[ styles.input_box, {transform: [{translateX: this._input_box_translate_x}] } ]}
                >
                  <Animated.View style={{opacity: this._back_button_opacity}}>
                    <TouchableHighlight
                      activeOpacity={1}
                      underlayColor={"#ccd0d5"}
                      onPress={this._onBlur}
                      style={styles.back_icon_box}
                    >
                      <Icon name="chevron-left" size={22} color="#000000" />
                    </TouchableHighlight>
                  </Animated.View>
                  <TextInput 
                    ref="input"
                    placeholder="Search g-Learn"
                    clearButtonMode="always"
                    value={this.state.keyword}
                    onChangeText={(value) => {this.setState({keyword: value}, 
                      () => {
                      this.setState({searching: !this.state.searching});
                      this.getSearches(value);
                    })}}
                    style={styles.input}
                  />
                </Animated.View>
              </View>
            </View>
          </SafeAreaView>
  
          <Animated.View style={[styles.content, { opacity: this._content_opacity, transform: [{translateY: this._content_translate_y }] }]}>
            <SafeAreaView style={styles.content_safe_area}>
              <View style={styles.content_inner}>
                <View style={styles.separator} />
                {
                  this.state.keyword === ''
                  ?
                  <View style={styles.image_placeholder_container}>
                    <Image 
                      source={require('../search.jpg')} 
                      style={styles.image_placeholder}
                    />
                    <Text style={styles.image_placeholder_text}>
                      Enter a key word{"\n"}
                      to search on g-Learn
                    </Text>
                  </View>
                  :
                  <View style={styles.search_item}>
                    {/* <Text>{this.state.keyword}</Text> */}
                    <Text style={styles.item_icon}>{searchButton} </Text>
                    <FlatList
                      contentContainerStyle={styles.search_item}
                      data ={this.state.searchData}
                      renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          this.props.setPage(item.moduleName)
                          this.setState({searching: !this.state.searching})
                          }}>
                        <View>
                          <Text>{item.moduleName}</Text>
                        </View>
                      </TouchableOpacity>
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                }
              </View>
            </SafeAreaView>
          </Animated.View>
        </>
      )
    }
    if (this.props.page === 'Exercise: Recursion Review' || this.props.page === 'Exercise: Underbar Review' || this.props.page === 'Welcome to Hack Reactor') {
      return (
        <>
          <SafeAreaView style={styles.header_safe_area}>
            <View style={styles.header}>
              <View style={styles.header_inner}>
                <TouchableOpacity
                  onPress={() => {
                  this.props.setPage("Orientation and Precourse")
                  }}>
                  <Text>{backButton} </Text>
              </TouchableOpacity>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.setPage("home")}}>
                    <Image 
                      source={require('../logo.png')}
                      style={{width: 152, height: 30, marginLeft:"20%"}}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor={"#ccd0d5"}
                  onPress={this._onFocus}
                  style={styles.search_icon_box}
                >
                  <Icon name="search" size={22} color="#000000" />
                </TouchableHighlight>
                <Animated.View
                  style={[ styles.input_box, {transform: [{translateX: this._input_box_translate_x}] } ]}
                >
                  <Animated.View style={{opacity: this._back_button_opacity}}>
                    <TouchableHighlight
                      activeOpacity={1}
                      underlayColor={"#ccd0d5"}
                      onPress={this._onBlur}
                      style={styles.back_icon_box}
                    >
                      <Icon name="chevron-left" size={22} color="#000000" />
                    </TouchableHighlight>
                  </Animated.View>
                  <TextInput 
                    ref="input"
                    placeholder="Search g-Learn"
                    clearButtonMode="always"
                    value={this.state.keyword}
                    onChangeText={(value) => {this.setState({keyword: value}, 
                      () => {
                      this.setState({searching: !this.state.searching});
                      this.getSearches(value);
                    })}}
                    style={styles.input}
                  />
                </Animated.View>
              </View>
            </View>
          </SafeAreaView>
  
          <Animated.View style={[styles.content, { opacity: this._content_opacity, transform: [{translateY: this._content_translate_y }] }]}>
            <SafeAreaView style={styles.content_safe_area}>
              <View style={styles.content_inner}>
                <View style={styles.separator} />
                {
                  this.state.keyword === ''
                  ?
                  <View style={styles.image_placeholder_container}>
                    <Image 
                      source={require('../search.jpg')} 
                      style={styles.image_placeholder}
                    />
                    <Text style={styles.image_placeholder_text}>
                      Enter a key word{"\n"}
                      to search on g-Learn
                    </Text>
                  </View>
                  :
                  <View style={styles.search_item}>
                    {/* <Text>{this.state.keyword}</Text> */}
                    <Text style={styles.item_icon}>{searchButton} </Text>
                    <FlatList
                      contentContainerStyle={styles.search_item}
                      data ={this.state.searchData}
                      renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          this.props.setPage(item.moduleName)
                          this.setState({searching: !this.state.searching})
                          }}>
                        <View>
                          <Text>{item.moduleName}</Text>
                        </View>
                      </TouchableOpacity>
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                }
              </View>
            </SafeAreaView>
          </Animated.View>
        </>
      )
    }
    return (
      <>
        <SafeAreaView style={styles.header_safe_area}>
          <View style={styles.header}>
            <View style={styles.header_inner}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.setPage("home")}}>
                  <Image 
                    source={require('../logo.png')}
                    style={{width: 152, height: 30, marginLeft:"35%"}}
                  />
                </TouchableOpacity>
              </View>
              <TouchableHighlight
                activeOpacity={1}
                underlayColor={"#ccd0d5"}
                onPress={this._onFocus}
                style={styles.search_icon_box}
              >
                <Icon name="search" size={22} color="#000000" />
              </TouchableHighlight>
              <Animated.View
                style={[ styles.input_box, {transform: [{translateX: this._input_box_translate_x}] } ]}
              >
                <Animated.View style={{opacity: this._back_button_opacity}}>
                  <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={"#ccd0d5"}
                    onPress={this._onBlur}
                    style={styles.back_icon_box}
                  >
                    <Icon name="chevron-left" size={22} color="#000000" />
                  </TouchableHighlight>
                </Animated.View>
                <TextInput 
                  ref="input"
                  placeholder="Search g-Learn"
                  clearButtonMode="always"
                  value={this.state.keyword}
                  onChangeText={(value) => {this.setState({keyword: value}, 
                    () => {
                    this.setState({searching: !this.state.searching});
                    this.getSearches(value);
                  })}}
                  style={styles.input}
                />
              </Animated.View>
            </View>
          </View>
        </SafeAreaView>
      
        <Animated.View style={[styles.content, { opacity: this._content_opacity, transform: [{translateY: this._content_translate_y }] }]}>
          <SafeAreaView style={styles.content_safe_area}>
            <View style={styles.content_inner}>
              <View style={styles.separator} />
              {
                this.state.keyword === ''
                ?
                  <View style={styles.image_placeholder_container}>
                    <Image 
                      source={require('../search.jpg')} 
                      style={styles.image_placeholder}
                    />
                    <Text style={styles.image_placeholder_text}>
                      Enter a key word{"\n"}
                      to search on g-Learn
                    </Text>
                  </View>
                :
                  <View style={styles.search_item}>
                    {/* <Text>{this.state.keyword}</Text> */}
                    <Text style={styles.item_icon}>{searchButton} </Text>
                    <FlatList
                      contentContainerStyle={styles.search_item}
                      data ={this.state.searchData}
                      renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          this.props.setPage(item.moduleName)
                          this.setState({searching: !this.state.searching})
                          }}>
                        <View>
                          <Text>{item.moduleName}</Text>
                        </View>
                      </TouchableOpacity>
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
              }
            </View>
          </SafeAreaView>
        </Animated.View>
      </>
    );
    
  }
}

export default Search;

const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000
  },
  header: {
    height: 50,
    paddingHorizontal: 16
  },
  header_inner: {
    flex:1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  search_icon_box: {
    width:40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#e4e6eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input_box: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top:0,
    left:0,
    backgroundColor: 'white',
    width: width - 32
  },
  back_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#e4e6eb',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15
  },
  content: {
    width: width,
    height: height,
    position:'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999
  },
  content_safe_area: {
    flex: 1,
    backgroundColor: 'white'
  },
  content_inner: {
    flex: 1,
    paddingTop: 50
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#e6e4eb'
  },
  image_placeholder_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-50%'
  },
  image_placeholder: {
    width: 150,
    height: 113,
    alignSelf: 'center'
  },
  image_placeholder_text: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 5
  },
  search_item: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16
  },
  item_icon: {
    marginRight: 15
  }
})
