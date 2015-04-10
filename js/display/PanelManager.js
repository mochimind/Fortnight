FN.PM = {};

FN.PM.activePanel = "";

FN.PM.UnloadPanel = function() {
	if (FN.PM.activePanel == FN.LP.code) {
		FN.LP.HidePanel();
	} else if (FN.PM.activePanel == FN.AP.code) {
		FN.AP.HidePanel();
	} else if (FN.PM.activePanel == FN.VP.code) {
		FN.VP.HidePanel();
	}
};

FN.PM.LoadComponent = function(component) {
	$("#container").append(component);
};

FN.PM.SetBanner = function(name) {
	
};
