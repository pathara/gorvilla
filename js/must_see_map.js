
	(function(A) {
	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
			};

		})(Array.prototype);

		var
		mapObject,
		markers = [],
		markersData = {
			'Mustsee': [
			{
				type_point: 'Beachfront',
				location_latitude: 8.0032059,
				location_longitude: 98.2925702,
				map_image_url: 'img/map/bangtaos.jpg',
				rate: '36 Min | 24.5 km',
				name_point: 'BANG TAO BEACH',
				description_point: ' description point 001',
				get_directions_start_address: '',
				phone: '+111211121112',
				url_detail: 'florence-must-see-detail.html'
			},
			{
				type_point: 'Beachfront',
				location_latitude: 7.9758946,
				location_longitude: 98.2769385,
				map_image_url: 'img/map/surins.jpg',
				rate: '36 Min | 24.5 km',
				name_point: 'SURIN BEACH',
				description_point: '',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_detail: ''
			},
			{
				type_point: 'Beachfront',
				location_latitude: 7.956962,
				location_longitude: 98.283121,
				map_image_url: 'img/map/kamalas.jpg',
				rate: '36 Min | 24.5 km',
				name_point: 'KAMALA BEACH',
				description_point: 'Photo by govertvissers',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_detail: ''
			},
			{
				type_point: 'Entertainment',
				location_latitude: 7.956509,
				location_longitude: 98.287529,
				map_image_url: 'img/map/phuketfantaseas.jpg',
				rate: '36 Min | 24.5 km',
				name_point: 'PHUKET FANTASEA',
				description_point: 'The Ultimate Nighttime Cultural Theme Park',
				get_directions_start_address: '',
				phone: '+66 76 385 000',
				url_detail: 'www.phuket-fantasea.com'
			},
			{
				type_point: 'Beachfront',
				location_latitude: 7.896254,
				location_longitude: 98.295391,
				map_image_url: 'img/map/patongs.jpg',
				rate: '36 Min | 24.5 km',
				name_point: 'PATONG BEACH',
				description_point: 'Beach and Walking Street',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_detail: ''
			},
			{
				type_point: 'Beachfront',
				location_latitude: 7.896254,
				location_longitude: 98.295391,
				map_image_url: 'img/map/karons.jpg',
				rate: '36 Min | 24.5 km',
				name_point: 'Karon View Point',
				description_point: 'หาดกะรน',
				get_directions_start_address: '',
				Author: 'ADwarf@Wikicommons',
				url_detail: 'florence-must-see-detail.html'
			},
			{
				type_point: 'Cape',
				location_latitude: 43.769560,
				location_longitude: 11.255814,
				map_image_url: 'img/map/promtheps.jpg',
				rate: '36 Min | 24.5 km',
				name_point: 'PROMTHEP CAPE',
				description_point: 'แหลมพรหมเทพ',
				get_directions_start_address: '',
				Author: '@photographer.net _Sergei',
				url_detail: ''
			},
			{
				type_point: 'Airport',
				location_latitude: 8.1111004,
				location_longitude: 98.3042759,
				map_image_url: 'img/map/hkts.jpg',
				rate: '36 Min | 24.5 km',
				name_point: 'Phuket International Airport',
				description_point: 'ท่าอากาศยานนานาชาติภูเก็ต',
				get_directions_start_address: '',
				phone: '+3934245255',
				url_detail: ''
			}
			]
		};
			var mapOptions = {
				zoom: 12,
				center: new google.maps.LatLng(8.005907, 98.296803),
				mapTypeId: google.maps.MapTypeId.ROADMAP,

				mapTypeControl: false,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				panControl: false,
				panControlOptions: {
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
				scrollwheel: false,
				scaleControl: false,
				scaleControlOptions: {
					position: google.maps.ControlPosition.TOP_LEFT
				},
				streetViewControl: true,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
				styles: [
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    } ]
			};
			var
			marker;
			mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
			for (var key in markersData)
				markersData[key].forEach(function (item) {
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
						map: mapObject,
						icon: 'img/pins/' + key + '.png',
					});

					if ('undefined' === typeof markers[key])
						markers[key] = [];
					markers[key].push(marker);
					google.maps.event.addListener(marker, 'click', (function () {
      closeInfoBox();
      getInfoBox(item).open(mapObject, this);
      mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
     }));

	});
		function hideAllMarkers () {
			for (var key in markers)
				markers[key].forEach(function (marker) {
					marker.setMap(null);
				});
		};
		function closeInfoBox() {
			$('div.infoBox').remove();
		};

		function getInfoBox(item) {
			return new InfoBox({
				content:
				'<div class="marker_info" id="marker_info">' +
				'<img src="' + item.map_image_url + '" alt=""/>' +
				'<span class="boxdown">'+
					'<span class="infobox_rate">'+ item.rate +'</span>' +
					'<h3>'+ item.name_point +'</h3>' +
				'<em>'+ item.type_point +'</em>' +
				'<strong>'+ item.description_point +'</strong>' +
				'<a href="'+ item.url_detail + '" class=""></a>' +
				'<form action="http://maps.google.com/maps" method="get" target="_blank"><input name="saddr" value="'+ item.get_directions_start_address +'" type="hidden"><input type="hidden" name="daddr" value="'+ item.location_latitude +',' +item.location_longitude +'"><button type="submit" value="Get directions" class="btn_infobox_get_directions">Get directions</button></form>' +
					'<a href="tel://'+ item.phone +'" class="btn_infobox_phone">'+ item.phone +'</a>' +
					'</span>' +
				'</div>',
				disableAutoPan: false,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(10, 115),
				closeBoxMargin: '5px -28px 0 0',
				closeBoxURL: "img/close_infobox.png",
				isHidden: false,
				alignBottom: true,
				pane: 'floatPane',
				enableEventPropagation: true
			});
		};
		function onHtmlClick(location_type, key){
     google.maps.event.trigger(markers[location_type][key], "click");
}
