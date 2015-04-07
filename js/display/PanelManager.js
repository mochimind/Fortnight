FN.PM = {};

FN.PM.activePanel = null;

FN.PM.UnloadPanel = function() {
	if (FN.PM.activePanel != null) {
		$("#container").empty();
	}
};

FN.PM.LoadComponent = function(component) {
	$("#container").append(component);
};

FN.PM.SetBanner = function(name) {
	
};