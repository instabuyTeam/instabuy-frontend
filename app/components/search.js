import React, {
  Component,
      Image,
      ScrollView,
  Text,
      StyleSheet,
  TouchableHighlight,
      TouchableWithoutFeedback,
  TextInput,
  AsyncStorage,
  View,
} from 'react-native';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      posts: []
    }
  }
    openImage(){
        console.log("Open image");
    }
    
    goHome(){
        this.props.navigator.push({
               id: 'Home',
               name: 'Home'
             });
    }
    
    search() {
          this.refs.textInput.blur();

      var _this = this;
      console.log(this);
      AsyncStorage.getItem('access_token').then((value) => {
        console.log(value);
        fetch('https://api.instagram.com/v1/tags/' + _this.state.query + '/media/recent?access_token='+value)
        .then(response => response)
        .then(res => res.json())
        .then(data => _this.setPosts(data))
      })
    }
    
    hideKeyboard(){
        this.refs.textInput.blur();
    }

    setPosts(data) {
      this.setState({posts:data.data});
    }
    
render() {
    var _this = this;
    var posts = this.state.posts.map(function(item, key){
      return(
        <View key={key}>
            <TouchableHighlight style={{flex:1}} onPress={this.nothing}>
                <Image style={searchStyles.thumb} source={{uri: item.images.standard_resolution.url}}/>
            </TouchableHighlight>
        </View>
      )
    })

    return(
      <View  style={searchStyles.outer}>
        <View style={searchStyles.header}>
            <TextInput style={searchStyles.searchBox} ref='textInput' placeholder="Click here to search" onChangeText={(query) => this.setState({query})} onSubmitEditing={this.search.bind(this)} ></TextInput>
            <TouchableHighlight onPress={this.search.bind(this)}><Image style={searchStyles.searchBtn}  source={require("../images/search_2.png")}/></TouchableHighlight>
        </View>
          <ScrollView  scrollEnabled={true} onScroll={this.hideKeyboard.bind(this)}>
                <View style={searchStyles.listV}>
                    {posts}
                </View>
          </ScrollView>

        <View style={searchStyles.tabBar}>
                <TouchableHighlight style={searchStyles.tabs} onPress={e => {this.goHome(e)}}>
                    <View style={searchStyles.tab}>
                        <Image style={searchStyles.icons} source={require('../images/home_2.png')}/>
                        <Text style={searchStyles.tabText}>home</Text>
                    </View>
          </TouchableHighlight>
                <TouchableHighlight style={[searchStyles.tabs, searchStyles.activeTab]} onPress={this.nothing}>
                    <View style={searchStyles.tab}>
                        <Image style={searchStyles.icons} source={require('../images/search_2.png')}/>
                        <Text style={searchStyles.tabText}>Search</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={searchStyles.tabs} onPress={this.nothing}>
                    <View style={searchStyles.tab}>
                        <Image style={searchStyles.icons} source={require('../images/cart_2.png')}/>
                        <Text style={searchStyles.tabText}>Cart</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={searchStyles.tabs} onPress={this.nothing}>
                    <View  style={searchStyles.tab}>
                        <Image style={searchStyles.icons} source={require('../images/cogwheel_2.png')}/>
                        <Text style={searchStyles.tabText}>Settings</Text>
                    </View>
                </TouchableHighlight>
        </View>
      </View>
    )
  }

}
const searchStyles = StyleSheet.create({
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
                justifyContent: 'center'

    },
    list:{
        marginBottom:20
    },
    caption:{
         flex:1,
    },

  image: {
      height:300
  },
    tabBar: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#666666",
    },header: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: "#666666",
        justifyContent: 'center'

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
    searchBox: {
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
    searchBtn: {
        width:30,
        height:40,
        margin:20,
        marginLeft:5,
        marginRight:5,
        resizeMode:'contain'
    },
    activeTab:{
        backgroundColor:'#333333'
    }
});

export default Search;
