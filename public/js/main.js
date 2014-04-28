
function init_map() {
  
  var styles = [
    {
      stylers: [
        { "saturation": -100 },
        { "lightness": -8 },
        { "gamma": 1.18 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 0 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var myOptions = {
    scrollwheel: false,
    zoom:16,
    center: new google.maps.LatLng(28.5430571,-81.3788427),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
  marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(28.5430571, -81.3788427)});

  infowindow = new google.maps.InfoWindow({
    content:" <strong><a href='https://www.google.com/maps/place/The+Woods/@28.543072,-81.378752,17z/data=!3m1!4b1!4m2!3m1!1s0x88e77afe9938bca3:0x2dc59ec7bbf1b74d'>Build Guild at The Woods</a></strong><br/>(above The Lodge)<br>49 N Orange Ave<br/>Downtown Orlando, FL"
  });

  map.setOptions({styles: styles})
  google.maps.event.addListener(marker, "click", function(){ infowindow.open(map,marker); });
  infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', init_map);

//map.setOptions({styles: styles});