$(document).ready(function(){


		$("#america").click(function(){

			$("#america").hide("slow");
			$("#chil").show("slow");
			$(".grafico").show("slow");
			$("#volver").show("slow");
			$("#titulop").hide("slow");
			$(".trim").hide("slow");


			});

		$("#volver").click(function(){

			$("#america").show("slow");
			$(".trim").show("slow");
			$("#titulop").show("slow");
			$("#chil").hide("slow");
			$(".grafico").hide("slow");
			$("#volver").hide("slow");
			$("#ar").hide("slow");
			$("#per").hide("slow");
			$("#ur").hide("slow");
			$("#bra").hide("slow");
			$("#par").hide("slow");
			$("#bol").hide("slow");
			$("#ec").hide("slow");
			$("#col").hide("slow");
			$("#ven").hide("slow");
			$("#guy").hide("slow");
			$("#sur").hide("slow");
			$("#gua").hide("slow");
			$("#pan").hide("slow");
			$("#cos").hide("slow");
			$("#nic").hide("slow");
			$("#hon").hide("slow");
			$("#sal").hide("slow");
			$("#bel").hide("slow");
			$("#gua").hide("slow");
			$("#cub").hide("slow");
			$("#hai").hide("slow");
			$("#can").hide("slow");
			$("#mex").hide("slow");
			$("#rep").hide("slow");
			$("#bah").hide("slow");
			$("#us").hide("slow");
			});

		$("#canada").click(function(){

			$("#can").show("slow");

			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    });

 


    $('#container').highcharts({
        chart: {
            width: 500,
            height:200,
            type: 'column'

        },

        legend:{
            enabled:false,
        },

        labels: {
                enabled:false
            },
        title: {
            text: ' '
        },
        xAxis: {
            categories: ['2013', '2014', '2015'],
            visible:false,

        },

        yAxis: {

            visible: true,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
        series: [{
            name:'Personas2',
            data: [2, -7, 10],
            visible:true
        },

        {
            name:'Personas2',
            data:[3,5,5],
            visible:false
        },
        { 
            name:'Personas3',
            data:[7,-7,3],
            visible:false
        }]






});

});
		});

		$("#usa").click(function(){

			$("#us").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    });




    $('#container').highcharts({
    	chart: {
            width: 500,
            height:200,
            type: 'column'

        },

        legend:{
            enabled:false,
        },

        labels: {
                enabled:false
            },
        title: {
            text: ' '
        },
        xAxis: {
            categories: ['2013', '2014', '2015'],
            visible:false,

        },

        yAxis: {

            visible: true,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
    
        series: [{
            name:'Personas2',
            data: [2, -7, 10],
            visible:false
        },

        {
            name:'Personas2',
            data:[3,5,5],
            visible:false
        },
        { 
            name:'Personas3',
            data:[7,-7,3],
            visible:true
        }]

});

});
		});

		$("#bolivia").click(function(){

			$("#bol").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    });




    $('#container').highcharts({
    	chart: {
            width: 500,
            height:200,
            type: 'column'

        },

        legend:{
            enabled:false,
        },

        labels: {
                enabled:false
            },
        title: {
            text: ' '
        },
        xAxis: {
            categories: ['2013', '2014', '2015'],
            visible:false,

        },

        yAxis: {

            visible: true,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
    
        series: [{
            name:'Personas2',
            data: [2, -7, 10],
            visible:false
        },

        {
            name:'Personas2',
            data:[3,5,5],
            visible:true
        },
        { 
            name:'Personas3',
            data:[7,-7,3],
            visible:false
        }]
			
			
		});

		$("#peru").click(function(){

			$("#per").show("slow");
		});

		$("#argentina").click(function(){

			$("#ar").show("slow");
		});

		$("#brazil").click(function(){

			$("#bra").show("slow");
		});

		$("#uruguay").click(function(){

			$("#ur").show("slow");
		});

		$("#paraguay").click(function(){

			$("#par").show("slow");
		});

		$("#ecuador").click(function(){

			$("#ec").show("slow");
		});

		$("#colombia").click(function(){

			$("#col").show("slow");
		});

		$("#venezuela").click(function(){

			$("#ven").show("slow");
		});

		$("#guyana").click(function(){

			$("#guy").show("slow");
		});

		$("#surinam").click(function(){

			$("#sur").show("slow");
		});

		$("#guayana_francesa").click(function(){

			$("#gua").show("slow");
		});

		$("#panama").click(function(){

			$("#pan").show("slow");
		});

		$("#costa_rica").click(function(){

			$("#cos").show("slow");
		});

		$("#nicaragua").click(function(){

			$("#nic").show("slow");
		});

		$("#honduras").click(function(){

			$("#hon").show("slow");
		});

		$("#salvador").click(function(){

			$("#sal").show("slow");
		});

		$("#belice").click(function(){

			$("#bel").show("slow");
		});

		$("#guatemala").click(function(){

			$("#gua").show("slow");
		});

		$("#cuba").click(function(){

			$("#cub").show("slow");
		});

		$("#haiti").click(function(){

			$("#hai").show("slow");
		});

		$("#mexico").click(function(){

			$("#mex").show("slow");
		});

		$("#republica_dominicana").click(function(){

			$("#rep").show("slow");
		});

		$("#bahamas").click(function(){

			$("#bah").show("slow");
		});

});