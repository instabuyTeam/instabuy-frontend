import React, {
  Component,
      Image,
      ScrollView,
  Text,
      StyleSheet,
  TouchableHighlight,
  TextInput,
      View
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
      <View style={searchStyles.outer}>
        <View style={searchStyles.header}>

        </View>
          <ScrollView scrollEnabled={true} >
              <View style={searchStyles.listV}>
            <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          <Image style={searchStyles.thumb} source={{uri: "https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg"}}/>
          </View>
          </ScrollView>

        <View style={searchStyles.tabBar}>
                <TouchableHighlight style={searchStyles.tabs} onPress={this.nothing}>
                    <View style={searchStyles.tab}>
                        <Image style={searchStyles.icons} source={require('../images/home_2.png')}/>
                        <Text style={searchStyles.tabText}>home</Text>
                    </View>
          </TouchableHighlight>
                <TouchableHighlight style={searchStyles.tabs} onPress={this.nothing}>
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
        justifyContent: 'center',
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
    }
});

export default Search;
