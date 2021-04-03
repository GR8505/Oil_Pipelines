// Add console.log to check to see if our code is working.
console.log("working");

// Create a map object with center and zoom level
let map = L.map('mapid').setView([30, -90], 3);

// Accessing map for oil pipeline json
let oilAccidentData = "https://raw.githubusercontent.com/GR8505/Oil_Pipelines/main/Data/pipeline3.json";

// Grabbing our GeoJSON data.
d3.json(oilAccidentData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.marker(latlng)
      .bindPopup("<h2>" + feature.properties.Acc_City + ", " + feature.properties.Acc_State + "</h2>")
    }
  }).addTo(map);
});

// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.name + "<h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//     }

//   }).addTo(map);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

//-------------------------------------------------------------
// Adding blip to map for SanFranAirport
// L.geoJSON(sanFranAirport, {
// 	onEachFeature: function(feature, layer) {
// 		console.log(layer);
// 		layer.bindPopup();
// 	}
// }).addTo(map);
//--------------------------------------------------------------


// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.name + "<h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//     }

//   }).addTo(map);


// The onEachFeature Function
// L.geoJson(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + feature.properties.faa + "<h2> <hr> <h3> Airport Name: " + feature.properties.name + "</h3>");
//     }
// }).addTo(map);

//--------------------------------------------------------------
// Adding a marker on map
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
//-------------------------------------------------------------


//-------------------------------------------------------------
// Adding a circle to a map
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
// 	color:"black",
// 	fillColor:'#ffffa1'
// }).addTo(map)
//-------------------------------------------------------------


//-------------------------------------------------------------
// Get data from cities.js
// let cityData = cities;
//-------------------------------------------------------------


//-------------------------------------------------------------
// Loop through the cities array and create one marker for each city
// cities.forEach(function(city) {
// 	console.log(city)
// 	L.circleMarker(city.location, {
// 		radius: city.population/100000
// 	})
// 	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
// 	.addTo(map);
// });
//------------------------------------------------------------


// Create a tile layer for the streets
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});


//-----------------------------------------------------------------
// Create a tile layer for the streets
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



// //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Create tile layer for the streets map background of the map
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	accessToken: API_KEY
// });

// // Create tile layer for the satellite streets view background of the map
// let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	accessToken: API_KEY
// });

// // Create tile layer for the dark view background of the map
// let dark= L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	accessToken: API_KEY
// });
// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
// 	center: [39.5, -98.5],
// 	zoom: 3,
// 	layers: [streets]
// });

// // Creating base layer that holds both maps
// let baseMaps = {
// 	"Streets": streets,
// 	"Satellite": satelliteStreets,
// 	"Dark": dark
// };
// //------------------------------------------------------------------------------------------------------------
// // Creating earthquake layer for the map
// let earthquakes = new L.layerGroup();

// // Creating tectonic plate layer for the map
// let plates = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// // Defining object that contains the earthquake overlays
// let overlays = {
// 	Earthquakes: earthquakes
// 	// Plates: plates
// };

// // Defining object that contains the tectonic plate overlays
// let tectonics = {
// 	Plates: plates
// };

// // Pass our map layers into our layers control and add the layers control to the map
// L.control.layers(baseMaps, overlays, tectonics).addTo(map);

// //----------------------------------------------------------------------------------------------------------
// // Grabbing GeJSON data for tectonic plates
// d3.json(plates).then(function(data) {
// 	console.log(data);
// 	L.geoJson(data, {
// 		color: "orange",
// 		weight: 3
// 	}).addTo(map);
// });

// //-----------------------------------------------------------------------------------------------------------
// // Grabbing GeoJSON data
// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
// 	console.log(data);
// 	// Style data
// 	function styleInfo(feature) {
// 		return {
// 		  opacity: 1,
// 		  fillOpacity: 1,
// 		  fillColor: getColor(feature.properties.mag),
// 		  color: "#000000",
// 		  radius: getRadius(feature.properties.mag),
// 		  stroke: true,
// 		  weight: 0.5
// 		};
// 	}

// 	// This getColor() function determines the color of the circle based on magnitude
// 	function getColor(magnitude) {
// 		if (magnitude > 5) {
// 		  return "#ea2c2c";
// 		}
// 		if (magnitude > 4) {
// 		  return "#ea822c";
// 		}
// 		if (magnitude > 3) {
// 		  return "#ee9c00";
// 		}
// 		if (magnitude > 2) {
// 		  return "#eecc00";
// 		}
// 		if (magnitude > 1) {
// 		  return "#d4ee00";
// 		}
// 		return "#98ee00";
// 	}


// 	function getRadius(magnitude) {
// 		if (magnitude === 0) {
// 			return 1;
// 		}
// 		return magnitude * 4;
// 	}


// 	//------------------------------------------------------------------------------------------------------------
// 	L.geoJson(data, {
// 		pointToLayer: function(feature, latlng) {
// 			console.log(data);
// 			return L.circleMarker(latlng);
// 		},
// 	// Setting the style for each circleMarker with styleInfo function
// 	style: styleInfo,
// 	// Creating popup for each circleMarker to display the magnitude and location of the earthquake
// 		onEachFeature: function(feature, layer) {
// 			layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
// 		}
// 	}).addTo(earthquakes);

// 	// Adding earthquake layer to map
// 	earthquakes.addTo(map);

// 	//-----------------------------------------------------------------------------------------------------------

// 	// Create a legend control object
// 	let legend = L.control({
// 		position: "bottomright"
// 	});
	  
// 	//Adding the details for the legend
// 	legend.onAdd = function() {
// 		let div = L.DomUtil.create("div", "info legend");
// 	// };

// 	// Creating earthquake magnitudes array
// 	const magnitudes = [0, 1, 2, 3, 4, 5];
// 	const colors = [
// 		"#98ee00",
// 		"#d4ee00",
// 		"#eecc00",
// 		"#ee9c00",
// 		"#ea2c2c"
// 	];

// 	// Looping through intervals to generate a label with a colored square for each interval
// 	for (var i = 0; i < magnitudes.length; i++) {
// 		console.log(colors[i]);
// 		div.innerHTML +=
// 		"<i style= 'background: " + colors[i] + " '></i> " +
// 		magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i +1] + "<br>" : "+" );
// 	}
// 	return div;
// };

// legend.addTo(map);

// });
// //------------------------------------------------------------------------------------------------------------------------