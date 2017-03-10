/*import fetch from 'isomorphic-fetch';
import FormData from 'form-data';

export function get(url){
  return fetch(url).then(response => {
    if(response.ok){
      return response.json();
    }
    throw {
      status: response.status,
      text: response.statusText
    }
  });
}

export function post(url,data){
  //console.log(data)
  //var details = JSON.stringify(data);
  //console.log(details)

     var formData = new FormData()
        formData.append('email','asdasdasdsa')

      console.log("from")
      console.log(formData)



	return fetch(url,{
		method: 'POST',
    mode: 'no-cors',
		headers: {
      'Accept': '*',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
    data: {url: 'pepe'} 
	})
	.then(response => {
    if(response.ok){
      return response.json();
    }
    throw {
      status: response.status,
      text: response.statusText
    }
  });
}
*/

var XMLHttpRequestPromise = require('xhr-promise');

class Api {
  static headers() {
    return {
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    console.log('post')
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static authGet(route, token) {
    return this.xhrAuth(route, null, 'GET', token);
  }

  static authPut(route, params, token) {
    return this.xhrAuth(route, params, 'PUT', token)
  }

  static authPost(route, params, token) {
    return this.xhrAuth(route, params, 'POST', token)
  }

  static authDelete(route, params, token) {
    return this.xhrAuth(route, params, 'DELETE', token)
  }

  static xhr(route, params, verb) {
    const host = 'https://fakenewsaintgood.herokuapp.com'
    const url = `${host}${route}`

    var param = '';
    if(params){
      var keys = Object.keys(params);
      for(var j = 0; j<keys.length; j++){
        param += keys[j]+'='+params[keys[j]];
        if(j < keys.length-1){
          param += '&'
        }
      }
    }


  var xhrPromise = new XMLHttpRequestPromise();

  return xhrPromise.send({
    method: verb,
    url: url,
    data: param
  });


  }

  static xhrAuth(route, params, verb, token) {
    const host = 'https://fakenewsaintgood.herokuapp.com'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers() 
    options.headers['authorization'] = token;
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json.results );
  }

}
export default Api

