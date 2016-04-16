import React, {
  Component,
  View,
  Text
} from 'react-native';

class Home extends Component {

  componentDidMount() {
    var _this = this;
    setTimeout(function(){
      _this.props.navigator.push({
        id: 'instagram',
        name: 'instagram'
      });
    }, 1000);
  }

  render() {
    return(
      <View>
        <Text>Home</Text>
      </View>
    )
  }

}

export default Home;
