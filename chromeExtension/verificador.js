console.log(window.location.hostname)
/*console.log(window.location)
console.log(window.document)*/

var d = new Date();

const whiteList = [
  'elpais',
  'publico',
  'elmundo',
  'larazon',
  'periodistadigital'

]
const thumb = '<svg version="1.1" id="pik_obj_453_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0.1 1.4 31.8 29" enable-background="new 0 0 32 32" xml:space="preserve" preserveAspectRatio="none">'+
'<path d="M30.808,14.567c0.684-0.666,1.093-1.727,1.093-2.527c0-1.259-1.01-3.16-2.531-3.16h-7.019'+
'c0.704-1.114,1.857-3.038,2.072-4.034c0.276-1.291-0.603-2.686-1.96-3.108c-1.23-0.376-2.684,0.259-3.385,1.491'+
'c-1.83,3.235-6.746,6.407-8.775,7.622c-0.034,0.02-0.058,0.05-0.09,0.072V9.511c0-0.351-0.284-0.632-0.633-0.632H0.731'+
'c-0.351,0-0.632,0.281-0.632,0.632v18.962c0,0.348,0.281,0.631,0.632,0.631H9.58c0.349,0,0.633-0.283,0.633-0.631V27.23'+
'c1.093,1.795,2.802,3.139,4.772,3.139H26.48c1.428,0,2.531-1.643,2.531-3.059c0-0.626-0.236-1.404-0.645-2.045'+
'c1.346-0.237,2.225-1.944,2.226-3.115c0-0.612-0.239-1.374-0.655-1.998c1.126-0.382,1.963-1.827,1.963-3.059'+
'C31.9,16.292,31.491,15.232,30.808,14.567z M8.948,27.841H1.364V10.143h7.584v3.096v9.702V27.841z M29.369,18.992h-1.274'+
'c-0.002,0-0.004-0.001-0.006-0.001h-3.97c-0.352,0-0.633,0.28-0.633,0.632c0,0.348,0.281,0.632,0.633,0.632h2.522'+
'c0.002,0,0.003,0.001,0.005,0.001h1.447c0.597,0.006,1.234,1.114,1.234,1.895c0,0.783-0.655,1.896-1.268,1.896H26.52'+
'c-0.004,0-0.008-0.002-0.012-0.002h-3.654c-0.351,0-0.631,0.282-0.631,0.633c0,0.348,0.28,0.633,0.631,0.633h1.256'+
'c0.004,0,0.006,0.002,0.01,0.002h2.396c0.546,0.011,1.231,1.123,1.231,1.998c0,0.75-0.638,1.791-1.267,1.791H14.984'+
'c-2.637,0-4.76-3.354-4.771-6.141v-9.731c0.003-0.526,0.284-1.024,0.739-1.296c2.117-1.266,7.248-4.587,9.228-8.083'+
'c0.354-0.624,1.166-1.133,1.908-0.906c0.736,0.23,1.242,0.978,1.102,1.635c-0.211,0.963-1.819,3.518-2.422,4.422'+
'c-0.195,0.288-0.117,0.681,0.174,0.876c0.062,0.042,0.132,0.065,0.201,0.082c0.114,0.114,0.272,0.185,0.447,0.185h7.778'+
'c0.612,0,1.267,1.113,1.267,1.896s-0.639,1.896-1.236,1.896h-0.226h-2.526c-0.351,0-0.633,0.281-0.633,0.632'+
'c0,0.348,0.282,0.632,0.633,0.632h2.526h0.226H29.4c0.596,0,1.235,1.11,1.235,1.893C30.636,17.878,29.98,18.992,29.369,18.992z" fill="#000000"></path>'+
'</svg>';

function vibrar(){
  $('#fnaBottom').addClass('shake');
}

function expandir(){
  $('#fnaBottom').addClass('shake');
}

$(document.body).append(
	'<div id="verumBox" class="animated bounceInRight" >'+
  '<i class="material-icons" id="closeVerum">&#xE5CD;</i>'+
  '<i class="material-icons" id="eyeVerum" >&#xE417;</i>'+
  '<div id="verumInfo" style="display: none"><p>Resultados</p>'+
  '<div id="mensajeBox"></div>'+
  '<br><p>¿Te parece correcta nuesta valoración?</p>'+
  '<div class="btnBoxExt">'+
  '<div class="btnExt" id="btnLike"><i class="material-icons">&#xE7F2;</i></div>'+
  '<div class="btnExt" id="btnDisLike"><i class="material-icons">&#xE7F3;</i></div>'+
  '</div>'+
  '<div class="btnBoxExtLink">'+
  '<a href="https://fakenewsaintgood.herokuapp.com/?url='+ window.location.href +
  '" class="">más detalles...</a>'+
  '</div>'+
  '</div>'+
  '<div id="fnaBar"><div id="fnaBottom">rate</div><div>'+
  '</div>')

$(document).ready(function() {

  var encontrado = false;

  for(var i = 0; i < whiteList.length; i++ ){

    if(window.location.hostname.includes(whiteList[i]) ) {
      encontrado = true;
      break;
    }
  }
  if(encontrado){
  }else{
    $('#verumBox').remove();
  }

  $("#verumBox").click(function() {
    $('#verumBox').css('width','30vw'); 
    $('#verumInfo').css('display','block'); 
     $('#fnaBottom').css( 'width', '5vw');
  });

  $('#closeVerum').click(function(){
    $('#verumBox').remove();
  })


  $('#btnLike').click(function(){
    $.ajax({                        
           type: "POST",                 
           url: 'https://fakenewsaintgood.herokuapp.com/like',                     
           data: {url: window.location.href} , 
           success: function(data)             
           {
             //console.log(data)              
           }
       });
  });

  $('#btnDisLike').click(function(){
    $.ajax({                        
           type: "POST",                 
           url: 'https://fakenewsaintgood.herokuapp.com/disLike',                     
           data: {url: window.location.href} , 
           success: function(data)             
           {
             //console.log(data)              
           }
       });
  });


});

const url = window.location.href;
const hostName = window.location.host;

var root = 'https://fakenewsaintgood.herokuapp.com';

/*$.ajax({
  url: root + '/analysis',
  method: 'GET'
}).then(function(data) {
  console.log(data);
});

$.ajax('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  data: {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
  }
}).then(function(data) {
  console.log(data);
});
*/

$.ajax({                        
           type: "POST",                 
           url: 'https://fakenewsaintgood.herokuapp.com/analysis',                     
           data: {url: window.location.href} , 
           success: function(data)             
           {

  var data = JSON.parse(data)
  console.log(data.accuracy)
  var accuracy = data.accuracy*1;
  $('#fnaBottom').html(accuracy.toFixed(2)*100);
  $('#mensajeBox').append('<h1> Esta noticia es fiable en un '+accuracy.toFixed(2)*100+'% </h1>')
  $('#fnaBottom').css({height: accuracy*40+'vh'})
  //$('#fnaBottom').css({ top : 'calc(40vh - ' +data.accuracy*40+'vh)'});
  //$('#fnaBottom').css({ top : 'calc(40vh - ' +data.accuracy*40+'vh)'});
}
  
});


$.ajax({                        
           type: "POST",                 
           url: 'https://fakenewsaintgood.herokuapp.com/article',                     
           data: {url: window.location.href} , 
           success: function(data)             
           {
             //console.log(data)              
           }
       });








