
$(window).load(function(){
jQuery('#show1Topic').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated flash',
           offset: 200
           });

jQuery('#show2Topic').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated flash',
           offset: 200
           });

jQuery('#show4Topic').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated flash',
           offset: 200
           });

jQuery('#show3Topic').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated flash',
           offset: 200
           });

jQuery('.show2').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated slideInUp',
           offset: 200
         });

jQuery('.show1').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated zoomIn',
           offset: 200
           });

jQuery('.show3').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated zoomIn',
           offset: 200
           });

jQuery('.show4').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated slideInUp',
           offset: 200
           });


var count=1;
var i=1;
var request = new XMLHttpRequest();
request.open('GET', "https://api.trakt.tv/shows/trending");
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('trakt-api-version', '2');
request.setRequestHeader('trakt-api-key', '468a92c26d3411be7886881b7f40afea47288963a91d9c5a0f43257521ceab74');

request.onreadystatechange = function () {
if (this.readyState === 4) {
  console.log('Status:', this.status);
  console.log('Headers:', this.getAllResponseHeaders());
  var data=$.parseJSON(this.responseText);
  console.log(data);
 

    var imdb=getImages(data[count]['show']['ids']['imdb']);
    console.log("this is data at 0"+imdb);
    var slug=data[0]['show']['ids']['slug'];
    var urll = "https://www.themoviedb.org/tv/" + data[0].show.ids.tmdb+ "-"+slug;
  $.each(data[1]['show']['ids'], function(key, value ) {
       console.log("value"+value);
            if(count<5)
            {
              
            }
            count++;
            });


};
};
request.send();

function getImages(imdb)
{
 var count=1;
var request = new XMLHttpRequest();
request.open('GET', "https://api.trakt.tv/search/imdb/"+imdb+"?extended=images");
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('trakt-api-version', '2');
request.setRequestHeader('trakt-api-key', '468a92c26d3411be7886881b7f40afea47288963a91d9c5a0f43257521ceab74');
request.onreadystatechange = function () {
if (this.readyState === 4) {
  console.log('Status:', this.status);
  console.log('Headers:', this.getAllResponseHeaders());
  var data=$.parseJSON(this.responseText);
  console.log("data2"+data);
   $.each(data[0]['show'], function(key, value ) {
       console.log("value"+value);
            if(count<5)
            {
               var uri=data[1]['show'][0]['images']['fanart']['thumb'];
               console.log("mmmmm"+uri);
            }
            count++;
            });

  return uri
   
}
};
request.send();

};


});









