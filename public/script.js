

$('a.nav-link').on('hidden.bs.tab', function (e) {
   if($(e.target).attr("href")  === "#v-pills-profile"){
      $("video").get(0).play();
   }
   // newly activated tab
  e.relatedTarget // previous active tab
})

$(document).ready(function(){
  $("video").attr("autoplay","autoplay" )
})