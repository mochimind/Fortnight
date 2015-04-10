FN.NB = {};

FN.NB.Init = function () {
	$("#location_nav").click(function() {
		FN.PM.UnloadPanel();
		FN.LP.LoadPanel();
	});
	
	$("#vassals_nav").click(function() {
		FN.PM.UnloadPanel();
		FN.VP.LoadPanel();
	});
	
	$("#assignments_nav").click(function() {
		FN.PM.UnloadPanel();
		FN.AP.LoadPanel();
	});
	
	$("#stronghold_nav").click(function() {
		//FN.PM.UnloadPanel();
		//FN.SP.LoadPanel();
		FN.JP.LoadPanel();
	});
};
