FN.NB = {};

FN.NB.Init = function () {
	$("#kingdom_nav").click(function() {
		FN.PM.UnloadPanel();
		FN.KP.LoadPanel();
	});
	
	$("#followers_nav").click(function() {
		FN.PM.UnloadPanel();
		FN.FP.LoadPanel();
	});
	
	$("#assignments_nav").click(function() {
		FN.PM.UnloadPanel();
		FN.AP.LoadPanel();
	});
	
	$("#stronghold_nav").click(function() {
		FN.PM.UnloadPanel();
		FN.SP.LoadPanel();
	});
};
