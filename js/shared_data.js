var projects=[];
var projects_str=window.localStorage.getItem("projects");
if(projects_str){
	projects =JSON.parse(projects_str); 
}
var cycles=[];
var cycles_str=window.localStorage.getItem("cycles");
if(cycles_str){
	cycles =JSON.parse(cycles_str); 
}

var machine_types={};
var machine_types_str=window.localStorage.getItem("machine_types");
if(machine_types_str){
	machine_types =JSON.parse(machine_types_str); 
}