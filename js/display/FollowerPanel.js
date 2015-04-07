FN.FP = {};

FN.FP.panelCreated = false;

FN.FP.CreatePanel = function() {
	var leftCell = $("<td rowspan='2'></td>");
	var topRightCell = $("<td></td>");
	var botRightCell = $("<td></td>");
	
	FN.FP.container = $("<table></table>")
	.append($("<tr></tr>")
			.append(leftCell)
			.append(topRightCell))
	.append($("<tr></tr>")
			.append(botRightCell));
	
	FN.PM.LoadComponent(FN.FP.container);
	
	FN.FP.followerTable = $("<table id='data_table'></table>")
							.append($("<caption>Followers</caption>"));
	FN.FP.statTable = $("<table id='data_table'></table>")
							.append($("<caption>Stats</caption>"));
	FN.FP.happinessTable = $("<table id='data_table'></table>")
							.append($("<caption>Happiness</caption>"));

	leftCell.append(FN.FP.followerTable);
	topRightCell.append(FN.FP.statTable);
	botRightCell.append(FN.FP.happinessTable);
};

FN.FP.LoadPanel = function() {
	if (!FN.FP.panelCreated) {
		FN.FP.panelCreated = true;
		FN.FP.CreatePanel();
	} else {
		FN.PM.LoadComponent(FN.FP.container);
	}
};

FN.FP.AddFollower = function(follower) {
	
};

