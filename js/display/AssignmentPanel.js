FN.AP = {};

FN.AP.Init = function() {
	FN.AP.questLabel = $("<div>Quests</div>");
	FN.AP.questList = $("<ul></ul>");
	FN.AP.vassalsTable = $("<table></table>")
						.append("<caption>Vassals</caption>")
						.append("<tr><th>Vassal</th><th>Doing</th><th>Work Type</th></tr>");
};

FN.AP.LoadPanel = function() {
	FN.PM.LoadComponent(FN.AP.questLabel);
	FN.PM.LoadComponent(FN.AP.questList);
	FN.PM.LoadComponent(FN.AP.vassalsTable);	
};

FN.AP.AddVassal = function(vassal) {
	FN.AP.vassalsTable.append($("<tr><td>" + vassal.name + 
				"</td><td>" + vassal.curQuest + 
				"</td><td>" + vassal.questType + "</td></tr>"));
};


