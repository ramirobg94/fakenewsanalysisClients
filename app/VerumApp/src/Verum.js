

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';

var XMLHttpRequestPromise = require('xhr-promise');

import News from './News';
import Detail from './Detail';

 class Verum extends Component {
constructor(props){
    super(props)
    this.state = {
      url:'',
      noticia:{},
      likes: 0,
      disLikes:{},
      fb:{},
      twitter:{},
      veracity:{},
      lenguaje:{},
      pepe:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadLikes = this.loadLikes.bind(this);
    this.llamada = this.llamada.bind(this)
    /*
    this.loadDislikes = this.handleSubmit.bind(this);
    this.loadFb = this.loadFb.bind(this);
    this.loadTwitter = this.loadTwitter.bind(this);
    this.loadLenguageAnalysis = this.loadLenguageAnalysis.bind(this);
    this.loadVeracity = this.loadVeracity.bind(this);
*/

  }

llamada(url,param,verb){
    var xhrPromise = new XMLHttpRequestPromise();

  return xhrPromise.send({
    method: verb,
    url: url,
    data: param
  });
}


  async loadLikes(url){

    var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
  } else {
    console.warn('error');
  }
};

request.open('POST', 'http://internacional.elpais.com/internacional/2017/03/10/actualidad/1489114908_588046.html');
request.send();

    
    const urlb ='http://internacional.elpais.com/internacional/2017/03/10/actualidad/1489114908_588046.html'
    try{
      let response = await this.llamada('https://fakenewsaintgood.herokuapp.com/getlikes','url='+urlb, 'POST')

      let res = await response.text();
this.setState({pepe: res})
        


      if( response.status >= 200 && response.status < 300) {
            
        

      } else {
        let error = res;
        throw error;
      }
    }catch(error){

    }
  

  }

  handleSubmit(){
    this.loadLikes(this.props.url);
    /*this.loadDislikes(this.props.url);
        this.loadFb(this.props.url);
            this.loadTwitter(this.props.url);
                this.loadLenguageAnalysis(this.props.url);
                    this.loadVeracity(this.props.url);*/
  } 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
            <TextInput placeholder="url noticia" style={styles.searchBox} onChangeText={(url) => this.setState({url})}></TextInput>
            <TouchableHighlight  style={styles.searchBtn} onPress={this.handleSubmit}>
            <Text style={{fontSize: 25, color: '#333', textAlign: 'center', backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderColor: '#445'}}>o</Text>

      </TouchableHighlight>
        </View>

        < News texto={this.state.pepe}/>
        <Detail/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   searchBar:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchBtn:{
    flex:1
  },
  searchBox:{
    flex:9
  }
});

export default Verum;