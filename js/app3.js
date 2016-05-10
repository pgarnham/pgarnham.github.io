$(function () {
        
        Highcharts.setOptions({
        colors: ['#6B6161', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    });




     $('#container2').highcharts({
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


            plotLines: [{
                color: '#274C11',
                width: 2,
                value: 1,
            }]
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Personas',
            data: [5000, -390, 400]
         
        }]
    });
});