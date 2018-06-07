function Highcharts_graph() {
  /** Uppers are functions for Map **/
  /** Below is for chart graph of highcharts **/
  Highcharts.chart('container', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'V2X Analysis Graph (SPaT)'
    },
    subtitle: {
      text: 'Red Light Violation'
    },
    xAxis: {
      categories: [
      '2017-11-09-22:21:50.2',
      '2017-11-09-22:21:51.3',
      '2017-11-09-22:21:52.3',
      '2017-11-09-22:21:53.3',
      '2017-11-09-22:21:54.4',
      '2017-11-09-22:21:55.5',
      '2017-11-09-22:21:56.6',
      '2017-11-09-22:21:57.7',
      '2017-11-09-22:21:58.7'
      ],
      crosshair: true
    },
    yAxis: {
      min: -100,
      title: {
        text: 'Component Value'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Lat',
      data: [37.197, 37.197, 37.197, 37.197, 37.197, 37.197, 37.197, 37.197, 37.197]

    }, {
      name: 'Lon',
      data: [126.824, 126.824, 126.824, 126.824, 126.824, 126.824, 126.825, 126.825, 126.824]

    }, {
      name: 'HV_VehicleID',
      data: [109, 109, 109, 109, 109, 109, 109, 109, 109]

    }, {
      name: 'HV_Speed',
      data: [48.156, 48.330, 49.880, 51.615, 53.550, 55.373, 56.350, 57.202, 57.853]

    }, {
      name: 'HV_TransmissionState',
      data: [5, 5, 5, 5, 5, 5, 5, 5, 5]
    }, {
      name: 'RSSI',
      data: [-92, -90, -89, -89, -90, -86, -85, -82, -83]
    }]
  });

}