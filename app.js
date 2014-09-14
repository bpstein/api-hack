$(document).ready(function(){

  // Client information and API keys
  var instagram = {
    clientID: 'x',
    apiHost: 'https://api.instagram.com',
  }

  function imageLoad(){
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: instagram.apiHost + "/v1/tags/" + tag + "/media/recent/?client_id=" + instagram.clientID + "&count=12",
      data: {'client_id': instagram.clientID, 'max_tag_id': min,},
      success: function(image){
      }
    })
  }
});