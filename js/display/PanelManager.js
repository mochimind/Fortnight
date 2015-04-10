FN.PM = {};

FN.PM.activePanel = "";

FN.PM.UnloadPanel = function() {
	$("#container").empty();
};

FN.PM.LoadComponent = function(component) {
	$("#container").append(component);
};

FN.PM.SetBanner = function(name) {
	
};
