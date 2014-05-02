 var icmconfig = {
  //"crs": L.CRS.EPSG3857,
  "crs": L.CRS.EPSG4326,
  "center": {
      lat: 24.449696, //Approx Abu Dabi ,
      lng: 54.428580,
      zoom: 9
  },
  "beelden":[
        { beeld: 'summary', title: 'Current situation', timestamp: 0, beeldonderdeel: 
          [ {id:'situatie', title: 'Summary', isedit: false, zeker: true}
          ]}    
        ,{ beeld: 'meldingen', title: 'Reports', timestamp: 0, beeldonderdeel: 
          [ {title:'Timeline',id:'Tijdlijn', isedit: false, zeker: true},
            {title:'Notifications',id:'meldingen' , isedit: false, zeker: true},
            {title: 'Urgent', id:'acuut', isedit: false, zeker: true},
            {title: 'Local situation',id: 'spi', isedit: false, zeker: true} ,
            {title: 'Mitigations',id:'acties' , isedit: false, zeker: true}
        ]}
        ,{ beeld: 'wat', title: 'Population team', timestamp: 0, beeldonderdeel: 
          [ {title:'Notifications',id:'tijdlijn', isedit: false, zeker: true},
            {title:'Requests',id:'beeldvorming', isedit: false, zeker: true}
        ]}
        ,{ beeld: 'wot', title: 'Routing team', timestamp: 0, beeldonderdeel:
          [ {title:'Notifications',id:'tijdlijn', isedit: false, zeker: true},
            {title:'Requests',id:'beeldvorming', isedit: false, zeker: true}
        ]}        
        ,{ beeld: 'wbt', title: 'Shelter team', timestamp: 0, beeldonderdeel: 
          [ {title:'Notifications',id:'tijdlijn', isedit: false, zeker: true},
            {title:'Requests',id:'beeldvorming', isedit: false, zeker: true}
        ]}
        ,{ beeld: 'communicatie', title: 'Communication team', timestamp: 0, beeldonderdeel: 
          [ {title:'Core message',id:'kernboodschap', isedit: false, zeker: true},
            {title:'Environment',id:'omgevingsbeeld', isedit: false, zeker: true}
        ]}
   ],
   drawstyles:{
      linestyles:  [
        {stroke: '#000'},
        {stroke: '#f57900'},
        {stroke: '#204a87'},
        {stroke: '#cc0000'},
        {stroke: '#5c3566'},
        {stroke: '#4e9a06'}],
      polygonstyles: [
        {stroke: '#000'   ,fill: '#000'  },
        {stroke: '#f57900',fill: '#f57900'},
        {stroke: '#204a87',fill: '#204a87'},
        {stroke: '#cc0000',fill: '#cc0000'},
        {stroke: '#5c3566',fill: '#5c3566'},
        {stroke: '#4e9a06',fill: '#4e9a06'}],
      icontypes:[
         {"cat":"none", "text":"SW", "url":"mapicons/direction_downleft.png"}
        ,{"cat":"none", "text":"S","url":"mapicons/direction_down.png"}
        ,{"cat":"none", "text":"SE","url":"mapicons/direction_downright.png"}
        ,{"cat":"none", "text":"E","url":"mapicons/direction_left.png"}
        ,{"cat":"none", "text":"W","url":"mapicons/direction_right.png"}
        ,{"cat":"none", "text":"NW","url":"mapicons/direction_upleft.png"}
        ,{"cat":"none", "text":"N","url":"mapicons/direction_up.png"}
        ,{"cat":"none", "text":"NE","url":"mapicons/direction_upright.png"}
        ,{"cat":"none", "text":"Closed","url":"mapicons/accesdenied.png"}
        ,{"cat":"none", "text":"Attention!","url":"mapicons/caution.png"}
        ,{"cat":"none", "text":"Group transport","url":"mapicons/bus.png"}
        ,{"cat":"none", "text":"Parking","url":"mapicons/parkinggarage.png"}
        ,{"cat":"none", "text":"First aid","url":"mapicons/firstaid.png"}
        ,{"cat":"none", "text":"Emergency phone","url":"mapicons/emergencyphone.png"}
        ,{"cat":"none", "text":"Ambulance centre","url":"mapicons/ambulance.png"}
        ,{"cat":"none", "text":"Hospital","url":"mapicons/hospital-building.png"}
        ,{"cat":"none", "text":"Pharmacy","url":"mapicons/medicine.png"}
        ,{"cat":"none", "text":"School","url":"mapicons/school.png"}
        ,{"cat":"none", "text":"Big hall","url":"mapicons/communitycentre.png"}
        ,{"cat":"none", "text":"Senior site","url":"mapicons/seniorsite.png"}
        ,{"cat":"none", "text":"Residents","url":"mapicons/family.png"}
        ,{"cat":"none", "text":"Daycare","url":"mapicons/daycare.png"}
        ,{"cat":"none", "text":"Calamity","url":"mapicons/blast.png"}
        ,{"cat":"none", "text":"Deadly victems","url":"mapicons/skull.png"}
        ,{"cat":"none", "text":"Damaged building","url":"mapicons/earthquake-3.png"}
        ,{"cat":"none", "text":"Power outage","url":"mapicons/poweroutage.png"}
        ,{"cat":"none", "text":"Fire","url":"mapicons/fire.png"}
        ,{"cat":"none", "text":"Flood","url":"mapicons/flood.png"}
        ,{"cat":"none", "text":"Radio station","url":"mapicons/radio-station-2.png"}
        ,{"cat":"none", "text":"Muster point","url":"mapicons/regroup.png"}
        ,{"cat":"none", "text":"Network","url":"mapicons/wifi.png"}
        ,{"cat":"none", "text":"Group of people","url":"mapicons/group-2.png"}
        ,{"cat":"none", "text":"Firemen","url":"mapicons/firemen.png"}
        ,{"cat":"none", "text":"Police","url":"mapicons/police.png"}
        ,{"cat":"none", "text":"CCTV","url":"mapicons/cctv.png"}
        ,{"cat":"none", "text":"Municipal building","url":"mapicons/moderntower.png"}
        ,{"cat":"none", "text":"Comment","url":"mapicons/comment-map-icon.png"}
        ,{"cat":"none", "text":"All is fine..","url":"mapicons/smiley_happy.png"}
      ]
   },
  definedlayers:{
      //brt: {
      //    name: 'BRT',
      //    url: 'http://geodata.nationaalgeoregister.nl/tms/1.0.0/brtachtergrondkaart/{z}/{x}/{y}.png',
      //    type: 'xyz',
      //    layerOptions: {
      //        tms: true
      //    }
      //}
      //osm: {
      //      name: "Openstreetmap",
      //      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      //      type: 'xyz'
      //  },
      //osm_grey: {
      //    name: 'OSM grey',
      //    url: 'http://a.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
      //    type: 'xyz'
      //},
	  osm_wgs84: {
		name: 'Openstreetmap',
		url: 'http://maps.opengeo.org/geowebcache/service/wms',
		type: 'wms',
		layerOptions: {
			layers:'openstreetmap',
			format: 'image/png'
		}
	  },
	  "VAEBG1": {
		type: "dynamic",
		name: "Basemap (EN)",
		visible: false,
		url: "/service/abudhabi/rest/services/BaseMapEnglish/MapServer", 
		layerOptions: {"layers":"show:0", position: 'back'}
	  }
  },
  layers:{
    

	
	"VAE002": {type: "overlay", category: "Health facilities", layer: {type: "dynamic",visible: true,"name": "Hospitals", "url": "/service/abudhabi/rest/services/HealthMapService/MapServer", "layerOptions": {"layers":"show:1",position: 'back'}}},
	"VAE003": {type: "overlay", category: "Health facilities", layer: {type: "dynamic",visible: true,"name": "Polyclinics", "url": "/service/abudhabi/rest/services/HealthMapService/MapServer", "layerOptions": {"layers":"show:2",position: 'back'}}},
	"VAE004": {type: "overlay", category: "Health facilities", layer: {type: "dynamic",visible: true,"name": "Health Centers", "url": "/service/abudhabi/rest/services/HealthMapService/MapServer", "layerOptions": {"layers":"show:3",position: 'back'}}},
	"VAE005": {type: "overlay", category: "Health facilities", layer: {type: "dynamic",visible: true,"name": "Health Clinics", "url": "/service/abudhabi/rest/services/HealthMapService/MapServer", "layerOptions": {"layers":"show:4",position: 'back'}}},
	"VAE006": {type: "overlay", category: "Health facilities", layer: {type: "dynamic",visible: true,"name": "Pharmaceutical Entities", "url": "/service/abudhabi/rest/services/HealthMapService/MapServer", "layerOptions": {"layers":"show:5",position: 'back'}}},
	"VAE007": {type: "overlay", category: "Health facilities", layer: {type: "dynamic",visible: true,"name": "Provision of Health Service", "url": "/service/abudhabi/rest/services/HealthMapService/MapServer", "layerOptions": {"layers":"show:6",position: 'back'}}},
	
	"VAE009": {type: "overlay", category: "مدارس", layer: {type: "dynamic",visible: true,"name": "مدارس حكومية", "url": "/service/abudhabi/rest/services/EDLPublicDataArabic/MapServer", "layerOptions": {"layers":"show:15",position: 'back'}}},
	"VAE010": {type: "overlay", category: "مدارس", layer: {type: "dynamic",visible: true,"name": "مدارس خاصة", "url": "/service/abudhabi/rest/services/EDLPublicDataArabic/MapServer", "layerOptions": {"layers":"show:16",position: 'back'}}},
	//"VAE011": {type: "overlay", category: "Education", layer: {type: "dynamic",visible: true,"name": "Higher education", "url": "/service/abudhabi/rest/services/PublicData_WSD/MapServer", "layerOptions": {"layers":"show:11",position: 'back'}}},
	
	"VAE012": {type: "overlay", category: "Worship", layer: {type: "dynamic",visible: true,"name": "Mosque", "url": "/service/abudhabi/rest/services/CharityAndWorship/MapServer", "layerOptions": {"layers":"show:0",position: 'back'}}},
	
	//"VAE014": {type: "overlay", category: "Tourism", layer: {type: "dynamic",visible: true,"name": "Hotels", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:15",position: 'back'}}},
	
	//"VAE024": {type: "overlay", category: "Food", layer: {type: "dynamic",visible: true,"name": "Food supply Establishments", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:24",position: 'back'}}},
	
	"VAE027": {type: "overlay", category: "Weather", layer: {type: "dynamic",visible: true,"name": "MSL Pressure ", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:27",position: 'back'}}},
    "VAE028": {type: "overlay", category: "Weather", layer: {type: "dynamic",visible: true,"name": "Mean Temperature ", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:28",position: 'back'}}},
	"VAE029": {type: "overlay", category: "Weather", layer: {type: "dynamic",visible: true,"name": "Mean Relative Humidity ", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:29",position: 'back'}}},
	"VAE030": {type: "overlay", category: "Weather", layer: {type: "dynamic",visible: true,"name": "Mean Minimum Temperature", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:30",position: 'back'}}},
	"VAE031": {type: "overlay", category: "Weather", layer: {type: "dynamic",visible: true,"name": "Mean Maximum Temperature ", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:31",position: 'back'}}},
	"VAE032": {type: "overlay", category: "Weather", layer: {type: "dynamic",visible: true,"name": "Absolute Minimum Temperature ", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:32",position: 'back'}}},
	"VAE033": {type: "overlay", category: "Weather", layer: {type: "dynamic",visible: true,"name": "Absolute Maximum Temperature ", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:33",position: 'back'}}},
	"VAE035": {type: "overlay", category: "Environment", layer: {type: "dynamic",visible: true,"name": "Tide Stations", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:35",position: 'back'}}},
	"VAE036": {type: "overlay", category: "Environment", layer: {type: "dynamic",visible: true,"name": "Marine Site Data", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:36",position: 'back'}}},
	"VAE037": {type: "overlay", category: "Environment", layer: {type: "dynamic",visible: true,"name": "Fishing Landing Sites", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:37",position: 'back'}}},
	"VAE038": {type: "overlay", category: "Environment", layer: {type: "dynamic",visible: true,"name": "Dredged Channel", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:38",position: 'back'}}},
	"VAE039": {type: "overlay", category: "Environment", layer: {type: "dynamic",visible: true,"name": "Protected Areas", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:39",position: 'back'}}},
	"VAE040": {type: "overlay", category: "Environment", layer: {type: "dynamic",visible: true,"name": "Coastal Soils", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:40",position: 'back'}}},
	"VAE041": {type: "overlay", category: "Environment", layer: {type: "dynamic",visible: true,"name": "Geology", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:41",position: 'back'}}},
	"VAE042": {type: "overlay", category: "Weather", layer: {type: "dynamic",visible: true,"name": "Farms", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:42",position: 'back'}}},
	"VAE043": {type: "overlay", category: "Weather", layer: {type: "dynamic",visible: true,"name": "Agriculture", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:43",position: 'back'}}},
	"VAE044": {type: "overlay", category: "Weather", layer: {type: "dynamic",visible: true,"name": "Terrestrial Habitat", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:44",position: 'back'}}},
	"VAE046": {type: "overlay", category: "Planning", layer: {type: "dynamic",visible: true,"name": "Road Schemes", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:46",position: 'back'}}},
    "VAE047": {type: "overlay", category: "Planning", layer: {type: "dynamic",visible: true,"name": "Precincts", "url": "/service/abudhabi/rest/services/PublicData/MapServer", "layerOptions": {"layers":"show:47",position: 'back'}}},
	
    //,"nachtkaart": {"type": "baselayer", "category": "Achtergrond", "layer": {
    //      name: 'Grijstinten',
    //      url: 'http://services.geodan.nl/tms/1.0.0/nachtkaart_EPSG28992/{z}/{x}/{y}.png',
    //      type: 'xyz',
    //      visible: 'true',
    //      layerOptions: {
    //          tms: true
    //      }
    //  }
    //}
    //,"top10nl": {"type": "baselayer", "category": "Achtergrond", "layer": {
    //      name:  'Top10',
    //      url: 'http://services.geodan.nl/tms/1.0.0/topokaart_EPSG28992/{z}/{x}/{y}.png',
    //      type: 'xyz',
    //      visible: 'true',
    //      layerOptions:{
    //          tms:true
    //      }
    //  }
    //}
   } 
};
