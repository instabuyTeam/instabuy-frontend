import React, {
  Component,
  Text,
  TouchableHighlight,
  TextInput,
  AsyncStorage,
  View,
  Image
} from 'react-native';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      posts: []
    }
  }

  search() {
    var _this = this;
    AsyncStorage.getItem('access_token').then((value) => {
      fetch('https://api.instagram.com/v1/tags/' + _this.state.query + '/media/recent?access_token='+value)
      .then(response => response)
      .then(res => res.json())
      .then(data => _this.setPosts(data))
    })
  }

  setPosts(data) {
    this.setState({posts:data.data});
  }

  render() {
    var _this = this;
    var posts = this.state.posts.map(function(item, key){
      console.log(item);
      console.log(item.images.standard_resolution.url);
      return(
        <View key={key}>
            <Image style={{width: 50, height:50}} source={{uri: item.images.standard_resolution.url}}/>
        </View>
      )
    })
    return(
      <View>
        <TextInput
        placeholderTextColor='white'
        onChangeText={(query) => this.setState({query})}>
        </TextInput>
        <TouchableHighlight onPress={this.search.bind(this)}>
          <Text>Search</Text>
          </TouchableHighlight>
          <View>{posts}</View>
      </View>
    )
  }

}

export default Search;
