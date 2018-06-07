$(document).ready(function () {
  
  $('#get-data').click(function () {
    var showData = $('#show-data');
  
    $.getJSON('http://192.168.10.10:9200/hmc_0x10_spatmaplistentry/_search', function (data) {
      console.log(data);
      
      var items = data.items.map(function (item) {
        return item.key + ': ' + item.value;
      });
      
      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });
    
    showData.text('Loading the JSON file.');
  });
});



function TEST() {
  const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://192.168.10.10:9200/hmc_0x10_spatmaplistentry');
xhr.responseType = 'json';
xhr.onload = function(e) {
  if (this.status == 200) {
    console.log('response', this.response); // JSON response  
  }
};
xhr.send();
}