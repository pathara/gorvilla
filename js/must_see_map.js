﻿
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
				rate: '5 Min | 50 m',
				name_point: 'BANG TAO BEACH',
				description_point: ' description point 001',
				get_directions_start_address: '',
				url_detail: 'florence-must-see-detail.html'
			},
			{
				type_point: 'Beachfront',
				location_latitude: 7.975473,
				location_longitude: 98.278466,
				map_image_url: 'img/map/surins.jpg',
				rate: '36 Min | 3.91 km',
				name_point: 'SURIN BEACH',
				description_point: '',
				get_directions_start_address: '',
				url_detail: ''
			},
			{
				type_point: 'Beachfront',
				location_latitude: 7.954913,
				location_longitude: 98.282687,
				map_image_url: 'img/map/kamalas.jpg',
				rate: '36 Min | 5.82 km',
				name_point: 'KAMALA BEACH',
				description_point: 'Photo by govertvissers',
				get_directions_start_address: '',
				url_detail: ''
			},
			{
				type_point: 'Entertainment',
				location_latitude: 7.956439,
				location_longitude: 98.287563,
				map_image_url: 'img/map/phuketfantaseas.jpg',
				rate: '36 Min | 5.6 km',
				name_point: 'PHUKET FANTASEA',
				description_point: 'The Ultimate Nighttime Cultural Theme Park',
				get_directions_start_address: '',
				phone: '+66 76 385 111',
				url_detail: 'www.phuket-fantasea.com'
			},
			{
				type_point: 'Beachfront',
				location_latitude: 7.896254,
				location_longitude: 98.295391,
				map_image_url: 'img/map/patongs.jpg',
				rate: '36 Min | 12.35 km',
				name_point: 'PATONG BEACH',
				description_point: 'Beach and Walking Street',
				get_directions_start_address: '',
				url_detail: ''
			},
			{
				type_point: 'Beachfront',
				location_latitude: 7.843533,
				location_longitude: 98.293962,
				map_image_url: 'img/map/karons.jpg',
				rate: '36 Min | 17.97 km',
				name_point: 'Karon View Point',
				description_point: 'หาดกะรน',
				get_directions_start_address: '',
				Author: 'ADwarf@Wikicommons',
				url_detail: 'florence-must-see-detail.html'
			},
			{
				type_point: 'Cape',
				location_latitude: 7.7589177,
				location_longitude: 98.3033572,
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
				phone: '+66-7632-7230-6',
				url_detail: ''
			},
			{
				type_point: 'Activity',
				location_latitude: 8.1033373,
				location_longitude: 98.3260403,
				map_image_url: 'img/map/golfs.jpg',
				rate: '28Min | 18.2 km',
				name_point: 'Blue Canyon Country Club',
				description_point: 'The legendary Blue Canyon Country Club in Phuket',
				get_directions_start_address: '',
				phone: '+6681-894-3815',
				url_detail: ''
			},
			{
				type_point: 'Landmark',
				location_latitude: 7.981082,
				location_longitude:  98.363887,
				map_image_url: 'img/map/monuments.jpg',
				rate: '20Min | 10.6 km',
				name_point: 'Two Heroines Monument',
				description_point: 'อนุสาวรีย์ท้าวเทพกระษัตรี ท้าวศรีสุนทร',
				get_directions_start_address: '',
				phone: '+6676-311-381',
				url_detail: ''
			},
			{
				type_point: 'Entertainment',
				location_latitude: 7.897236,
				location_longitude:  98.304554,
				map_image_url: 'img/map/patongboxings.jpg',
				rate: '35Min | 19.2 km',
				name_point: 'Patong Boxing Stadium Sainamyen',
				description_point: 'Real Muay Thai in Phuket',
				get_directions_start_address: '',
				phone: '+6684-249-5929',
				url_detail: ''
			},
			{
				type_point: 'Museum',
				location_latitude: 7.885009,
				location_longitude: 98.386672,
				map_image_url: 'img/map/thaihuas.jpg',
				rate: '46Min | 23.7 km',
				name_point: 'Thai Hua Museum',
				description_point: 'Museum in a 1934 building with galleries on the history of Chinese people in Phuket & a coffee shop.',
				get_directions_start_address: '',
				phone: '+6676-211-224',
				url_detail: ''
			},
			{
				type_point: 'Outdoor',
				location_latitude: 7.9245376,
				location_longitude: 98.3206849,
				map_image_url: 'img/map/flyinghanumans.jpg',
				rate: '48Min | 26.8 km',
				name_point: 'Flying Hanuman ',
				description_point: 'Multiple Ziplines through the jungle',
				get_directions_start_address: '',
				phone: '+6681-979-2332',
				url_detail: 'https://flyinghanuman.com/'
			}
		],'Default': [
			{
				type_point: 'Beachfront',
				location_latitude: 8.020476,
				location_longitude: 98.305505,
				map_image_url: 'img/map/gorvillas.jpg',
				rate: '0 Min | 0 m',
				name_point: 'GORVILLA',
				description_point: ' at Angsana Villa PHUKET',
				get_directions_start_address: '',
				phone: '+662-6423272',
				url_detail: ''
			}]
		};
			var mapOptions = {
				zoom: 11,
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
				pixelOffset: new google.maps.Size(25, 115),
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
