function saveMReport(report){
	if(report.status=="uploaded"){
		report.status="modified";
	}
	syncMReport(report);
	
}
function syncMReport(report){
	var mReportQueue=[];

	var mReportQueueStr=window.localStorage.getItem("mReportQueue");

	if(mReportQueueStr){
		mReportQueue =JSON.parse(mReportQueueStr); 
	}
	if(report.index>=0){
		
		mReportQueue[report.index]=report;
		
	}else{
		report.index=mReportQueue.length-1;
		mReportQueue.push(report);
		if(mReportQueue.length>6){
			alert(mReportQueue.length);
			var temp_report=mReportQueue.shift();
			var dataURLHash={};
			var dataURLHashStr=window.localStorage.getItem("dataURLHash");
			alert(dataURLHashStr);
			if(dataURLHashStr){
				dataURLHash =JSON.parse(dataURLHashStr); 
			}
			var dataURLArray = $.map(dataURLHash, function(value, index) {
			    return [value];
			});
			// alert(dataURLArray.length);
			for(var i in temp_report.froms){
				var old_data=jQuery.grep(dataURLArray, function(element, index){
				
				  return element.from_id==temp_report.froms[i].id;
				});
				// alert(old_data.length);
				for(var j in old_data){
					alert(old_data[j].id);
					delete dataURLHash[old_data[j].id];
				}

			}
			alert(JSON.stringify(dataURLHash));
			window.localStorage.setItem("dataURLHash",JSON.stringify(dataURLHash));
			removeReportPhoto(temp_report);
		}

	}
	window.localStorage.setItem("mReportQueue", JSON.stringify(mReportQueue));
	window.localStorage.setItem("currentMReport", JSON.stringify(report));	

}

function removeReportPhoto(report){
	 for(var key in report.photos){ 
	 	alert(report.photos[key].local);
     window.resolveLocalFileSystemURI(report.photos[key].local, onResolveSuccess, fail);
	 }  


}
			
function onResolveSuccess(fileEntry) {
	// alert(fileEntry.name);
    fileEntry.remove();
}

function fail(evt) {
    alert(evt.target.error.code);
}

function saveSReport(report){
	if(report.status=="uploaded"){
		report.status="modified";
	}

	syncSReport(report);
}

function syncSReport(report){
		var sReportQueue=[];

	var sReportQueueStr=window.localStorage.getItem("sReportQueue");

	if(sReportQueueStr){
		sReportQueue =JSON.parse(sReportQueueStr); 
	}
	if(report.index>=0){
		
		sReportQueue[report.index]=report;
		
	}else{

		report.index=sReportQueue.length-1;
		sReportQueue.push(report);
		if(sReportQueue.length>6){
			sReportQueue.shift();
		}

	}
	
	window.localStorage.setItem("sReportQueue", JSON.stringify(sReportQueue));
	window.localStorage.setItem("currentSReport", JSON.stringify(report));	

}
var currentLocale;
function refreshUILocale(locale){
	var opts = { language: locale, pathPrefix: "locale" };
    $("[data-localize]").localize("app", opts);	
}

function clearreport(){
	window.localStorage.removeItem("sReportQueue");
	window.localStorage.removeItem("currentSReport");	
	window.localStorage.removeItem("mReportQueue");
	window.localStorage.removeItem("currentMReport");	
}

function getTimeStr(){
	var now =new Date();
	return ""+now.getDate()+now.getHours()+now.getMinutes()+now.getSeconds();
}