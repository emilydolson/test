var svg = d3.select("body").append("svg")
var boundData = svg.selectAll("circle").data([10,20,30])
boundData.enter().append("circle").attr("cx", function(d){return d})
