function saveMReport(report){
	if(report.status=="uploaded"){
		report.status="modified";
	}
	syncMReport(report);
	
}
function syncMReport(report){
	var mReportQueue=[];

	var mReportQueueStr=window.localStorage.getItem("mReportQueue");

	if(!mReportQueueStr){
		mReportQueue =JSON.parse(mReportQueueStr); 
	}
	if(report.index>=0){
		
		mReportQueue[report.index]=report;
		
	}else{
		report.index=0;
		mReportQueue.push(report);
		if(mReportQueue.length>3){
			mReportQueue.shift();
		}

	}
	window.localStorage.setItem("mReportQueue", JSON.stringify(mReportQueue));
	window.localStorage.setItem("currentMReport", JSON.stringify(report));	

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

	if(!sReportQueueStr){
		sReportQueue =JSON.parse(sReportQueueStr); 
	}
	if(report.index>=0){
		
		sReportQueue[report.index]=report;
		
	}else{

		report.index=0;
		sReportQueue.push(report);
		if(sReportQueue.length>3){
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
	window.localStorage.setItem("sReportQueue", null);
	window.localStorage.setItem("currentSReport", null);	
	window.localStorage.setItem("mReportQueue", null);
	window.localStorage.setItem("currentMReport", null);	
}