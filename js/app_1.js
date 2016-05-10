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
            data: [2, -7, 10],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,5,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[-3,1,7],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[7,-7,3],
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
            data:[-7,6,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,9,-10],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,0,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[-2,1,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[1,5,-2],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,8,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,-2,-1],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,-5,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data: [2, -7, 10],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,5,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[-3,1,7],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[7,-7,3],
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
            data:[-7,6,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,9,-10],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,0,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[-2,1,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[1,5,-2],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,8,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,-2,-1],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,-5,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data: [2, -7, 10],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,5,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[-3,1,7],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[7,-7,3],
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
            data:[-7,6,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,9,-10],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,0,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[-2,1,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[1,5,-2],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,8,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,-2,-1],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,-5,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data: [2, -7, 10],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,5,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[-3,1,7],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[7,-7,3],
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
            data:[-7,6,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,9,-10],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,0,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[-2,1,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[1,5,-2],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,8,0],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,-2,-1],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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
            data:[3,-5,5],
            visible:true
        },
        {
            name:'Personas3',
            data:[7,-10,10],
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