var county_id = 0;
var rawData = [];

var width = 960,
    height = 500;

// var path = d3.geo.path();
var svg = d3.select("body").append("svg")
			.attr("width", width)
			.attr("height", height);

d3.json("js/us.json", function(error, topology) {
	// console.log(topology);
	rawData = topology;
});


d3.json("js/us.json", function(error, topology) {
	var featureCollection = topojson.feature(topology, topology.objects.counties);

	var center = d3.geo.centroid(featureCollection);
	var scale  = 150;
	var offset = [width/2, height/2];
	var proj = d3.geo.mercator().scale(scale).center(center)
	.translate(offset);

	// create the path
	var path = d3.geo.path().projection(proj);

	// using the path determine the bounds of the current map and use 
	// these to determine better values for the scale and translation
	var bounds  = path.bounds(featureCollection);
	var hscale  = scale*width  / (bounds[1][0] - bounds[0][0]);
	var vscale  = scale*height / (bounds[1][1] - bounds[0][1]);
	var scale   = (hscale < vscale) ? hscale : vscale;
	var offset  = [width - (bounds[0][0] + bounds[1][0])/2,
	height - (bounds[0][1] + bounds[1][1])/2];


	// new projection
	proj = d3.geo.mercator().center(center)
	.scale(scale).translate(offset);
	path = path.projection(proj);

	var paths = svg.selectAll("path")
	.data(featureCollection.features, function(d){
	return d.id;
	});

	// d3 type of projection
	proj = d3.geo.mercator(),
	// d3 path generator using this projection to create these paths

	proj = d3.geo.mercator().center(center)
	.scale(scale).translate(offset);
	path = path.projection(proj);


	// var paths = svg.selectAll("path")
	// .data(featureCollection.features, function(d){
	// 	return d.id;
	// });

	paths.enter().append("path")
	.attr("d", path)
	// .attr("fill", "blue")
	.on("mousedown", function(d){
		county_id = d.id;
		startModel(county_id);
		// console.log(d);
		// console.log(this);
		// county_id = d;
		// fill(county_id);
		console.log("in mousedown");
		console.log(this);
		d3.select(this).style("fill", "red");
		console.log("paths");
		console.log(paths);
		return county_id;

		
	});

	function fill(data) {
		// var ID = data.id;
		// paths.attr("fill", function(d){
		// 	if (d.id == data) {
		// 		return "red";
		// 	}
		// })
		var yo;
		paths.select(function(d) {
			if(d.id == data) {
				yo = d;
				return d;
			}
		});
		console.log("in fill");
		console.log(yo);
		// d3.select(yo).style("fill", "red");
	}
	console.log("fill is here");
	fill(35053); 	
	fill("35053");


	function startModel(origin) {
	    t = 0;
	    distances = window["distances"+ toString(origin)];
	    // walk 2mph, 12 hrs a day, 24 miles a day
	    // assume around 10 will walk in straight direction and end up in different county
	    walked=24;

	    var start;
    	paths.select(function(d) {
    		if(d.id == toString(origin)) {
    			start = d;
    			return start;
    		}
    	});
    	d3.select(start).style("fill", "red");



	    setInterval(function(){ 
	        for (var k in distances) {
	            if(Math.ceil(distances[k]/walked)) {
	            	var obj;
	            	paths.select(function(d) {
	            		if(d.id == k) {
	            			obj = d;
	            			return d;
	            		}
	            	});
	            	// printModel(obj);
	            	d3.select(obj).style("fill", "red");
	            }

	        }
	    }, 1000);

	}
	

	function printModel(_this) {
	    var pop = parseFloat(c_data[id]["population"]);
	    // console.log(pop);
	    it = 5;
	    var h0 = pop
	    var z0 = 10;
	    var i = 0;
	    setInterval(function(){ 
	        result = run_model(h0, z0, .1, .01, .02, 0, .019);
	        h0 = result[0];
	        z0 = result[1];

	        perc = (z0/pop);
	        color = "rgba(255, 0, 0," + perc + ")";
	        d3.select(_this).style("fill", color);
	        
	        
	        i++;
	        if (i==it) {
	            clearInterval();
	        }
	    }, 1000);

	}

	function run_model (h0, z0, a, b, c, d, e) {
	    h1 = h0 + (e*h0) - (c*h0) - (b * h0 * z0);
	    z1 = z0 + (1 - d)*(b*h0*z0) - (a*h0);


	    if (h1 < 1){
	        h1 = 0;
	    }
	    if (z1 < 1){
	        z1 = 0
	    }

	    return [h1, z1];
	}

});


// paths.attr("fill", function(d){
// 	return d.id === "BR" ? "#F0AE9C" : "#254152";
// });

// var points = [
// // longitude then laditude
// { "name" : "Boston", "coords" : [-71.0589, 42.3601]}
// ];

// var points = svg.selectAll("circle")
// .data(points, function(d){
// 	return d.name;
// });

// points.enter().append("circle")
// .attr("fill", "#FFDE08")
// .attr("r", 5)
// .attr("transform", function(d){
// 	return "translate(" + proj(d.coords) + ")";
// });




// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);

// d3.json("js/us.json", function(error, topology) {
// 	if (error) throw error;

// 	svg.append("path")
// 	  .datum(topojson.feature(topology, topology.objects.land))
// 	  .attr("d", path)
// 	  .attr("class", "land-boundary");

// 	svg.append("path")
// 	  .datum(topojson.feature(topology, topology.objects.counties, function(a, b) { return a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0); }))
// 	  .attr("d", path)
// 	  .attr("class", "county-boundary");

// 	svg.append("path")
// 	  .datum(topojson.feature(topology, topology.objects.states, function(a, b) { return a !== b; }))
// 	  .attr("d", path)
// 	  .attr("class", "state-boundary")
// 	  .on('mousedown', function (d) {
// 	  		console.log(d.id);
//             return d.id;
//         });

	// svg.append("g")
	//     .selectAll("path")
	//         .data(topojson.feature(topology, topology.objects.states).features)
	//     .enter().append("path")
	//         .attr("class", "state-boundary")
	//         .attr("d", path)
	//         // .style("fill", "red")
	//         .on('mousedown.log', function (d) {
	//             console.log(d.id);
	//         });


// });




// var width = 960,
//     height = 600;

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);

// var g = svg.append( "g" );

// var projection = d3.geo.albersUsa()
//     .scale(1280)
//     .translate([width / 2, height / 2]);

// var path = d3.geo.path()
//     .projection(projection);



// svg.append("path")
//       .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
//       .attr("class", "states")
//       .attr("d", path);


// d3.select(self.frameElement).style("height", height + "px");