import React, {
  Component,
      Image,
      ListView,
  View,
      StyleSheet,
  Text,
      TouchableHighlight,
  AsyncStorage,
      ScrollView
} from 'react-native';

var Firebase = require('firebase');
var ref = new Firebase('https://instabuysell.firebaseio.com/');

class ImageView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {},
      products: [],
      seller: true,
      card: ''
    }
  }

  componentDidMount() {
    var _this = this;
    AsyncStorage.getItem("item").then((value) => {
      _this.setState({item:JSON.parse(value)})
    }).then(function() {
      fetch('http://10.24.193.217:1337/' + 'cloudsight/img', {
        method: 'post',
        body: JSON.stringify({
          img_url: _this.state.item.images.standard_resolution.url
        })
      })
      .then(response => response)
      .then(res => res.json())
      .then(data => _this.setState({products: data}) )
    }).then(function(){
      ref.child('users').once('value', function(snap){
        //if(snapshot.hasChild(_this.state.item.user.username)) {
            //_this.setState({seller:true, card: snap.val()._this.state.item.user.username.card});
        //}
      })
    })

  }

    goHome(){
        this.props.navigator.push({
               id: 'Home',
               name: 'Home'
             });
    }
    goSearch(){
        this.props.navigator.push({
               id: 'search',
               name: 'search'
             });
    }

    buy() {
      fetch('')
      .then(response => response)
      .then(res => res.json())
      .then(data => _this.setState({products: data}) );
    }

render() {
  var url;
    if(this.state.item.hasOwnProperty('images')) {
      url = this.state.item.images.standard_resolution.url;
    } else {
      url = 'https://camo.githubusercontent.com/891e94cd8dda7f40f451bb27067be513c230318a/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f626f676a732f6a732e706e67'
    }

    var buy;
    if(this.state.seller) {
      buy = <View>
        <TouchableHighlight onPress={this.buy}><Text style={{fontSize:15}}>Buy</Text></TouchableHighlight>
      </View>
    }

    var posts;
    /*if(this.state.item.hasOwnProperty('images')) {
       posts = this.state.item.map(function(item, key){
        return(
          <View style={{flexDirection:'row',flex:1}}>
              <Image source={{uri: url,width:100,height:100}}/>
              <View style= {{flexDirection: 'column'}}>
                  <Text>Brand</Text>
                  <Text>Description</Text>
                  <Text>Price</Text>
                  <Text>Web store</Text>
              </View>
          </View>
        )
      })
    }*/
    var products;

    if(this.state.products.length > 0 && this.state.products[1].imgUrl) {
        products = this.state.products.map(function(item, key){
          var u = 'https://avatars3.githubusercontent.com/u/1857166?v=3&s=96';
          if(item.imgUrl) {
            u = item.imgUrl;
          }
          if(item.imgUrl.length > 0 && item.imgUrl) {
             return(
               <View key={key} style={{flexDirection:'row',flex:1}}>
                   <Image source={{uri: item.imgUrl[0]}} style={{width:100, height:100}}/>
                   <View style= {{flexDirection: 'column'}}>
                       <Text>{item.brand}</Text>
                       <Text>{item.description}</Text>
                       <Text>{item.price}</Text>
                       <Text>Web store</Text>
                   </View>
                   {buy}
               </View>
             )
           }
           })
    }



    return(
      <View style={imgStyles.outer}>
        <View style={imgStyles.header}>
            <TouchableHighlight onPress={this.props.navigator.pop}><Text style={{marginTop:20}}>Back</Text></TouchableHighlight>
        </View>
        <Text>{this.state.products}</Text>
        <ScrollView>
          {products}
        </ScrollView>

        <View style={imgStyles.tabBar}>
                <TouchableHighlight style={imgStyles.tabs} onPress={e => {this.goHome(e)}}>
                    <View style={imgStyles.tab}>
                        <Image style={imgStyles.icons} source={require('../images/home_2.png')}/>
                        <Text style={imgStyles.tabText}>home</Text>
                    </View>
          </TouchableHighlight>
                <TouchableHighlight style={imgStyles.tabs} onPress={e => {this.goSearch(e)}}>
                    <View style={imgStyles.tab}>
                        <Image style={imgStyles.icons} source={require('../images/search_2.png')}/>
                        <Text style={imgStyles.tabText}>Search</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={imgStyles.tabs} onPress={this.nothing}>
                    <View style={imgStyles.tab}>
                        <Image style={imgStyles.icons} source={require('../images/cart_2.png')}/>
                        <Text style={imgStyles.tabText}>Cart</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={imgStyles.tabs} onPress={this.nothing}>
                    <View  style={imgStyles.tab}>
                        <Image style={imgStyles.icons} source={require('../images/cogwheel_2.png')}/>
                        <Text style={imgStyles.tabText}>Settings</Text>
                    </View>
                </TouchableHighlight>
        </View>
      </View>
    )
  }

}
const imgStyles = StyleSheet.create({
    outer: {
      flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',

    },
    footer: {
        flexDirection: 'row',
        padding:5
    },
    user: {
        flexDirection: 'row',
                alignItems:'center'

    },
    listV: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    list:{
        marginBottom:20
    },
    caption:{
         flex:1,
    },

  image: {
      height:300,
      flex:1
  },
    tabBar: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#666666",
    },header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#666666",
        justifyContent: 'flex-start'

    },
    headerText:{
        marginTop:16,
        color:'#ffffff',
        fontSize:24,
        fontFamily:'avenir'
    },
    tabs:{
        flex:1,
        alignItems: 'center',
        borderRightWidth:0.5,
        borderColor: '#ffffff'
    },
    icons: {
        width: 30,
        height: 30
    },
    buy: {
        width: 50,
        height: 50,
    },
    post: {
        alignItems:'stretch',
        flex: 1,
        flexDirection:'column'
    },
    tab: {
        alignItems:'center',
        paddingTop:3,

    },
    tabText: {
        color:'#ffffff'
    },
    face:{
        height:40,
        width:40,
        borderRadius:20
    },
    headerImage: {
        marginTop:18  ,
        height:30,
        width:130,
    },
    thumb: {
        height:100,
        width:100,
        margin:0.5
    },
    imgBox: {
        marginTop:20,
        flex:1,
        borderStyle: 'solid',
        borderWidth:1,
        borderColor:"#ffffff",
        backgroundColor:"#dddddd",
        borderRadius:9,
        marginBottom:5,
        marginLeft:5,
    },
    imgBtn: {
        width:20,
        height:20,
        margin:20
    },
    activeTab:{
        backgroundColor:'#333333'
    }
});

export default ImageView;
