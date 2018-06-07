function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17, center: {lat: 37.197, lng: 126.824}
        });

	setMarkers(map);
}

var carDirection = [
	['2017-11-09-22:21:50.2', 37.196677, 126.823680, 1],
	['2017-11-09-22:21:51.3', 37.196762, 126.823808, 2],
	['2017-11-09-22:21:52.3', 37.196836, 126.823930, 3],
	['2017-11-09-22:21:53.3', 37.196910, 126.824060, 4],
	['2017-11-09-22:21:54.4', 37.196993, 126.824209, 5],
	['2017-11-09-22:21:55.5', 37.197078, 126.824366, 6],
	['2017-11-09-22:21:56.6', 37.197165, 126.824525, 7],
	['2017-11-09-22:21:57.7', 37.197255, 126.824684, 8],
	['2017-11-09-22:21:58.7', 37.197340, 126.824830, 9]
];

function setMarkers(map) {
        var image = {
          url: 'images/icon_vehicle.png',
          size: new google.maps.Size(50, 50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 50)
        };
 
        var shape = {
          coords: [1, 1, 1, 50, 48, 50, 48, 1],
          type: 'poly'
        };
        for (var i = 0; i < carDirection.length; i++) {
          var dirC = carDirection[i];
          var marker = new google.maps.Marker({
            position: {lat: dirC[1], lng: dirC[2]},
            map: map,
            icon: image,
            shape: shape,
            title: dirC[0],
            zIndex: dirC[3]
          });
        }
}