FN.SP = {};

FN.SP.Init = function() {
	var leftCell = $("<td rowspan='2'></td>");
	var topRightCell = $("<td></td>");
	var botRightCell = $("<td></td>");
	
	FN.SP.container = $("<table></table>")
	.append($("<tr></tr>")
			.append(leftCell)
			.append(topRightCell))
	.append($("<tr></tr>")
			.append(botRightCell));
	
	FN.SP.buildingTable = $("<table id='data_table'></table>")
	.append($("<caption>Buildings</caption>"));
	
	FN.SP.actionTable = $("<table id='data_table'></table>")
	.append($("<caption>Actions</caption>"));
	
	FN.SP.description = $("<span></span>");
	
	leftCell.append(FN.SP.buildingTable);
	topRightCell.append(FN.SP.description);
	botRightCell.append(FN.SP.actionTable);
};

FN.SP.LoadPanel = function() {
	FN.PM.LoadComponent(FN.SP.container);
};

FN.SP.LoadBuilding = function(building) {
	var menuItem = $("<tr><td>" + building.name +"</td></tr>")
	.click(function() {
		FN.SP.ChangeMenus(building);
	});
	FN.SP.buildingTable.append(menuItem);
};

FN.SP.ChangeMenus = function(building) {
	FN.SP.actionTable.empty();
	FN.SP.actionTable.append($("<caption>Actions</caption>"));
	FN.SP.description.text(building.description);
	console.log("test: " + building.actions.length);
	for (var i=0 ; i<building.actions.length ; i++) {
		FN.SP.actionTable.append($("<tr><td>" + building.actions[i].description + "</td></tr>"));
	}
};


