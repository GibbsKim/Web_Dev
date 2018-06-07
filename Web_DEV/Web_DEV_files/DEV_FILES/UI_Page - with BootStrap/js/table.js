/*** 초기에 참고하였던 jquery csv file parsing
function arrayToTable(tableData) {
  var table = $('<table></table>');
  $(tableData).each(function (i, rowData) {
    var row = $('<tr></tr>');
    $(rowData).each(function (j, cellData) {
      row.append($('<td>'+cellData+'</td>'));
      });
    table.append(row);
    });
      return table;
    }

    $.ajax({
      type: "GET",
      url: "../data/data.csv",
      success: function (data) {
        $('body').append(arrayToTable(Papa.parse(data).data));
      }
    });
*/
 
$(document).ready(function(){
  $.ajax({
    url:"http://localhost:8080/data/data.csv",
    dataType:"text",
    success:function(data)
    {
      var employee_data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table table-bordered table-striped">';
      for(var count = 0; count<employee_data.length-1; count++)
      {
        var cell_data = employee_data[count].split(",");
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
          if(count === 0)
          {
           table_data += '<th>'+cell_data[cell_count]+'</th>';
           } else {
           table_data += '<td>'+cell_data[cell_count]+'</td>';
           }
        }
       table_data += '</tr>';
      }
      table_data += '</table>';
      $('#test_table').html(table_data);
    }
  });
});

