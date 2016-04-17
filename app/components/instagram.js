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
      images: [],
      sent: false
    }
  }

  //componentDidMount() {
    //console.log('mount');
    /*fetch('http://10.24.193.217:1337/' + 'cloudsight/test')
    .then(response => response)
    .then(res => res.json())
    .then(data => console.log(data) );*/
  //}

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
      //console.log(response);
      //console.log(response.json());
          response.json().then(function(data){
              //console.log(data);
          });
        });
  }

  setImageList(data) {
    var _this = this;
    this.setState({followers: data.data});
      new Promise(function(res, rej){
        for(var f in _this.state.followers) {
          var arr = _this.state.followers;
          var curr = f;
          fetch('https://api.instagram.com/v1/users/' + _this.state.followers[f].id +'/media/recent?access_token='+_this.state.token)
            .then(response => response)
            .then(res => res.json())
            .then(data => _this.addImages(data))
            .then(data => {
                _this.gotoHome();
            })
      }
    })
  }

  gotoHome() {
      var _this = this;
      var str = JSON.stringify(this.state.images);
      //console.log(this.state.images);
      //console.log(JSON.stringify(this.state.images));
      AsyncStorage.setItem('images', str)
      .then(function(){
          _this.props.navigator.push({
            id: 'Home',
            name: 'Home'
          });
      })
  }

  addImages(data, flag) {
    //console.log(data);
    for(var i in data.data) {
      var arr = this.state.images;
      arr.push(data.data[i])
      //console.log(arr);
      this.setState({images: arr});
      //console.log(this.state.images);
    }
  }

  webUpdate(navState) {
    var _this = this;
    AsyncStorage.getItem('access_token').then((value) => {
      if(value) {
        if(!_this.state.sent) { //navState.url.includes('access_token') && navState.url.includes('github') && !_this.state.sent)
            this.setState({sent: true})
            this.setState({url: navState.url});
            _this.setState({token: value});
            fetch('https://api.instagram.com/v1/users/self/follows?access_token='+value)
              .then(response => response)
              .then(res => res.json())
              .then(data => _this.setImageList(data))
        }

      } else {
        if(navState.url.includes('access_token') && navState.url.includes('github') && !_this.state.sent) {
          this.setState({sent: true})
          this.setState({url: navState.url});
          console.log(navState.url);
          console.log(navState.url.substring(navState.url.indexOf('=')+1, navState.url.length));
          this.setState({token: navState.url.substring(navState.url.indexOf('=')+1, navState.url.length)});
          AsyncStorage.setItem('access_token', navState.url.substring(navState.url.indexOf('=')+1, navState.url.length));
          fetch('https://api.instagram.com/v1/users/self/follows?access_token='+_this.state.token)
            .then(response => response)
            .then(res => res.json())
            .then(data => _this.setImageList(data))
        }

      }
    })

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
             height: 300,
           }}
           source={{
             uri: instagramURL,
             method: 'POST'

           }}
           scalesPageToFit={false}
         />
      </View>
    )
  }

}

export default Instagram
