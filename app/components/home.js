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
    nothing(){
        
    }
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
    renderPost(mockPost){
        return(
            <View>  
                <Image source={{uri: mockPost.photoURL}} style={homeStyles.image} />
                <View style={homeStyles.footer}>
                    <Text style={homeStyles.caption}>{mockPost.caption}</Text>
                    <Text>{mockPost.numLikes}</Text>
                </View>
            </View>
        );
    }

  render() {
    return(
      <View style={homeStyles.outer}>
        <View style={homeStyles.header}>
            <Text>Instabuy</Text>
        </View>
        <ListView style={homeStyles.list} dataSource={this.state.dataSource} renderRow={this.renderPost}>
        </ListView>
        <View style={homeStyles.tabBar}>
            <TouchableHighlight onPress={this.nothing}>
                <Text style={homeStyles.tab}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.nothing}>
                <Text style={homeStyles.tab}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.nothing}>
                <Text style={homeStyles.tab}>3</Text>
            </TouchableHighlight
            ><TouchableHighlight onPress={this.nothing}>
                <Text style={homeStyles.tab}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.nothing}>
                <Text style={homeStyles.tab}>5</Text>
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF', 
    flexDirection: 'column',

    },
    footer: {
      borderStyle: 'solid'  ,
        borderColor: '#666666',
        borderWidth:2,
        borderTopWidth:0,
        flexDirection: 'row',
        width: 200,
        marginBottom: 20
    },
    list: {
        flex: 1,
               flexDirection: 'column',

    },
    caption:{
         flex:1
    },
    
  image: {
      width:200,
      height:200,
  },
    tabBar: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#666666",
    },
    tab:{
        flex:10000000,
        margin:20
    }
});

export default Home;
