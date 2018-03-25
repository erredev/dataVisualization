(function(){
	
	var data = [20,30,70, 12];
	const SVG_WIDTH = 200;
  	const SVG_HEIGHT = 500;
  	const BAR_MARGIN = 10;
  	const BAR_WIDTH = 20;
  	const ANIMATION_DURATION = 300;

	var linearScale = d3.scaleLinear()
  					.domain([0, 100])
  					.range([0, SVG_HEIGHT])

	var chart = d3.select("body")
					.append("svg").attr("class", "chart")
					.attr("width", SVG_WIDTH * data.length)
					.attr("height", SVG_HEIGHT);

	chart.style("background-color", "green")

	chart.selectAll("rect").data(data).enter().append("rect")
	.attr("fill", "yellow")
	.attr("x", function(d,i){ return (i+1)*(BAR_WIDTH + BAR_MARGIN) })
	.attr("y", function(d){return SVG_HEIGHT-linearScale(d)})
	.attr("width", BAR_WIDTH)
	.attr("height", function(d){ return linearScale(d) })
	.on("mouseover", function(){
		d3.select(this).transition().duration(ANIMATION_DURATION)
			.style("cursor", "pointer").attr("fill", "orange")
			.attr("width", BAR_WIDTH + 4 )
			.attr( "transform", "translate(-1, 0)" )
	})
	.on("mouseout", function(){
		d3.select(this).transition().duration(ANIMATION_DURATION)
			.style("cursor", "default").attr("fill", "yellow")
			.attr("width", BAR_WIDTH)
			.attr( "transform", "translate(+1, 0)" )
	})

})();