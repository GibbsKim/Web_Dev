var type;
var vid;
var analyze_time;

$(document).ready(function() {
    var url = decodeURIComponent(document.URL);
    var urlParam = getAllUrlParams(url);
    type = parseInt(urlParam.type);             // Integer
    vid = urlParam.vid;                         // String
    analyze_time = parseInt(urlParam.start);    // Integer
    //============== 여기 이후로 문서 상단 paramter 가지고 작업하면 된다.
    var analy_time_m_15 = (analyze_time-32400)-15; // -32400 is set correct localtime at index
    var analy_time_p_15 = (analyze_time-32400)+15; 
    var date_m_15 = new Date(analy_time_m_15*1000);
    var date_p_15 = new Date(analy_time_p_15*1000);
    var list_discover = document.getElementById("str_discover");
    var list_dashboard = document.getElementById("str_dashboard");
    switch (type) {
        case 0: // 차량경고-급제동, 'hmc_dash_1'
            list_discover.src = "http://192.168.10.10:5601/app/kibana?#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+ date_m_15 +
                                "',mode:absolute,to:'"+ date_p_15 +"'))&_a=(columns:!(_source),index:hmc_0x21_hmi_vdms_wayties,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'HV_VehicleID:"
                                + vid +"%20AND%20EventType:"+ 1 +"')),sort:!(TimeTag,desc))";
            list_dashboard.src = "http://192.168.10.10:5601/app/kibana#/dashboard/a7156a90-686e-11e8-90d4-0b33c8906d77?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+
                                date_m_15 +"',mode:absolute,to:'"+ date_p_15 +"'))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:'2b174770-686d-11e8-90d4-0b33c8906d77',panelIndex:1,row:1,size_x:6,size_y:5,type:visualization),"+
                                "(col:7,id:d9dfffe0-686d-11e8-90d4-0b33c8906d77,panelIndex:2,row:1,size_x:6,size_y:5,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'EventType:"+ 1 +"+AND+HV_VehicleID:"+ vid +"')),title:hmc_dash_1,uiState:(P-1:(mapCenter:!(37.260938147754544,126.78428649902344))))";
            break;
        case 1: // 교차로-차량, 'hmc_dash_2'
            list_discover.src = "http://192.168.10.10:5601/app/kibana?#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+ date_m_15 +
                                "',mode:absolute,to:'"+ date_p_15 +"'))&_a=(columns:!(_source),index:hmc_0x21_hmi_vdms_wayties,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'HV_VehicleID:"
                                + vid + "%20AND%20EventType:"+ 2 +"')),sort:!(TimeTag,desc))";
            list_dashboard.src = "http://192.168.10.10:5601/app/kibana#/dashboard/ce5665a0-686e-11e8-90d4-0b33c8906d77?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+
                                date_m_15 +"',mode:absolute,to:'"+ date_p_15 +"'))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:'2b174770-686d-11e8-90d4-0b33c8906d77',panelIndex:1,row:1,size_x:5,size_y:5,type:visualization),"+
                                "(col:6,id:'3560aea0-686e-11e8-90d4-0b33c8906d77',panelIndex:2,row:1,size_x:7,size_y:5,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'EventType:"+ 2 +"+AND+HV_VehicleID:"+ vid +"')),title:hmc_dash_2,uiState:(P-1:(mapCenter:!(37.29699797218557,126.82685852050781))))";
            break;
        case 2: // 장애물경고-보행자, skip (현재 테스트용 Dashboard가 link되어 있다) --> 추후 Dashboard src url 수정해야함
            list_discover.src = "http://192.168.10.10:5601/app/kibana?#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+ date_m_15 +
                                "',mode:absolute,to:'"+ date_p_15 +"'))&_a=(columns:!(_source),index:hmc_0x21_hmi_vdms_wayties,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'HV_VehicleID:"
                                + vid + "%20AND%20EventType:"+ 3 +"')),sort:!(TimeTag,desc))";
            list_dashboard.src = "http://192.168.10.10:5601/app/kibana#/dashboard/1ce33dd0-6796-11e8-8987-2f052d496ca7?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+
                                date_m_15 +"',mode:absolute,to:'"+ date_p_15 +"'))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:'3c052bc0-6795-11e8-8987-2f052d496ca7',panelIndex:1,"+
                                "row:1,size_x:4,size_y:3,type:visualization),(col:1,id:dd5826d0-6795-11e8-8987-2f052d496ca7,panelIndex:2,row:4,size_x:4,size_y:3,type:visualization),"+
                                "(col:5,id:b0036d10-6796-11e8-8987-2f052d496ca7,panelIndex:3,row:1,size_x:4,size_y:3,type:visualization),(col:5,id:e3047ee0-6799-11e8-b93c-71f202b7487d,"+
                                "panelIndex:4,row:4,size_x:4,size_y:3,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'EventType:"+ 3 +"+AND+HV_VehicleID:"+ vid +
                                "')),title:RLV_Dashboard,uiState:(P-4:(mapCenter:!(37.23579532804237,126.89071655273438),spy:(mode:(fill:!f,name:!n)))))";
            break;
        case 3: // 주의구간-공사, skip --> case 2와 동일
            list_discover.src = "http://192.168.10.10:5601/app/kibana?#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+ date_m_15 +
                                "',mode:absolute,to:'"+ date_p_15 +"'))&_a=(columns:!(_source),index:hmc_0x21_hmi_vdms_wayties,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'HV_VehicleID:"
                                + vid + "%20AND%20EventType:"+ 4 +"')),sort:!(TimeTag,desc))";
            list_dashboard.src = "http://192.168.10.10:5601/app/kibana#/dashboard/1ce33dd0-6796-11e8-8987-2f052d496ca7?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+
                                date_m_15 +"',mode:absolute,to:'"+ date_p_15 +"'))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:'3c052bc0-6795-11e8-8987-2f052d496ca7',panelIndex:1,"+
                                "row:1,size_x:4,size_y:3,type:visualization),(col:1,id:dd5826d0-6795-11e8-8987-2f052d496ca7,panelIndex:2,row:4,size_x:4,size_y:3,type:visualization),"+
                                "(col:5,id:b0036d10-6796-11e8-8987-2f052d496ca7,panelIndex:3,row:1,size_x:4,size_y:3,type:visualization),(col:5,id:e3047ee0-6799-11e8-b93c-71f202b7487d,"+
                                "panelIndex:4,row:4,size_x:4,size_y:3,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'EventType:"+ 4 +"+AND+HV_VehicleID:"+ vid +
                                "')),title:RLV_Dashboard,uiState:(P-4:(mapCenter:!(37.23579532804237,126.89071655273438),spy:(mode:(fill:!f,name:!n)))))";
            break;
        case 4: // 교차로-적신호경고, 'hmc_dash_6'
            list_discover.src = "http://192.168.10.10:5601/app/kibana?#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+ date_m_15 +
                                "',mode:absolute,to:'"+ date_p_15 +"'))&_a=(columns:!(_source),index:hmc_0x21_hmi_vdms_wayties,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'HV_VehicleID:"
                                + vid + "%20AND%20EventType:"+ 6 +"')),sort:!(TimeTag,desc))";
            list_dashboard.src = "http://192.168.10.10:5601/app/kibana#/dashboard/173b4920-686f-11e8-90d4-0b33c8906d77?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+
                                date_m_15 +"',mode:absolute,to:'"+ date_p_15 +"'))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:'2b174770-686d-11e8-90d4-0b33c8906d77',panelIndex:1,row:1,size_x:4,size_y:4,type:visualization),"+
                                "(col:1,id:'690c1190-686e-11e8-90d4-0b33c8906d77',panelIndex:2,row:5,size_x:8,size_y:5,type:visualization),(col:5,id:'827f60b0-686d-11e8-90d4-0b33c8906d77',panelIndex:3,row:1,size_x:4,size_y:4,type:visualization)),"+
                                "query:(query_string:(analyze_wildcard:!t,query:'EventType:"+ 6 +"+AND+HV_VehicleID:"+ vid +"')),title:hmc_dash_6,uiState:(P-1:(mapCenter:!(37.18657859524883,126.80694580078124)),P-3:(mapCenter:!(37.223767535823576,126.903076171875))))";
            break;
        case 5: // 교차로-교통신호등, skip --> case 2와 동일
            list_discover.src = "http://192.168.10.10:5601/app/kibana?#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+ date_m_15 +
                                "',mode:absolute,to:'"+ date_p_15 +"'))&_a=(columns:!(_source),index:hmc_0x21_hmi_vdms_wayties,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'HV_VehicleID:"
                                + vid + "%20AND%20EventType:"+ 7 +"')),sort:!(TimeTag,desc))";
            list_dashboard.src = "http://192.168.10.10:5601/app/kibana#/dashboard/1ce33dd0-6796-11e8-8987-2f052d496ca7?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'"+
                                date_m_15 +"',mode:absolute,to:'"+ date_p_15 +"'))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:'3c052bc0-6795-11e8-8987-2f052d496ca7',panelIndex:1,"+
                                "row:1,size_x:4,size_y:3,type:visualization),(col:1,id:dd5826d0-6795-11e8-8987-2f052d496ca7,panelIndex:2,row:4,size_x:4,size_y:3,type:visualization),"+
                                "(col:5,id:b0036d10-6796-11e8-8987-2f052d496ca7,panelIndex:3,row:1,size_x:4,size_y:3,type:visualization),(col:5,id:e3047ee0-6799-11e8-b93c-71f202b7487d,"+
                                "panelIndex:4,row:4,size_x:4,size_y:3,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'EventType:"+ 7 +"+AND+HV_VehicleID:"+ vid +
                                "')),title:RLV_Dashboard,uiState:(P-4:(mapCenter:!(37.23579532804237,126.89071655273438),spy:(mode:(fill:!f,name:!n)))))";
    }
    
});

// type === index num?

function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i=0; i<arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // in case params look like: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function(v) {
                paramNum = v.slice(1,-1);
                return '';
            });

            // set parameter value (use 'true' if empty)
            var paramValue = typeof(a[1])==='undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            // if parameter name already exists
            if (obj[paramName]) {
                // convert value to array (if still string)
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                // if no array index number specified...
                if (typeof paramNum === 'undefined') {
                    // put the value on the end of the array
                    obj[paramName].push(paramValue);
                }
                // if array index number specified...
                else {
                    // put the value at that index number
                    obj[paramName][paramNum] = paramValue;
                }
            }
            // if param name doesn't exist yet, set it
            else {
                obj[paramName] = paramValue;
            }
        }
    }

    return obj;
}