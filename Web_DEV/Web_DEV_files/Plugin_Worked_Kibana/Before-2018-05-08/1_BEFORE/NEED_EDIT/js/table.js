function scrolify(tblAsJQueryObject, height){
        var oTbl = tblAsJQueryObject;

        var oTblDiv = $("<div/>");
        oTblDiv.css('height', height);
        oTblDiv.css('overflow','scroll');               
        oTbl.wrap(oTblDiv);


        oTbl.attr("data-item-original-width", oTbl.width());
        oTbl.find('thead tr td').each(function(){
            $(this).attr("data-item-original-width",$(this).width());
        }); 
        oTbl.find('tbody tr:eq(0) td').each(function(){
            $(this).attr("data-item-original-width",$(this).width());
        });                 



        var newTbl = oTbl.clone();

        oTbl.find('thead tr').remove();                 
        newTbl.find('tbody tr').remove();   

        oTbl.parent().parent().prepend(newTbl);
        newTbl.wrap("<div/>");

        newTbl.width(newTbl.attr('data-item-original-width'));
        newTbl.find('thead tr td').each(function(){
            $(this).width($(this).attr("data-item-original-width"));
        });     
        oTbl.width(oTbl.attr('data-item-original-width'));      
        oTbl.find('tbody tr:eq(0) td').each(function(){
            $(this).width($(this).attr("data-item-original-width"));
        });

        google.visualization.events.addListener(tblAsJQueryObject, 'select',
          function() {
            map.setSelection(tblAsJQueryObject.getSelection());
          });
        google.visualization.events.addListener(map, 'select',
          function() {
            tblAsJQueryObject.setSelection(map.getSelection());
          });
    }

/*
function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Date');
  data.addColumn('number', 'Latitude');
  data.addColumn('number', 'Longitude');
  data.addColumn('number', 'HV_ID');
  data.addColumn('number', 'HV_Speed');
  data.addColumn('number', 'HV_Transmission');
  data.addColumn('number', 'RSSI');
  data.addRow(9);
  data.setCell(0, 0, '2017-11-09-22:21:50.2');
  data.setCell(0, 1, 37.196677);
  data.setCell(0, 2, 126.823680);
  data.setCell(0, 3, 109);
  data.setCell(0, 4, 48.156);
  data.setCell(0, 5, 5);
  data.setCell(0, 6, -92);

  data.setCell(1, 0, '2017-11-09-22:21:51.3');
  data.setCell(1, 1, 37.196762);
  data.setCell(1, 2, 126.823808);
  data.setCell(1, 3, 109);
  data.setCell(1, 4, 48.330);
  data.setCell(1, 5, 5);
  data.setCell(1, 6, -90);

  data.setCell(2, 0, '2017-11-09-22:21:52.3');
  data.setCell(2, 1, 37.196836);
  data.setCell(2, 2, 126.823930);
  data.setCell(2, 3, 109);
  data.setCell(2, 4, 49.880);
  data.setCell(2, 5, 5);
  data.setCell(2, 6, -89);

  data.setCell(3, 0, '2017-11-09-22:21:53.3');
  data.setCell(3, 1, 37.196910);
  data.setCell(3, 2, 126.824060);
  data.setCell(3, 3, 109);
  data.setCell(3, 4, 51.615);
  data.setCell(3, 5, 5);
  data.setCell(3, 6, -89);  

  data.setCell(4, 0, '2017-11-09-22:21:54.4');
  data.setCell(4, 1, 37.196993);
  data.setCell(4, 2, 126.824209);
  data.setCell(4, 3, 109);
  data.setCell(4, 4, 53.550);
  data.setCell(4, 5, 5);
  data.setCell(4, 6, -90);

  data.setCell(5, 0, '2017-11-09-22:21:55.5');
  data.setCell(5, 1, 37.197078);
  data.setCell(5, 2, 126.824366);
  data.setCell(5, 3, 109);
  data.setCell(5, 4, 55.373);
  data.setCell(5, 5, 5);
  data.setCell(5, 6, -86);

  data.setCell(6, 0, '2017-11-09-22:21:56.6');
  data.setCell(6, 1, 37.197165);
  data.setCell(6, 2, 126.824525);
  data.setCell(6, 3, 109);
  data.setCell(6, 4, 56.350);
  data.setCell(6, 5, 5);
  data.setCell(6, 6, -85);

  data.setCell(7, 0, '2017-11-09-22:21:57.7');
  data.setCell(7, 1, 37.197255);
  data.setCell(7, 2, 126.824684);
  data.setCell(7, 3, 109);
  data.setCell(7, 4, 57.202);
  data.setCell(7, 5, 5);
  data.setCell(7, 6, -82);

  data.setCell(8, 0, '2017-11-09-22:21:58.7');
  data.setCell(8, 1, 37.197340);
  data.setCell(8, 2, 126.824830);
  data.setCell(8, 3, 109);
  data.setCell(8, 4, 57.853);
  data.setCell(8, 5, 5);
  data.setCell(8, 6, -83);

  var table = new google.visualization.Table(document.getElementById('table_div'));
  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}*/
    