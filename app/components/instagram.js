import React, {
  Component,
  View,
  Text,
  WebView,
  Image,
  AsyncStorage
} from 'react-native';

var accessTokenURL = 'https://api.instagram.com/oauth/authorize/';
var instagramURL = 'https://www.instagram.com/oauth/authorize/?client_id=378839e8b61f4c8ba6489c4cb8466b03&redirect_uri=https://github.com/instabuyTeam&response_type=token&scope=public_content+follower_list'


class Instagram extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: instagramURL,
      token: '',
      followers: '',
      followers: [],
      images: []
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

  componentDidMount() {

  }

  lookUpImage() {
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
  }

  setImageList(data) {
    var _this = this;
    console.log(data);
    console.log(data.data);
    this.setState({followers: data.data});
    for(var f in data.data) {
      fetch('https://api.instagram.com/v1/users/' + data.data[f].id +'/media/recent?access_token='+this.state.token)
        .then(response => response)
        .then(res => res.json())
        .then(data => _this.addImages(data));
    }
  }

  addImages(data) {
    console.log(data);
    for(var i in data.data) {
      var arr = this.state.images;
      arr.push(data.data[i])
      console.log(arr);
      this.setState({images: arr});
      console.log(this.state.images);
    }
  }

  webUpdate(navState) {
    var _this = this;
    console.log(navState.url);
    this.setState({url: navState.url});
    this.setState({token: navState.url.substring(navState.url.indexOf('=')+1, navState.url.length)});
    AsyncStorage.setItem('access_token', navState.url.substring(navState.url.indexOf('=')+1, navState.url.length));
    fetch('https://api.instagram.com/v1/users/self/follows?access_token='+this.state.token)
      .then(response => response)
      .then(res => res.json())
      .then(data => _this.setImageList(data));

    /*AsyncStorage.getItem("access_token", function(token) {
      fetch('https://api.instagram.com/v1/users/self/follows?access_token='+token).then(function(response){
        console.log(response);
        console.log(response.json());
        console.log(response.json()._65);
        response.json().then(function(data){
            console.log(data);
        });
      })
    })*/
  }

  render() {
    var images = this.state.images.map(function(item, key){
      return(
        <View key={key}>
          <Text>{item.images.standard_resolution.url}</Text>
          <Image style={{width: 50, height: 50}} source={{uri: item.images.standard_resolution.url}}/>
        </View>
      )
    });
    return(
      <View>
        <Text>Instabuy</Text>
        {images}
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
