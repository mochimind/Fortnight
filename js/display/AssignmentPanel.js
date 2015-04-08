FN.AP = {};

FN.AP.Init = function() {
	FN.AP.questLabel = $("<div>Quests</div>");
	FN.AP.questList = $("<ul></ul>");
	FN.AP.agentsTable = $("<table></table>")
						.append("<caption>Agents</caption>")
						.append("<tr><th>Agent</th><th>Doing</th><th>Work Type</th></tr>");
};

FN.AP.LoadPanel = function() {
	FN.PM.LoadComponent(FN.AP.questLabel);
	FN.PM.LoadComponent(FN.AP.questList);
	FN.PM.LoadComponent(FN.AP.agentsTable);	
};

FN.AP.AddFollower = function(follower) {
	FN.AP.agentsTable.append($("<tr><td>" + follower.name + 
				"</td><td>" + follower.curQuest + 
				"</td><td>" + follower.questType + "</td></tr>"));
};


