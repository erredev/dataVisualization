(function(){
	/*var scale = d3.scale.linear().domain([0,42]).range([0,30]);
	d3.selectAll("#sampleSVGId").style("background-color", "red");
	d3.select("body").style("background-color", "yellow");

	// associa un data ad ogni tag <circle> disponibile
	var p = d3.select("body")
  		.selectAll("circle")
  		.data([4, 8, 15, 16, 23, 42])
    	.text(function(d) { return d; });



    // crea ed aggiungi elementi <circle> fino a raggiungere il numero dei data
    	p.enter().append("circle")
    .text(function(d) { return d; });

    // rimuovi eventuali <circle> superflui rispetto all'array data
    	p.exit().remove()

    	d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * scale); });

    d3.select("body").transition().duration(7500).style("background-color", "green").transition().duration(1500).style("background-color", "orange");
	*/

	var data = [20,30,70, 12];
var w = 200;
  var h = 500;
  var margin = 5;
  var barWidth = 4;

	var linearScale = d3.scaleLinear()
  					.domain([0, 100])
  					.range([0, h])


  

	var chart = d3.select("body")
					.append("svg").attr("class", "chart")
					.attr("width", w * data.length)
					.attr("height", h);

	chart.style("background-color", "green")

	chart.selectAll("rect").data(data).enter().append("rect")
	.attr("fill", "yellow")
	.attr("x", function(d,i){ return (i+1)*(barWidth + margin) })
	.attr("y", function(d){return h-linearScale(d)})
	.attr("width", barWidth)
	.attr("height", function(d){ return linearScale(d) });
	/*var data = [{x: 100, y: 100}, {x: 200, y: 200}, {x: 300, y: 300}]
	
	var svg = d3.select(document.getElementById('sampleSVGId')),
    circle = svg.selectAll('circle');

	for(var i=0; i< data.length; i++){
	    svg.append("circle")
	        .attr("cx", function(data) { return data[i].x; })
	        .attr("cy", function(data) { return data[i].y; })
	        .attr("r", 2.5);
	}*/
})();