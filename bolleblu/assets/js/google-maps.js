var initMap = function () {
	
    if (document.getElementById("bolle-blu-map") != null) {
		
		
        var e = {
            Default: 
			
			
			
			[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6195a0"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            },
            {
                "color": "#f5f5f2"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-3"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bae5ce"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fac9a9"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#787878"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#0a00ff"
            },
            {
                "saturation": "-77"
            },
            {
                "gamma": "0.57"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#43321e"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ff6c00"
            },
            {
                "lightness": "4"
            },
            {
                "gamma": "0.75"
            },
            {
                "saturation": "-68"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#eaf6f8"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c7eced"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-49"
            },
            {
                "saturation": "-53"
            },
            {
                "gamma": "0.79"
            }
        ]
    }
]
        
        };
		
		var map = document.querySelectorAll('#bolle-blu-map');
		map.forEach(function(element, index) {
            var t = element,
			
                l = t.getAttribute("data-latlng-1").split(","),
				 l2 = t.getAttribute("data-latlng-2").split(","),
                s = t.innerHTML,
                r = t.getAttribute("data-icon") ? t.getAttribute("data-icon") : "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png",
                y = t.getAttribute("data-zoom"),
                i = t.getAttribute("data-theme"),
                a = element,
                o = { zoom: 13, scrollwheel: t.getAttribute("data-scrollwheel"), center: new google.maps.LatLng(l[0], l[1]), styles: e[i] },
                n = new google.maps.Map(a, o),
                p = "" + s,
                f1 = new google.maps.InfoWindow({ content: '<h5>PRATELLO</h5><p>Via del Pratello, 97d, 40122 Bologna BO</p>' }),
				f2 = new google.maps.InfoWindow({ content: '<h5>BATTINDARNO</h5><p>Via Battindarno, 170C, 4133 Bologna</p>' }),
                m = new google.maps.Marker({
                    position: new google.maps.LatLng(l[0], l[1]),
                    icon: "" + r,
                    map: n,
                }); /*,polygon=new google.maps.Polygon({path: [new google.maps.LatLng(44.4913,11.3027),new google.maps.LatLng(44.47728,11.32167),new google.maps.LatLng(44.47293,11.3415),new google.maps.LatLng(44.47379,11.35935),new google.maps.LatLng(44.47452,11.36609),new google.maps.LatLng(44.47409,11.37383),new google.maps.LatLng(44.4744,11.38312),new google.maps.LatLng(44.47731,11.38999),new google.maps.LatLng(44.4864,11.40537),new google.maps.LatLng(44.49719,11.41307),new google.maps.LatLng(44.50994,11.41183),new google.maps.LatLng(44.51845,11.38287),new google.maps.LatLng(44.52194,11.36287),new google.maps.LatLng(44.51883,11.32347),new google.maps.LatLng(44.50514,11.30952)],strokeColor: '#FFdd00',strokeOpacity: 0.8,strokeWeight: 2,fillColor: '#FFdd00',fillOpacity: 0.35, map:n})*/
            m.addListener("click", function () {
                f1.open(n, m);
            });
			
			console.log(document.getElementById("marker-content-1"))
			
			n = new google.maps.Marker({
                    position: new google.maps.LatLng(l2[0], l2[1]),
                    icon: "" + r,
                    map: n,
                }); /*,polygon=new google.maps.Polygon({path: [new google.maps.LatLng(44.4913,11.3027),new google.maps.LatLng(44.47728,11.32167),new google.maps.LatLng(44.47293,11.3415),new google.maps.LatLng(44.47379,11.35935),new google.maps.LatLng(44.47452,11.36609),new google.maps.LatLng(44.47409,11.37383),new google.maps.LatLng(44.4744,11.38312),new google.maps.LatLng(44.47731,11.38999),new google.maps.LatLng(44.4864,11.40537),new google.maps.LatLng(44.49719,11.41307),new google.maps.LatLng(44.50994,11.41183),new google.maps.LatLng(44.51845,11.38287),new google.maps.LatLng(44.52194,11.36287),new google.maps.LatLng(44.51883,11.32347),new google.maps.LatLng(44.50514,11.30952)],strokeColor: '#FFdd00',strokeOpacity: 0.8,strokeWeight: 2,fillColor: '#FFdd00',fillOpacity: 0.35, map:n})*/
            n.addListener("click", function () {
                f2.open(n, n);
            });
			
        });
    }
};
