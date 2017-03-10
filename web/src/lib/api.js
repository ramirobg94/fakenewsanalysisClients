import fetch from 'isomorphic-fetch';


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
  console.log(data)
  var details = JSON.stringify(data);
  console.log(details)

	return fetch(url,{
		method: 'POST',
		headers: {
      'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: details
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

