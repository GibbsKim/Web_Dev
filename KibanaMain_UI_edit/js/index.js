var next_page = '';
var picker_param = {sideBySide: true};

$(function (){

});

$(document).ready(function() {
    $('#shortModal').modal("hide");
    $('#longModal').modal("hide");

    $('#start-time-picker').datetimepicker(picker_param);
    $('#end-time-picker').datetimepicker(picker_param);
    $('#event-time-picker').datetimepicker(picker_param);
});

$('#start-time-picker').on('click', function (e) {
    $('#start-time-picker').datetimepicker();
});
$('#end-time-picker').on('click', function (e) {
    $('#end-time-picker').datetimepicker();
});
$('#event-time-picker').on('click', function (e) {
    $('#event-time-picker').datetimepicker();
});

//=================

$('#btn_long').on('click', function (e) {
    next_page = 'analysis.html';
    $('#longModal').modal("show");
});
$('#btn_confirm_long').on('click', function (e) {
    var startTime, endTime;
    var id;

    id = $('#testtype_long').val();

    try{
        startTime = $('#start-time-picker').data('DateTimePicker').date().unix();
        endTime = $('#end-time-picker').data('DateTimePicker').date().unix();
    }catch(err){
        alertErr("long","You must set time ranges ");
        return;
    }

    /*
    if((startTime == undefined) || (endTime == undefined)){
        alertErr("long","You must select both time ranges ");
        return;
    }
    */

    if(startTime >= endTime){
        alertErr("long","'End-time' should be after the 'Start-time' ");
        return;
    }

    alertErr("long","");

    $('#longModal').modal("hide");

    location.href = next_page + '?type=' + id + '&start=' + startTime + '&end=' + endTime;
});
$('#btn_cancel_long').on('click', function (e) {
    $('#longModal').modal("hide");
});
function alertErr(type, err){
    if(err == ""){
        $('#alert_' + type).text();
    }else{
        $('#alert_' + type).text(err);
    }
}
//=================

$('#btn_short').on('click', function (e) {
    next_page = 'appview.html';
    $('#shortModal').modal("show");
});
$('#btn_confirm_short').on('click', function (e) {
    var eventTime;
    var id;
    var vid;

    id = $('#testtype_short').val();

    if(document.getElementById("vehicleID").value == ""){
        alertErr("short","You must set 'Vehicle ID' ");
        return;
    }else{
        vid = document.getElementById("vehicleID").value;
    }

    try{
        eventTime = $('#event-time-picker').data('DateTimePicker').date().unix();
    }catch(err){
        alertErr("short","You must set 'Event-time' ");
        return;
    }

    alertErr("short","");

    $('#shortModal').modal("hide");

    location.href = next_page + '?type=' + id + '&vid=' + vid + '&start=' + eventTime;
});
$('#btn_cancel_short').on('click', function (e) {
    $('#shortModal').modal("hide");
});