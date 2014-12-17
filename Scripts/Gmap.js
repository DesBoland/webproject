function initialize()
{
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions =
        {
          center: new google.maps.LatLng(53.387214,-6.348389),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
}
      google.maps.event.addDomListener(window, 'load', initialize);