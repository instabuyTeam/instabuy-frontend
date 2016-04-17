import React, {
  Component,
      Image,
      ListView,
  View,
      StyleSheet,
  Text,
      TextInput,
      TouchableHighlight,
  AsyncStorage,
      ScrollView
} from 'react-native';

class Visapage extends Component {
    send(){
        fetch('http://10.24.193.217:1337/visa/pushpayment')
              .then(response => response.json())
              .then(res => res);
    }
     goSearch(){
        this.props.navigator.push({
               id: 'search',
               name: 'search'
             });
    }
    goHome(){
        this.props.navigator.push({
               id: 'Home',
               name: 'Home'
             });
    }
    
render() {
  
      return (
                <View style={imgStyles.outer}>

          <View style={imgStyles.header}>
            <TouchableHighlight underlayColor="transparent" onPress={this.props.navigator.pop}><Text style={{marginTop:20}}>Back</Text></TouchableHighlight>
        </View>
          <View style={{flex:1}}>
          <Text>Credit card info: </Text><TextInput style={searchStyles.searchBox} ref='textInput' placeholder="Tap here to enter" ></TextInput>
          <Text>Name: </Text><TextInput style={searchStyles.searchBox} ref='textInput' placeholder="Tap here to type" ></TextInput>
          <Text>Expiration date: </Text><TextInput style={searchStyles.searchBox} ref='textInput' placeholder="Tap here to type"  ></TextInput>
          <Text>CVC: </Text><TextInput style={searchStyles.searchBox} ref='textInput' placeholder="Tap here to type"  ></TextInput>
          
            
            <TouchableHighlight underlayColor="transparent" onPress={this.send}>
                <Text style={{flex:1, margin:50}}>Tip the developers!</Text>
            </TouchableHighlight>
          </View>
                  <View style={imgStyles.tabBar}>

          <TouchableHighlight underlayColor="transparent"  style={imgStyles.tabs} onPress={e => {this.goHome(e)}}>
                    <View style={imgStyles.tab}>
                        <Image style={imgStyles.icons} source={require('../images/home_2.png')}/>
                        <Text style={imgStyles.tabText}>Home</Text>
                    </View>
          </TouchableHighlight>
                <TouchableHighlight underlayColor="transparent"  style={imgStyles.tabs} onPress={e => {this.goSearch(e)}}>
                    <View style={imgStyles.tab}>
                        <Image style={imgStyles.icons} source={require('../images/search_2.png')}/>
                        <Text style={imgStyles.tabText}>Search</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="transparent"  style={[imgStyles.tabs, imgStyles.activeTab]} onPress={this.nothing}>
                    <View style={imgStyles.tab}>
                        <Image style={imgStyles.icons} source={require('../images/gift_white.png')}/>
                        <Text style={imgStyles.tabText}>Send gift</Text>
                    </View>
                </TouchableHighlight>
                        </View>
     </View>
      );
    
}
}
const imgStyles = StyleSheet.create({
    outer: {
      flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',

    },
    resultText:{
        margin:2.5,
        marginLeft:5,
        marginRight:5,
    },
    result: {
        flexDirection:'row',
        flex:1, 
        alignItems:'center',
        borderBottomColor: '#3d1c00',
        borderBottomWidth:3
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
        backgroundColor: "#4f4e57",
    },header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#8f776a",
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
        backgroundColor:'#8ac7de'
    }
});
    
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
        backgroundColor: "#4f4e57",
    },header: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: "#8f776a",
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
        backgroundColor:'#8ac7de'
    }
});

export default Visapage