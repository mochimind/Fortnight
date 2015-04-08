var FN = {};
FN.Main = {};

$(function(){
	FN.NB.Init();
	FN.KP.Init();
	FN.FP.Init();
	FN.AP.Init();
	
	FN.KP.LoadPanel();
	var stronghold = FN.Town.CreateTown("stronghold", 10, 1, "castle", 100, 10);
	FN.KP.AddTown(stronghold);
	
	var hero = FN.Follower.CreateFollower("hero", [['diplomacy', 10]], [['power', 10]]);
	
	FN.Heart.Init();
});
