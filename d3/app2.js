var data = [["A",0.012], ["B",-0.025], ["C",0.008], ["D",0.023], ["E",-0.009], ["F", 0.005]];


d3.select("#example")
  .datum(data)
    .call(columnChart()
      .width(960)
      .height(500)
      .x(function(d, i) { return d[0]; })
      .y(function(d, i) { return d[1]; }));