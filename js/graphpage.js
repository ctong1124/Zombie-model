



$( document ).ready(function() {
	//initial graph draw
    processData();


    $(".info").click(function(){
    	$(".pulldown").toggle("fast");
    	$(this).toggleClass("active");
    });


    $("#myform").on("submit", function(event){
    	event.preventDefault();

    	processData();
    	
    });

    // controlling test case transitions
    $(".test-cases .cases .case").click(function(){
    	var caseNum = $(this).attr('class').split(' ')[1];
		$(this).closest(".cases").fadeOut( "fast", function() {
			$(this).siblings('.case-descriptions').children("."+caseNum).fadeIn("fast");
		});
    });

    $(".test-cases .case-descriptions .back-arrow").click(function(){
		$(this).closest(".case").fadeOut( "fast", function() {
			$(this).closest('.case-descriptions').siblings(".cases").fadeIn("fast");
		});
    });


    // try this case1
    $(".test-cases .case-descriptions .case1 .try").click(function(){
		var h = parseFloat($(this).children(".var").html());
		console.log(h);

		$('body').animate({
		    scrollTop: $('#graph').position().top
		}, 'slow');


		document.querySelector('#h0o').value = h;

		d3.select("input#h0").transition().duration(2000)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, h);
		      return function(t) { this.value = i(t); };
		    });

		// var ids = ['#z0', '#a', '#b', '#c', '#d', '#e', '#it'];
		// var values = [1000, 0.5, 0.0001, 0.02, 0.1, 0.1, 40];
		// var max = 2000;
		// var min = 1000;
		// var thisid, thisvalue;

		// for (k = 0; k<ids.length; k++) {
		// 	if (ids[k] == '#it'){
		// 		document.querySelector(ids[k]).value = values[k];
		// 	}
		// 	else {
		// 		thisid = ids[k];
		// 		thisvalue = values[k];
		// 		console.log(thisid, thisvalue);
		// 		document.querySelector(thisid+"o").value = thisvalue;
		// 		console.log("before d3 change "+"input" + thisid);
		// 		d3.select("input" + thisid).transition().duration(2000)
		// 		    .tween("value", function() {
		// 		      var i = d3.interpolate(this.value, thisvalue) ;
		// 		      return function(t) { this.value = i(t); };
		// 		    });
		// 		console.log("after d3 change " + $(thisid).val());

		// 	}
		// }

		document.querySelector('#z0o').value = 1000;
		document.querySelector('#ao').value = 0.5;
		document.querySelector('#bo').value = 0.0001;
		document.querySelector('#co').value = 0.02;
		document.querySelector('#do').value = 0.1;
		document.querySelector('#eo').value = 0.1;
		document.querySelector('#it').value = 40;



		d3.select("input#z0").transition().duration(1500)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 1000);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#a").transition().duration(2000)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.5);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#b").transition().duration(1750)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.0001);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#c").transition().duration(1000)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.02);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#d").transition().duration(1250)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.1);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#e").transition().duration(1000)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.1);
		      return function(t) { this.value = i(t); };
		    });
		    
		setTimeout(
		  function() 
		  {	
		    processData();
		  }, 2000);

    });

	// try this case2
    $(".test-cases .case-descriptions .case2 .try").click(function(){
		var a = parseFloat($(this).children(".var").html());
		console.log(a);

		$('body').animate({
		    scrollTop: $('#graph').position().top
		}, 'slow');


		document.querySelector('#ao').value = a;

		d3.select("input#a").transition().duration(2000)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, a);
		      // return function(t) { this.value = i(t); };
		    });
		document.querySelector('#a').value = a;
		console.log(parseFloat($('#a').val()));


		document.querySelector('#h0o').value = 50;
		document.querySelector('#z0o').value = 1000;
		document.querySelector('#bo').value = 0.0001;
		document.querySelector('#co').value = 0.02;
		document.querySelector('#do').value = 0.1;
		document.querySelector('#eo').value = 0.1;
		document.querySelector('#it').value = 1000;



		d3.select("input#h0").transition().duration(1500)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 50);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#z0").transition().duration(1500)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 1000);
		      return function(t) { this.value = i(t); };
		    });


		d3.select("input#b").transition().duration(1750)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.0001);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#c").transition().duration(1000)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.02);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#d").transition().duration(2000)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.1);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#e").transition().duration(1200)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.1);
		      return function(t) { this.value = i(t); };
		    });
		    
		setTimeout(
		  function() 
		  {	
		    processData();
		  }, 2000);

    });

	// try this case3
    $(".test-cases .case-descriptions .case3 .try").click(function(){
		var d = parseFloat($(this).children(".var").html());
		console.log(d);

		$('body').animate({
		    scrollTop: $('#graph').position().top
		}, 'slow');


		document.querySelector('#do').value = d;

		d3.select("input#d").transition().duration(2000)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, d);
		      // return function(t) { this.value = i(t); };
		    });
		document.querySelector('#d').value = d;
		console.log(parseFloat($('#d').val()));


		document.querySelector('#h0o').value = 10000;
		document.querySelector('#z0o').value = 100;
		document.querySelector('#ao').value = 0.5;
		document.querySelector('#bo').value = 0.005;
		document.querySelector('#co').value = 0.002;
		document.querySelector('#eo').value = 0.001;
		document.querySelector('#it').value = 40;



		d3.select("input#h0").transition().duration(1500)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 10000);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#z0").transition().duration(1500)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 100);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#a").transition().duration(2000)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.5);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#b").transition().duration(1750)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.005);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#c").transition().duration(1000)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.002);
		      return function(t) { this.value = i(t); };
		    });

		d3.select("input#e").transition().duration(1200)
		    .tween("value", function() {
		      var i = d3.interpolate(this.value, 0.001);
		      return function(t) { this.value = i(t); };
		    });
		    
		setTimeout(
		  function() 
		  {	
		    processData();
		  }, 2000);

    });
	
});



//separate functions, graph drawing/d3 functions
function numberUpdate(val, id) {
	document.querySelector('#'+id+'o').value = val;
}

function rangeUpdate(val, id) {
	newid = id.slice(0, id.length-1);
	document.querySelector('#'+newid).value = val;
}

function processData() {
	hdata = [];
	zdata = [];

	var a, b, c, d, e, it;
	
	h0 = parseFloat($('#h0').val());
	z0 = parseFloat($('#z0').val());


	a = parseFloat($('#a').val());
	b = parseFloat($('#b').val());
	c = parseFloat($('#c').val());
	d = parseFloat($('#d').val());
	e = parseFloat($('#e').val());

	it = parseFloat($('#it').val());

	console.log(h0, z0, a, b, c, d, e);

	

	for (i = 0; i <= it; i++) {
		hdata.push(h0);
		zdata.push(z0);
		result = run_model(h0, z0, a, b, c, d, e);
		h0 = result[0];
		z0 = result[1];

	}

	draw(hdata, zdata);
}

var m, w, h;

function draw(hvalues, zvalues) {
	d3.select("#graph")
		.html("");

	

	// define dimensions of graph
	m = [50, 40, 50, 80]; // margins

	//small window, graph should be width
	if ($( window ).width()<700) {
		w = $( window ).width() - m[1] - m[3] -10
	}
	else {
		w = $( window ).width()*.66 - m[1] - m[3] -10; // width
	}
	
	h = window.innerHeight - m[0] - m[2] ; // height
	
	// X scale will fit all values from data[] within pixels 0-w
	var x = d3.scale.linear().domain([0, hvalues.length]).range([0, w]);
	
	// Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
	var max;
	var max_of_humans = Math.max.apply(Math, hvalues);
	var max_of_zombies = Math.max.apply(Math, zvalues);
	if (max_of_humans>max_of_zombies) {
		max = max_of_humans;
	}
	else {
		max = max_of_zombies;
	}
	
	var y = d3.scale.linear().domain([0, max]).range([h, 0]);
	

	// create a line function that can convert data[] into x and y points
	var line = d3.svg.line()
		// .interpolate("cardinal") 
		// assign the X function to plot our line as we wish
		.x(function(d,i) { 
			// return the X coordinate where we want to plot this datapoint
			return x(i); 
		})
		.y(function(d) { 
			// return the Y coordinate where we want to plot this datapoint
			return y(d); 
		})
		// Add an SVG element with the desired dimensions and margin.
		var graph = d3.select("#graph").append("svg:svg")
			.attr("width", w + m[1] + m[3])
			.attr("height", h + m[0] + m[2])
			.append("svg:g")
			.attr("transform", "translate(" + m[3] + "," + m[0] + ")");
		// create xAxis
		var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(true);
		// Add the x-axis.
		graph.append("svg:g")
		      .attr("class", "x axis")
		      .attr("transform", "translate(0," + h + ")")
		      .attr('fill', '#615F63')
		      .call(xAxis);
		// create left yAxis
		var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");
		// Add the y-axis to the left
		graph.append("svg:g")
		      .attr("class", "y axis")
		      .attr("transform", "translate(0,0)")
		      .attr('fill', '#615F63')
		      .call(yAxisLeft);
		
			// Add the line by appending an svg:path element with the data line we created above
		// do this AFTER the axes above so that the line is above the tick-lines
			graph.append("svg:path")
				.attr("d", line(hvalues))
				.attr("class", "humans");
			graph.append("svg:path")
				.attr("d", line(zvalues))
				.attr("class", "zombies");
			made_graph_already= 1;

			graph.append("svg:text")
			    .attr("class", "x label")
			    .attr("text-anchor", "end")
			    .attr("x", w/2)
			    .attr("y", h + 40)
			    .text("Weeks")
			    .attr('fill', 'white');

			graph.append("svg:text")
			    .attr("class", "y label")
			    .attr("text-anchor", "end")
			    .attr("x", -250)
			    .attr("y", -70)
			    .attr("dy", ".5em")
			    .text("Population")
			    .attr('fill', 'white')
			    .attr("transform", "rotate(-90)");
			    
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

//resize event 
d3.select(window).on('resize', processData);




// var hoverLineGroup = d3.select("g").append("g").attr("class", "hover-line");
// // add the line to the group
// var hoverLine = hoverLineGroup
// 		.append("svg:line")
// 			.attr("x1", 10).attr("x2", 10) // vertical line so same value on each
// 			.attr("y1", 0).attr("y2", h)
// 			.attr("fill", "green"); // top to bottom



// add the line to the group
// var hoverLine = d3.select("g")
// 	.append("line")
// 	.attr("class", "hover-line")
// 	.attr("x1", 10).attr("x2", 10) // vertical line so same value on each
// 	.attr("y1", 0).attr("y2", h)
// 	.attr("fill", "green"); // top to bottom

// console.log(d3.select("#graph"));

var vertical = d3.select("#graph").selectAll("path")
        .append("div")
        .attr("class", "remove")
        .style("position", "absolute")
        .style("z-index", "19")
        .style("width", "1px")
        .style("height", "380px")
        .style("top", "10px")
        .style("bottom", "30px")
        .style("left", "0px")
        .style("background", "yellow");

d3.select("#graph")
     .on("mousemove", function(){  
        mousex = d3.mouse(this);
        mousex = mousex[0] + 5;
        vertical.style("left", mousex + "px" )})
     .on("mouseover", function(){  
        mousex = d3.mouse(this);
        mousex = mousex[0] + 5;
        vertical.style("left", mousex + "px")});




function mousemove() {

	console.log(d3.mouse(this));
   /* var x0 = x.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;*/
    // focus.attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")");
    // focus.select("text").text(formatCurrency(d.close));
  }

  

// d3.select("svg").on("mousemove", mousemove); 


	

