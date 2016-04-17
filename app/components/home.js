import React, {
  Component,
      Image,
      ListView,
  View,
      StyleSheet,
  Text,
      TouchableHighlight
} from 'react-native';
var mockPosts = [
    {caption: "This is my picture. Isdfhbdfas jhjf hdsfjh ajd hdsfajh. sdfa hgfdsjhdfs jhsdjhdf jhadsfjh.", photoURL: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg", numLikes: 14, },{caption: "This is my picture", photoURL: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg", numLikes: 14, },{caption: "This is my picture", photoURL: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg", numLikes: 14, },{caption: "This is my picture", photoURL: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg", numLikes: 14, },{caption: "This is my picture", photoURL: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg", numLikes: 14, }];

class Home extends Component {
    
 constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }
    componentDidMount(){
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(mockPosts),
          loaded: true,
        });
    }
    
    nothing(){
        console.log("nothing");
    }

  render() {
      
      var renderPost = (mockPost) => {
        return(
            <View style={homeStyles.post}>  
                <Image source={{uri: mockPost.photoURL}} style={homeStyles.image}  > 
                    <TouchableHighlight style={homeStyles.buy} onPress={this.nothing}>
                        <Image style={homeStyles.buy} source={require('../images/logo_withroundthingwhitestroke.png')}/>
                    </TouchableHighlight>
                </Image>
                <View style={homeStyles.footer}>
                    <Text style={homeStyles.caption}>{mockPost.caption}</Text>
                    <Text>{mockPost.numLikes}</Text>
                </View>
            </View>
        );
    };
      
    return(
      <View style={homeStyles.outer}>
        <View style={homeStyles.header}>
            <Text style={homeStyles.headerText}>Instabuy</Text>
        </View>
        <View style={homeStyles.listV}>
        <ListView contentContainerStyle={homeStyles.list} dataSource={this.state.dataSource} renderRow={renderPost}>
        </ListView>
        </View>
        
        <View style={homeStyles.tabBar}>
                <TouchableHighlight style={homeStyles.tabs} onPress={this.nothing}>
                    <View style={homeStyles.tab}>
                        <Image style={homeStyles.icons} source={require('../images/home_white.png')}/>
                        <Text>Home</Text>
                    </View>
          </TouchableHighlight>
                <TouchableHighlight style={homeStyles.tabs} onPress={this.nothing}>
                    <View style={homeStyles.tab}>
                        <Image style={homeStyles.icons} source={require('../images/search_white.png')}/>
                        <Text>Search</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={homeStyles.tabs} onPress={this.nothing}>
                    <View style={homeStyles.tab}>
                        <Image style={homeStyles.icons} source={require('../images/cart_white.png')}/>
                        <Text>Cart</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={homeStyles.tabs} onPress={this.nothing}>
                    <View  style={homeStyles.tab}>
                        <Image style={homeStyles.icons} source={require('../images/cogwheel_white.png')}/>
                        <Text>Settings</Text>
                    </View>
                </TouchableHighlight>
        </View>
      </View>
    )
  }

}
const homeStyles = StyleSheet.create({
    outer: {
      flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF', 
    flexDirection: 'column',

    },
    footer: {
      borderStyle: 'solid'  ,
        borderColor: '#666666',
        borderWidth:1.5,
        borderTopWidth:0,
        flexDirection: 'row',
        marginBottom: 20,
    },
    listV: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    list:{
        flexDirection: 'column',
        justifyContent: 'center',

    },
    caption:{
         flex:1
    },
    
  image: {
      
  },
    tabBar: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#666666",
    },header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#666666",
        justifyContent: 'center'

    },
    headerText:{
        marginTop:10,
        fontSize:32,
        fontFamily:'avenir'
    },
    tabs:{
        flex:1,
        alignItems: 'center',
        borderRightWidth:0.5,
        borderLeftWidth:0.5,
        
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
        alignItems:'center'
    }
});

export default Home;
