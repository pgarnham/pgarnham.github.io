
// -----------------------------------------------------------------------------------------------------------------
$(function () {
        
        Highcharts.setOptions({
        colors: ['#274C11', '#FFF', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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
            data: [2, -7, 10]
        },

        {
            name:'Personas2',
            data:[3,5,5],
            //visible:true
        }]

});

});
// ----------------------------------------------------------------------------------------------------------------------------------


