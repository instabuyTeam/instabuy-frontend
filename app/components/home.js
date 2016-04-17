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
      posts: []
    };
  }
    componentDidMount(){
      var _this = this;
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.state.posts),
          loaded: true,

        });
        console.log('mount');
        /*AsyncStorage.getItem('images', function(images) {
          var arr= [];
          console.log(images);
          var post = JSON.parse(images)
          for(var i in post) {
            arr.push(post[i]);
          }
          _this.setState({posts: arr});
        })*/
        this.setImages();
    }

    setImages() {
      var _this = this;
      AsyncStorage.getItem('images').then((value) => {
        console.log(value);
        console.log(JSON.parse(value));
        this.setState({posts: JSON.parse(value)});
      })

      /*function(images) {
        var arr = [];
        console.log(images);
        var post = JSON.parse(images)
        for(var i in post) {
          arr.push(post[i]);
        }
        _this.setState({posts: arr});
      })*/
    }

    nothing(){
        console.log("nothing");
    }
    goSearch(){
        this.props.navigator.push({
               id: 'search',
               name: 'search'
             });
    }
    goPhoto(){
        this.props.navigator.push({
               id: 'ImageView',
               name: 'ImageView'
             });
    }
  render() {
      var renderPost = (mockPost) => {
        return(
            <View>
                <Image source={{uri: mockPost.images.standard_resolution.url}} style={homeStyles.image}>
                    <TouchableHighlight style={homeStyles.buy} onPress={this.nothing}>
                        <Image style={homeStyles.buy} source={require('../images/logo_withroundthingwhitestroke.png')}/>
                    </TouchableHighlight>
                </Image>
                <View style={homeStyles.footer}>
                    <Text style={homeStyles.caption}>mockPost.caption</Text>
                    <Text>mockPost.numLikes</Text>
                </View>
            </View>
        );
    };
//    var _this = this;
//    var posts = this.state.posts.map(function(item, key){
//      console.log(item);
//      return(
//        <View key={key} style={homeStyles.list}>
//            <View style={homeStyles.user}>
//                <Image source={{uri: item.user.profile_picture}} style={homeStyles.face}/>
//                <Text style={homeStyles.caption}>{item.user.username}</Text>
//            </View>
//            <Image source={{uri: item.images.standard_resolution.url}} style={homeStyles.image}>
//                <TouchableHighlight style={homeStyles.buy} onPress={_this.goPhot}>
//                    <Image style={homeStyles.buy} source={require('../images/logo_withroundthing.png')}/>
//                </TouchableHighlight>
//
//            </Image>
//            <View style={homeStyles.footer}>
//                <Text style={homeStyles.caption}>{item.caption}</Text>
//            </View>
//        </View>
//      )
//    })


    return(
      <View style={homeStyles.outer}>
        <View style={homeStyles.header}>
            <Image style={homeStyles.headerImage} source={require('../images/typemark_cropped.png')}/>
        </View>
          <ScrollView scrollEnabled={true} >
            <View  style={homeStyles.list}>
            <View style={homeStyles.user}>
                <Image source={require('../images/face.jpg')} style={homeStyles.face}/>
                <Text style={homeStyles.caption}>Mark</Text>
            </View>
            <Image source={{uri:"https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}} style={homeStyles.image}>
                <TouchableHighlight style={homeStyles.buy} onPress={e=>{this.goPhoto(e)}}>
                    <Image style={homeStyles.buy} source={require('../images/logo_withroundthing.png')}/>
                </TouchableHighlight>

            </Image>
            <View style={homeStyles.footer}>
                <Text style={homeStyles.caption}>sdfdsfhjgsdfhjgdfshjg</Text>
            </View>
        </View>
          </ScrollView>

        <View style={homeStyles.tabBar}>
                <TouchableHighlight style={[homeStyles.tabs, homeStyles.activeTab]} onPress={this.nothing}>
                    <View style={homeStyles.tab}>
                        <Image style={homeStyles.icons} source={require('../images/home_2.png')}/>
                        <Text style={homeStyles.tabText}>Home</Text>
                    </View>
          </TouchableHighlight>
                <TouchableHighlight style={homeStyles.tabs} onPress={e => {this.goSearch(e)}}>
                    <View style={homeStyles.tab}>
                        <Image style={homeStyles.icons} source={require('../images/search_2.png')}/>
                        <Text style={homeStyles.tabText}>Search</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={homeStyles.tabs} onPress={this.nothing}>
                    <View style={homeStyles.tab}>
                        <Image style={homeStyles.icons} source={require('../images/cart_2.png')}/>
                        <Text style={homeStyles.tabText}>Cart</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={homeStyles.tabs} onPress={this.nothing}>
                    <View  style={homeStyles.tab}>
                        <Image style={homeStyles.icons} source={require('../images/cogwheel_2.png')}/>
                        <Text style={homeStyles.tabText}>Settings</Text>
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
        flexDirection: 'row',
        padding:5
    },
    user: {
        flexDirection: 'row',
        alignItems:'center',
        margin:5
    },
    listV: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'stretch'
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
        height: 50,
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
        alignSelf:'flex-end'
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
    activeTab:{
        backgroundColor:'#333333'
    }
});

export default Home;
