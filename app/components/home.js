import React, {
  Component,
      Image,
      ListView,
  View,
      StyleSheet,
  Text
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
       
    },
    caption:{
         flex:1
    },
    
  image: {
      width:200,
      height:200,
  }
});

export default Home;
