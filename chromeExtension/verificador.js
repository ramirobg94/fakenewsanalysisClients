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

$('#btnLike').mouseover(function(){
  $('#btnLike').css( 'background', 'rgb(56, 145, 255)');
})

$('#btnDisLike').mouseover(function(){
  $('#btnDisLike').css( 'background', 'rgb(56, 145, 255)');
})


$('#btnLike').mouseout(function(){
  $('#btnLike').css( 'background', '#7db7ff');
})

$('#btnDisLike').mouseout(function(){
  $('#btnDisLike').css( 'background', '#7db7ff');
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
  var accuracy = Math.floor(data.accuracy*100);
  $('#fnaBottom').html(accuracy+'%');
  $('#mensajeBox').append('<h1> Esta noticia es fiable en un '+accuracy+'% </h1>')
  $('#fnaBottom').css({height: data.accuracy*40+'vh'})
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








