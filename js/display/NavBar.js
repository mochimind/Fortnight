FN.NB = {};

FN.NB.Init = function () {
	$("#kingdom_nav").click(function() {
		FN.PM.UnloadPanel();
		FN.KP.LoadPanel();
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
