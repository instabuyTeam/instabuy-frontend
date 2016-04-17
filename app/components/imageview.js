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

class ImageView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {}
    }
  }

  componentDidMount() {
    var _this = this;
    AsyncStorage.getItem("item").then((value) => {
      _this.setState({item:JSON.parse(value)})
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

render() {
  var url;
    if(this.state.item.hasOwnProperty('images')) {
      url = this.state.item.images.standard_resolution.url;
    } else {
      url = 'https://camo.githubusercontent.com/891e94cd8dda7f40f451bb27067be513c230318a/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f626f676a732f6a732e706e67'
    }


    return(
      <View style={imgStyles.outer}>
        <View style={imgStyles.header}>
            <TouchableHighlight onPress={this.props.navigator.pop}><Text style={{marginTop:20}}>Back</Text></TouchableHighlight>
        </View>
        <ScrollView>
            <View style={{flexDirection:'row',flex:1}}>
                <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg',width:100,height:100}}/>
                <View style= {{flexDirection: 'column', marginLeft:5}}>
                    <Text>Brand</Text>
                    <Text>Description</Text>
                    <Text>Price</Text>
                    <Text>Web store</Text>
                </View>
            </View>

            <View style={{flexDirection:'row',flex:1}}>
                <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg',width:100,height:100}}/>
                <View style= {{flexDirection: 'column', marginLeft:5}}>
                    <Text>Brand</Text>
                    <Text>Description</Text>
                    <Text>Price</Text>
                    <Text>Web store</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',flex:1}}>
                <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg',width:100,height:100}}/>
                <View style= {{flexDirection: 'column', marginLeft:5}}>
                    <Text>Brand</Text>
                    <Text>Description</Text>
                    <Text>Price</Text>
                    <Text>Web store</Text>
                </View>
            </View>
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
