var FN = {};
FN.Main = {};

$(function(){
	FN.NB.Init();
	FN.KP.CreatePanel();
	var stronghold = FN.Town.CreateTown("stronghold", 10, 1, "castle", 100, 10);
	FN.KP.AddTown(stronghold);
});