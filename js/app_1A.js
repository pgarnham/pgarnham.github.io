$(document).ready(function(){


    $(".bt1").click(function(){




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
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
        series: [{
            name:'personas2',
            data: [-13,-20,9],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-20,20],
            visible:true
        }]






});

});
		});

		$("#usa").click(function(){

			$("#us").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-2,-4,28],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-28,28],
            visible:true
        }]

});

});
		});

		$("#bolivia").click(function(){

			$("#bol").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[8,26,7],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-26,26],
            visible:true
        }]

});

});
			
			
		});

		$("#peru").click(function(){

			$("#per").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
    
        series: [{
            name:'Personas3',
            data:[2,7,16],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-20,20],
            visible:true
        }]

});

});
		});

		$("#argentina").click(function(){

			$("#ar").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-6,8,-1],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-8,8],
            visible:true
        }]

});

});
		});

		$("#brazil").click(function(){

			$("#bra").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[11,-15,37],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-37,37],
            visible:true
        }]

});

});
		});

		$("#uruguay").click(function(){

			$("#ur").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-24,7,-11],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-24,24],
            visible:true
        }]

});

});
		});

		$("#paraguay").click(function(){

			$("#par").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-13,9,26],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-39,39],
            visible:true
        }]

});

});
		});

		$("#ecuador").click(function(){

			$("#ec").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-18,4,-26],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-26,26],
            visible:true
        }]

});

});
		});

		$("#colombia").click(function(){

			$("#col").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[21,2,50],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-50,50],
            visible:true
        }]

});

});
		});

		$("#venezuela").click(function(){

			$("#ven").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[13,-30,-76],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-81,81],
            visible:true
        }]

});

});
		});

		$("#guyana").click(function(){

			$("#guy").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#surinam").click(function(){

			$("#sur").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#guayana_francesa").click(function(){

			$("#gua").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#panama").click(function(){

			$("#pan").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#costa_rica").click(function(){

			$("#cos").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#nicaragua").click(function(){

			$("#nic").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#honduras").click(function(){

			$("#hon").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#salvador").click(function(){

			$("#sal").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#belice").click(function(){

			$("#bel").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#guatemala").click(function(){

			$("#gua").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#cuba").click(function(){

			$("#cub").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#haiti").click(function(){

			$("#hai").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#mexico").click(function(){

			$("#mex").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[3,2,-13],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-13,13],
            visible:true
        }]

});

});
		});

		$("#republica_dominicana").click(function(){

			$("#rep").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

		$("#bahamas").click(function(){

			$("#bah").show("slow");
			$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
		});

});

$(".bt2").click(function(){




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
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
        series: [{
            name:'personas2',
            data: [-55,2,4],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-55,55],
            visible:true
        }]






});

});
        });

        $("#usa").click(function(){

            $("#us").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[6,7,25],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-25,25],
            visible:true
        }]

});

});
        });

        $("#bolivia").click(function(){

            $("#bol").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-2,15,-1],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-15,15],
            visible:true
        }]

});

});
            
            
        });

        $("#peru").click(function(){

            $("#per").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
    
        series: [{
            name:'Personas3',
            data:[10,-2,21],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-21,21],
            visible:true
        }]

});

});
        });

        $("#argentina").click(function(){

            $("#ar").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-1,-1,6],
            visible:true
        },
        {
            name:'Personas3',
            data:[1,-6,6],
            visible:true
        }]

});

});
        });

        $("#brazil").click(function(){

            $("#bra").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-1,17,9],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-17,17],
            visible:true
        }]

});

});
        });

        $("#uruguay").click(function(){

            $("#ur").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-49,5,19],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-49,49],
            visible:true
        }]

});

});
        });

        $("#paraguay").click(function(){

            $("#par").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[1,-9,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-22,22],
            visible:true
        }]

});

});
        });

        $("#ecuador").click(function(){

            $("#ec").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-15,20,-31],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-31,31],
            visible:true
        }]

});

});
        });

        $("#colombia").click(function(){

            $("#col").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[24,-6,88],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-88,88],
            visible:true
        }]

});

});
        });

        $("#venezuela").click(function(){

            $("#ven").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[7,-31,-60],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-60,60],
            visible:true
        }]

});

});
        });

        $("#guyana").click(function(){

            $("#guy").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#surinam").click(function(){

            $("#sur").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#guayana_francesa").click(function(){

            $("#gua").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#panama").click(function(){

            $("#pan").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#costa_rica").click(function(){

            $("#cos").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#nicaragua").click(function(){

            $("#nic").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#honduras").click(function(){

            $("#hon").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#salvador").click(function(){

            $("#sal").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#belice").click(function(){

            $("#bel").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#guatemala").click(function(){

            $("#gua").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#cuba").click(function(){

            $("#cub").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#haiti").click(function(){

            $("#hai").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#mexico").click(function(){

            $("#mex").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-27,1,32],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-32,32],
            visible:true
        }]

});

});
        });

        $("#republica_dominicana").click(function(){

            $("#rep").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#bahamas").click(function(){

            $("#bah").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

});

$(".bt3").click(function(){




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
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
        series: [{
            name:'personas2',
            data: [-48,-6,1],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-57,57],
            visible:true
        }]






});

});
        });

        $("#usa").click(function(){

            $("#us").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[4,8,35],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-35,35],
            visible:true
        }]

});

});
        });

        $("#bolivia").click(function(){

            $("#bol").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[11,15,-1],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-15,15],
            visible:true
        }]

});

});
            
            
        });

        $("#peru").click(function(){

            $("#per").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
    
        series: [{
            name:'Personas3',
            data:[11,5,15],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-18,18],
            visible:true
        }]

});

});
        });

        $("#argentina").click(function(){

            $("#ar").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[6,-4,17],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-17,17],
            visible:true
        }]

});

});
        });

        $("#brazil").click(function(){

            $("#bra").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-11,32,10],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-39,39],
            visible:true
        }]

});

});
        });

        $("#uruguay").click(function(){

            $("#ur").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-25,-5,2],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-32,32],
            visible:true
        }]

});

});
        });

        $("#paraguay").click(function(){

            $("#par").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-17,55,-9],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-55,55],
            visible:true
        }]

});

});
        });

        $("#ecuador").click(function(){

            $("#ec").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-3,31,-42],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-42,42],
            visible:true
        }]

});

});
        });

        $("#colombia").click(function(){

            $("#col").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[23,12,52],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-52,52],
            visible:true
        }]

});

});
        });

        $("#venezuela").click(function(){

            $("#ven").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[16,-69,-50],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-81,81],
            visible:true
        }]

});

});
        });

        $("#guyana").click(function(){

            $("#guy").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#surinam").click(function(){

            $("#sur").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#guayana_francesa").click(function(){

            $("#gua").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#panama").click(function(){

            $("#pan").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#costa_rica").click(function(){

            $("#cos").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#nicaragua").click(function(){

            $("#nic").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#honduras").click(function(){

            $("#hon").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#salvador").click(function(){

            $("#sal").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#belice").click(function(){

            $("#bel").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#guatemala").click(function(){

            $("#gua").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#cuba").click(function(){

            $("#cub").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#haiti").click(function(){

            $("#hai").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#mexico").click(function(){

            $("#mex").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-22,17,14],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-23,23],
            visible:true
        }]

});

});
        });

        $("#republica_dominicana").click(function(){

            $("#rep").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#bahamas").click(function(){

            $("#bah").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

});

$(".bt4").click(function(){




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
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
        series: [{
            name:'personas2',
            data: [-46,3,4],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-46,46],
            visible:true
        }]






});

});
        });

        $("#usa").click(function(){

            $("#us").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-3,11,29],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-30,30],
            visible:true
        }]

});

});
        });

        $("#bolivia").click(function(){

            $("#bol").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-9,7,-19],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-19,19],
            visible:true
        }]

});

});
            
            
        });

        $("#peru").click(function(){

            $("#per").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
            gridLineColor: 'white',

            title: {
                text:false,
            },

        },
        credits: {
            enabled: false
        },
    
        series: [{
            name:'Personas3',
            data:[3,2,26],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-26,26],
            visible:true
        }]

});

});
        });

        $("#argentina").click(function(){

            $("#ar").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[10,2,17],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-17,17],
            visible:true
        }]

});

});
        });

        $("#brazil").click(function(){

            $("#bra").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-3,33,8],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-35,35],
            visible:true
        }]

});

});
        });

        $("#uruguay").click(function(){

            $("#ur").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-44,8,22],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-44,44],
            visible:true
        }]

});

});
        });

        $("#paraguay").click(function(){

            $("#par").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-6,51,-8],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-51,51],
            visible:true
        }]

});

});
        });

        $("#ecuador").click(function(){

            $("#ec").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-15,44,-45],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-45,45],
            visible:true
        }]

});

});
        });

        $("#colombia").click(function(){

            $("#col").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[26,8,73],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-73,73],
            visible:true
        }]

});

});
        });

        $("#venezuela").click(function(){

            $("#ven").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[21,-70,-75],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-75,75],
            visible:true
        }]

});

});
        });

        $("#guyana").click(function(){

            $("#guy").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#surinam").click(function(){

            $("#sur").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#guayana_francesa").click(function(){

            $("#gua").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#panama").click(function(){

            $("#pan").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#costa_rica").click(function(){

            $("#cos").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#nicaragua").click(function(){

            $("#nic").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#honduras").click(function(){

            $("#hon").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#salvador").click(function(){

            $("#sal").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#belice").click(function(){

            $("#bel").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#guatemala").click(function(){

            $("#gua").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#cuba").click(function(){

            $("#cub").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#haiti").click(function(){

            $("#hai").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#mexico").click(function(){

            $("#mex").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[-19,3,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-29,29],
            visible:true
        }]

});

});
        });

        $("#republica_dominicana").click(function(){

            $("#rep").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

        $("#bahamas").click(function(){

            $("#bah").show("slow");
            $(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFFFFF', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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

            visible: false,
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
            data:[0,0,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[0,0,0],
            visible:true
        }]

});

});
        });

});

  });