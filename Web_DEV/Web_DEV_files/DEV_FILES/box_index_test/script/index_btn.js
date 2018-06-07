function disCover(s1, ew) {
	var s1 = document.getElementById("btn");
	var ew = document.getElementById("emWin");

	if(s1.value == "hmc_0x10_spatmaplistentry")
	{
		console.log("Sel_1");								
		ew.src = "http://192.168.10.10:5601/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(columns:!(_source),index:hmc_0x10_spatmaplistentry,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'*')),sort:!(FixTime,desc))";
		document.write('<iframe src=' + ew.src + ' width="100%" height="600" autostart="false"></iframe>');
	}else if(s1.value == "hmc_0x21_hmi_vdms_wayties")
	{
		console.log("Sel_2");
		ew.src = "http://192.168.10.10:5601/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(columns:!(_source),index:hmc_0x21_hmi_vdms_wayties,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'*')),sort:!(FixTime,desc))"
		document.write('<embed src=' + ew.src + ' width="100%" height="600" autostart="false"></embed>');
	}else if(s1.value == "hmc_0x21_hmi_vdms_wayties_r1")
	{
		console.log("Sel_3");
		ew.src = "http://192.168.10.10:5601/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(columns:!(_source),index:hmc_0x21_hmi_vdms_wayties_r1,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'*')),sort:!(FixTime,desc))";
		document.write('<embed src=' + ew.src + ' width="100%" height="600" autostart="false"></embed>');
	}else if (s1.value == "hmc_0x30_hmi_vdms")
	{
		console.log("Sel_4");
		ew.src = 'http://192.168.10.10:5601/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(columns:!(_source),index:hmc_0x30_hmi_vdms,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'*')),sort:!(FixTime,desc))';
		document.write('<embed src=' + ew.src + ' width="100%" height="600" autostart="false"></embed>');
	}else if (s1.value == "hmc_0xc_v2xlphdata")
	{
		console.log("Sel_5");
		ew.src = 'http://192.168.10.10:5601/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(columns:!(_source),index:hmc_0xc_v2xlphdata,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'*')),sort:!(FixTime,desc))';
		document.write('<embed src=' + ew.src + ' width="100%" height="600" autostart="false"></embed>');
	}
}
