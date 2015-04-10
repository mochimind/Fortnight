FN.VP = {};

FN.VP.initialized = false;
FN.VP.code = "VP";

FN.VP.Init = function() {
	if (FN.VP.initialized) { return; }
	FN.VP.initialized = true;
	
	var leftCell = $("<td rowspan='2'></td>");
	var topRightCell = $("<td></td>");
	var botRightCell = $("<td></td>");
	
	FN.VP.container = $("<table></table>")
	.append($("<tr></tr>")
			.append(leftCell)
			.append(topRightCell))
	.append($("<tr></tr>")
			.append(botRightCell));
	
	FN.VP.vassalTable = $("<table id='data_table'></table>");
	FN.VP.statTable = $("<table id='data_table'></table>")
							.append($("<caption>Stats</caption>"));
	FN.VP.happinessTable = $("<table id='data_table'></table>")
							.append($("<caption>Happiness</caption>"));

	leftCell.append(FN.VP.vassalTable);
	topRightCell.append(FN.VP.statTable);
	botRightCell.append(FN.VP.happinessTable);
};

FN.VP.LoadPanel = function() {
	FN.VP.Init();
	FN.PM.activePanel = FN.VP.code;
	
	FN.PM.LoadComponent(FN.VP.container);
	
	FN.VP.vassalTable.empty()
			.append($("<caption>Vassals</caption>"));
	
	for (var i=0 ; i<FN.VassalMgr.vassals.length ; i++) {
		FN.VP.AddVassal(FN.VassalMgr.vassals[i]);
	}
};

FN.VP.AddVassal = function(vassal) {
	var menuItem = $("<tr><td>" + vassal.name +"</td></tr>")
					.click(function() {
						FN.VP.ChangeMenus(vassal);
					});
	FN.VP.vassalTable.append(menuItem);
};

FN.VP.ChangeMenus = function(vassal) {
	FN.VP.statTable.empty();
	FN.VP.statTable.append($("<caption>Stats</caption>"));
	for (var key in vassal.stats) {
		FN.VP.statTable.append($("<tr><td>" + key + "</td><td>" + vassal.stats[key] + "</td></tr>"));
	}
	
	FN.VP.happinessTable.empty();
	FN.VP.happinessTable.append($("<caption>Happiness</caption>"));
	for (var key in vassal.requirements) {
		FN.VP.happinessTable.append($("<tr><td>" + key + "</td><td>" + vassal.requirements[key] + "</td></tr>"));
	}
};
