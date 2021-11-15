let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.90025, lng: -80.18620 },
    zoom: 18, 
    styles: 
    

[
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e5c163"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#c4c4c4"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e5c163"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            },
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
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e5c163"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#e5c163"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#575757"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#79ddd9"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#0039ff"
            },
            {
                "gamma": "1.56"
            },
            {
                "lightness": "4"
            },
            {
                "saturation": "85"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": "100"
            },
            {
                "lightness": "66"
            },
            {
                "gamma": "10.00"
            },
            {
                "weight": "0.01"
            },
            {
                "visibility": "on"
            },
            {
                "color": "#deff00"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2ff0ff"
            },
            {
                "lightness": 17
            },
            {
                "visibility": "on"
            }
        ]
    }
]

  });
   const Buhl = new google.maps.Marker({
    position: { lat: 39.89939357464301, lng: -80.18543844518477},
    map,
    title: "Buhl Hall",
    icon: "https://i.imgur.com/TEghm4j.png",
  });


 const pollockCoords = [
    { lat: 39.89932966350404, lng: -80.18516459443458 }, 
     { lat: 39.89932674703466, lng: -80.18474261889916 }, 
     { lat: 39.89918383988418, lng: -80.18474185858288 }, 
     { lat:39.89918675635962, lng: -80.18516611506715 }, 
    { lat: 39.89932966350404 , lng: -80.18516459443458}
  ];
  const pollockPolygon = new google.maps.Polygon({
    paths: pollockCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  pollockPolygon.setMap(map);

  const pollock = new google.maps.Marker({
  	position: { lat: 39.89925859807942, lng: -80.18495770119445},
  	map,
  	title: "pollock",
  	icon: "https://imgur.com/WNMJzfw.png",
  });
  const pollockWindow = new google.maps.InfoWindow({
    content: "This is Pollock Hall, an all girls dorm",
  });

  pollock.addListener("click", () => {
    pollockWindow.open({
      anchor: pollock,
      map,
      shouldFocus: false,
    });
});

   const GpacCoords = [
    { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801},
    ];

  const GpacCoordsPolygon = new google.maps.Polygon({
    paths: GpacCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  GpacCoordsPolygon.setMap(map);


  const Gpac = new google.maps.Marker({
  	position: { lat: 39.89992601467411, lng: -80.18786662066348 },
  	map,
  	title: "Gpac",
  	icon: "https://imgur.com/Emjw6Wr.png",
  });
  
  const GpacWindow = new google.maps.InfoWindow({
    content: "Gpac, home of the theater productions and musicals",
  });

  Gpac.addListener("click", () => {
    GpacWindow.open({
      anchor: Gpac,
      map,
      shouldFocus: false,
    });
});


const BuhlWindow = new google.maps.InfoWindow({
    content: "Welcome to Buhl Hall, the best building on campus. Home of the humanities. The 4th floor is devoted entirely to the Department of Communication",
  });

  Buhl.addListener("click", () => {
    BuhlWindow.open({
      anchor: Buhl,
      map,
      shouldFocus: false,
    });
  });

const stewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];
  // Construct the polygon.
  const stewartpolygon = new google.maps.Polygon({
    paths: stewartCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  stewartpolygon.setMap(map);

    const stewart = new google.maps.Marker({
  	position: { lat: 39.89796287272147, lng: -80.18662993777224 },
  	map,
  	title: "stewart",
  	icon: "https://imgur.com/uoD58st.png",
  });
  
  const stewartWindow = new google.maps.InfoWindow({
    content: "Stewart Hall, home of the sciences. This 5 floor building includes classrooms, a computer lab and science labs",
  });

  stewart.addListener("click", () => {
    stewartWindow.open({
      anchor: stewart,
      map,
      shouldFocus: false,
    });
});


const southCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  // Construct the polygon.
  const southpolygon = new google.maps.Polygon({
    paths: southCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  southpolygon.setMap(map);

  const south = new google.maps.Marker({
  	position: { lat: 39.90029600636697, lng:  -80.18593423723729 },
  	map,
  	title: "south",
  	icon: "https://imgur.com/D5kf5hn.png",
  });
  const southWindow = new google.maps.InfoWindow({
    content: "South, another girls dorm. 1 of 3 girl dorms in this area",
  });

  south.addListener("click", () => {
    southWindow.open({
      anchor: south,
      map,
      shouldFocus: false,
    });
});

const westCoords = [
    { lat: 39.90053787146326, lng: -80.18560984971823 },
    { lat: 39.90053787146326, lng: -80.18542477729457 },
    { lat: 39.900227082463, lng: -80.18542305089767 },
    { lat: 39.90022503189161, lng: -80.1856048100907 },
    { lat: 39.90053787146326, lng: -80.18560984971823 },
  ];
  // Construct the polygon.
  const westpolygon = new google.maps.Polygon({
    paths: westCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  westpolygon.setMap(map);

   const eastCoords = [
    { lat: 39.900556198377956, lng: -80.1864066888825 },
    { lat: 39.90055312253561, lng: -80.1862209202955 },
    { lat: 39.900233234177925, lng: -80.18622893908343 },
    { lat: 39.90023425946349, lng: -80.18641337120577 },
    { lat: 39.900556198377956, lng: -80.1864066888825 },
  ];
  // Construct the polygon.
  const eastpolygon = new google.maps.Polygon({
    paths: eastCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  eastpolygon.setMap(map);

const willisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 }
  ];
  // Construct the polygon.
  const willisonpolygon = new google.maps.Polygon({
    paths: willisonCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

const eberlyCoords = [

{ lat: 39.90005305490059, lng: -80.18549297214429 },
{ lat: 39.900042602452224, lng: -80.18519237546121 },
{ lat: 39.899704856856225, lng: -80.18517193829295 },
{ lat: 39.89971138966885, lng: -80.18550233917973 },
{ lat: 39.90005305490059, lng: -80.18549297214429 },
];

const eberlyPolygon = new google.maps.Polygon({
    paths: eberlyCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  eberlyPolygon.setMap(map);


   const eberly = new google.maps.Marker({
  	position: { lat: 39.89986424114842, lng: -80.18534362082669 },
  	map,
  	title: "eberly",
  	icon: "https://imgur.com/uoD58st.png",
  });
  
  const eberlyWindow = new google.maps.InfoWindow({
    content: "Welcome to Eberly Library, 3 floors of books, computers and study areas",
  });

  eberly.addListener("click", () => {
    eberlyWindow.open({
      anchor: eberly,
      map,
      shouldFocus: false,
    });
});


 const hannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

const hannaPolygon = new google.maps.Polygon({
    paths: hannaCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

    hannaPolygon.setMap(map);


  const hanna = new google.maps.Marker({
  	position: { lat: 39.89948112739136, lng: -80.18704499156493 },
  	map,
  	title: "hanna",
  	icon: "https://imgur.com/9C31KAi.png",
  });
  const hannaWindow = new google.maps.InfoWindow({
    content: "Hanna Hall, mostly used for business classes. Includes a trading room computer lab",
  });

  hanna.addListener("click", () => {
    hannaWindow.open({
      anchor: hanna,
      map,
      shouldFocus: false,
    });
});

const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  CREDPolygon.setMap(map);

   const CRED = new google.maps.Marker({
  	position: { lat: 39.898114950076426,  lng: -80.18623880820212 },
  	map,
  	title: "CRED",
  	icon: "https://imgur.com/yhqcyBw.png",
  });
  const CREDWindow = new google.maps.InfoWindow({
    content: "The CRED building houses multiple classes in different fields. Stands for Center for Research and Economic Development.",
  });

  CRED.addListener("click", () => {
    CREDWindow.open({
      anchor: CRED,
      map,
      shouldFocus: false,
    });
});

const theNest = [
    {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211}

  ];

    const nestPolygon = new google.maps.Polygon({
    paths: theNest,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  nestPolygon.setMap(map);

    const nest = new google.maps.Marker({
  	position: { lat: 39.89810894200556,  lng: -80.18539302601202 },
  	map,
  	title: "nest",
  	icon: "https://imgur.com/74AB0Rt.png",
  });
  const nestWindow = new google.maps.InfoWindow({
    content: "The Nest is the new campus bookstore.",
  });

  nest.addListener("click", () => {
    nestWindow.open({
      anchor: nest,
      map,
      shouldFocus: false,
    });
});

  

 const cjCoords = [
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    { lat: 39.90030229555674, lng: -80.18875312061515 },
    { lat: 39.900303838822865, lng: -80.1890005543931 },
    { lat: 39.90038357419121, lng: -80.18899988384086 },
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    ];
    const cjHouse = new google.maps.Polygon({
        paths: cjCoords,
        strokeColor: "#545454",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#2F4070",
        fillOpacity: 0.35,
    });
    cjHouse.setMap(map);

const chapelCoords = [
    { lat: 39.90094412190922, lng: -80.18730816171713 },
    { lat: 39.900937434485016, lng: -80.18702518866414  },
    { lat: 39.90050687827982 , lng: -80.18703994081373  },
    { lat: 39.90051099364375, lng: -80.18732090220995 },
    { lat: 39.90094412190922, lng: -80.18730816171713 }
    ];
    const chapelpolygon = new google.maps.Polygon({
    	paths: chapelCoords,
    	strokeColor: "#545454",
    	strokeOpacity: 0.8,
    	strokeWeight: 2,
    	fillColor: "#2F4070",
    	fillOpacity: 0.35,
    });
    	chapelpolygon.setMap(map);

const chapel = new google.maps.Marker({
  	position: { lat: 39.90069837514436,  lng: -80.18717856620542 },
  	map,
  	title: "chapel",
  	icon: "https://imgur.com/I5jIxt6.png",
  });
  const chapelWindow = new google.maps.InfoWindow({
    content: "Roberts Chapel, home of worship to students and community members. Chapel services are on Tuesdays at 11 am. It is one of the most photogenic buildings on campus and is frequently displayed on Waynesburg websites",
  });

  chapel.addListener("click", () => {
    chapelWindow.open({
      anchor: chapel,
      map,
      shouldFocus: false,
    });
});




const BuhlhallCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
];
const Buhlhall = new google.maps.Polygon({
	paths: BuhlhallCoords,
	strokeColor: "#545454",
	strokeOpacity: 0.8,
	strokeWeight: 3,
	fillColor: "#2F4070",
	fillOpacity: 0.40,
});
	Buhlhall.setMap(map);



const StoverCoords = [
    {lat: 39.899772227541916, lng: -80.18636360069222},
    {lat: 39.89980309309625, lng: -80.18636695345333},
    {lat: 39.89980309309625, lng: -80.18640517492993},
    {lat: 39.89999548807153, lng: -80.18639712830327},
    {lat: 39.89999548807153, lng: -80.18635823627444},
    {lat: 39.90002841122172, lng: -80.18635756572223},
    {lat: 39.90002326698055, lng: -80.18596864543396},
    {lat: 39.89976502557723, lng: -80.18597803316504},
    {lat: 39.899772227541916, lng: -80.18636360069222}
 ];
 const Stover = new google.maps.Polygon({
 	paths: StoverCoords,
 	strokeColor: "#FF0000",
 	strokeOpacity: 0.8,
 	strokeWeight: 3,
 	fillColor: "#c16c18",
 	fillOpacity: 0.40,
 });
 Stover.setMap(map);

const millerCoords = [
    { lat: 39.89939727765804, lng: -80.1877995788888}, 
    { lat: 39.89939419108494, lng: -80.18761718866978},
    { lat: 39.89937772935947, lng: -80.18761718866978},
    { lat: 39.89937515721452, lng: -80.18760713038564},
    { lat: 39.899367955208106, lng: -80.1876057892811},
    { lat: 39.89936744077903,  lng: -80.1874254107189},
    { lat: 39.89937515721452, lng: -80.1874227285098},
    { lat: 39.899376186072516, lng: -80.18741602298704},
    { lat: 39.89939933537334, lng: -80.18741535243477}, 
    { lat: 39.89939984980218, lng: -80.1872289389021},
    { lat: 39.89955932254984, lng: -80.18723229166346},
    { lat: 39.89956343797066, lng: -80.18743748065987},
    { lat: 39.899593274764335, lng: -80.18743748065987},
    { lat: 39.89959481804641, lng: -80.18759103713101},
    { lat: 39.8995618946879, lng: -80.18759304878785},
    { lat: 39.89956086583266, lng: -80.18779555557518},
    { lat: 39.89939727765804, lng: -80.1877995788888}
];
      const millerPolygon = new google.maps.Polygon({
    paths: millerCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
});
      millerPolygon.setMap(map);



      
}


 