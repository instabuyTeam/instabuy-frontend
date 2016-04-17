import React, {
  Component,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  render() {
    return(
      <View>
        <TextInput
        placeholderTextColor='white'
        onChangeText={(q) => this.setState({query:q})}>
        </TextInput>
        <TouchableHighlight onPress={}>
          <Text>Search</Text>
          </TouchableHighlight>
      </View>
    )
  }

}

export default Search;
