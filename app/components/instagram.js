import React, {
  Component,
  View,
  Text,
  WebView
} from 'react-native';

var accessTokenURL = 'https://api.instagram.com/oauth/authorize/';
var instagramURL = 'https://www.instagram.com/oauth/authorize/?client_id=378839e8b61f4c8ba6489c4cb8466b03&redirect_uri=https://github.com/instabuyTeam&response_type=token&scope=basic+public_content'


class Instagram extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url : instagramURL
    }
  }

  /*componentDidMount() {
    var data = {
        "client_id": "378839e8b61f4c8ba6489c4cb8466b03",
        //"client_secret": "deeecab9550a455db7a647985b5deda4",
        //"grant_type": "authorization_code",
        "redirect_uri": "https://github.com/instabuyTeam",
        "response_type": "token"

      };

    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody);
    /*fetch(instagramURL,{
      method: 'post'
    }).then(function (response) {
      console.log(response);
      console.log(response.json());
          response.json().then(function(data){
              console.log(data);
          });
        });

    fetch(accessTokenURL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        client_id: '378839e8b61f4c8ba6489c4cb8466b03',
        redirect_uri: 'https://github.com/instabuyTeam',
        response_type: 'token'
      })

    }).then(function (response) {
      console.log(response);
      console.log(response.json());
          response.json().then(function(data){
              console.log(data);
          });
        });
  }*/

  webUpdate(navState) {
    console.log(navState.url);
    this.setState({url: navState.url})
  }

  render() {
    return(
      <View>
        <Text>Instabuy</Text>
          <WebView
           onNavigationStateChange = {this.webUpdate.bind(this)}
           style={{
             backgroundColor: 'white',
             height: 500,
           }}
           source={{
             uri: instagramURL,
             method: 'POST'

           }}
           scalesPageToFit={false}
         />
       <Text>{this.state.url}</Text>
      </View>
    )
  }

}

export default Instagram
