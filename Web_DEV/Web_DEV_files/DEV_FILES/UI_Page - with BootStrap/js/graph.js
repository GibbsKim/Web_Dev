Highcharts.chart('container', {
    chart: {
        type: 'line',
        /*width: 600,*/
        /* height: (9 / 16 * 100) + '%' */ // 16:9 resolution matching
        height: 100 + '%'
    },
    title: {
        text: 'Test title'
    },
    subtitle: {
        text: 'Chart Test'
    },
    data: {
        /*csvURL: 'https://demo-live-data.highcharts.com/vs-load.csv'*/
        /*csvURL: 'http://localhost:8080/data/data.csv' // It is possible*/
        csvURL: window.location.origin + '/data/data.csv' // Also possible

    },
    yAxis: [{
        title: {
            text: null
        }
    }]
});