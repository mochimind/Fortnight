FN.AP = {};

FN.AP.initialized = false;
FN.AP.code = "AP";

FN.AP.Init = function() {
	if (FN.AP.initialized) { return; }
	FN.AP.initialized = true;
	
	FN.AP.questLabel = $("<div>Quests</div>");
	FN.AP.questList = $("<ul></ul>");
	FN.AP.vassalsTable = $("<table></table>");
	
	FN.AP.RefreshPanel();
};

FN.AP.LoadPanel = function() {
	FN.AP.Init();
	FN.PM.activePanel = FN.AP.code;
	
	FN.PM.LoadComponent(FN.AP.questLabel);
	FN.PM.LoadComponent(FN.AP.questList);
	FN.PM.LoadComponent(FN.AP.vassalsTable);
	
};

FN.AP.HidePanel = function() {
	FN.AP.questLabel.remove();
	FN.AP.questList.remove();
	FN.AP.vassalsTable.remove();
};

FN.AP.RefreshPanel = function() {
	FN.AP.vassalsTable.empty()
	.append("<caption>Vassals</caption>")
	.append("<tr><th>Vassal</th><th>Doing</th><th>Work Type</th></tr>");
		for (var i=0 ; i<FN.VassalMgr.vassals.length ; i++) {
			FN.AP.AddVassal(FN.VassalMgr.vassals[i]);	
		}
};

FN.AP.AddVassal = function(vassal) {
	FN.AP.Init();
	FN.AP.vassalsTable.append($("<tr><td>" + vassal.name + 
				"</td><td>" + vassal.curTask + 
				"</td><td>" + vassal.taskType + "</td></tr>"));
};


