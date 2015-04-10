var FN = {};
FN.Main = {};

$(function(){
	FN.NB.Init();
	
	FN.GameDat.Newbieton();
	
	var hero = FN.Vassal.CreateVassal("hero", [['diplomacy', 10]], [['power', 10]]);
	
	FN.LP.LoadPanel();	
	FN.Heart.Init();
});
