(function(){
	
	var data = [20,30,70, 12];
	var svgWidth = 200;
  	var svgHeight = 500;
  	var barMargin = 5;
  	var barWidth = 4;

	var linearScale = d3.scaleLinear()
  					.domain([0, 100])
  					.range([0, svgHeight])

	var chart = d3.select("body")
					.append("svg").attr("class", "chart")
					.attr("width", svgWidth * data.length)
					.attr("height", svgHeight);

	chart.style("background-color", "green")

	chart.selectAll("rect").data(data).enter().append("rect")
	.attr("fill", "yellow")
	.attr("x", function(d,i){ return (i+1)*(barWidth + barMargin) })
	.attr("y", function(d){return svgHeight-linearScale(d)})
	.attr("width", barWidth)
	.attr("height", function(d){ return linearScale(d) });

})();