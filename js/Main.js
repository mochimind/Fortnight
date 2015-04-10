var FN = {};
FN.Main = {};

$(function(){
	FN.NB.Init();
	FN.KP.Init();
	FN.VP.Init();
	FN.AP.Init();
	FN.SP.Init();
	
	FN.KP.LoadPanel();
	var stronghold = FN.Town.CreateTown("stronghold", 10, 1, "castle", 100, 10);
	FN.KP.AddTown(stronghold);
	
	var hero = FN.Vassal.CreateVassal("hero", [['diplomacy', 10]], [['power', 10]]);
	
	var buildAction = FN.BuildAct.Create("build a building", null);
	var builderHall = FN.Building.CreateBuilding("Labor Camp", "The Labor Camp is where your followers" +
			" gather to work on large construction projects. It serves as a place to store" +
			" all of the raw materials needed for building as well as the tools needed.", 
			[buildAction]);
	
	FN.Heart.Init();
});
