FN.FP = {};

FN.FP.Init = function() {
	var leftCell = $("<td rowspan='2'></td>");
	var topRightCell = $("<td></td>");
	var botRightCell = $("<td></td>");
	
	FN.FP.container = $("<table></table>")
	.append($("<tr></tr>")
			.append(leftCell)
			.append(topRightCell))
	.append($("<tr></tr>")
			.append(botRightCell));
	
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
	FN.PM.LoadComponent(FN.FP.container);
};

FN.FP.AddFollower = function(follower) {
	var menuItem = $("<tr><td>" + follower.name +"</td></tr>")
					.click(function() {
						FN.FP.ChangeMenus(follower);
					});
	FN.FP.followerTable.append(menuItem);
};

FN.FP.ChangeMenus = function(follower) {
	FN.FP.statTable.empty();
	FN.FP.statTable.append($("<caption>Stats</caption>"));
	for (var key in follower.stats) {
		FN.FP.statTable.append($("<tr><td>" + key + "</td><td>" + follower.stats[key] + "</td></tr>"));
	}
	
	FN.FP.happinessTable.empty();
	FN.FP.happinessTable.append($("<caption>Happiness</caption>"));
	for (var key in follower.requirements) {
		FN.FP.happinessTable.append($("<tr><td>" + key + "</td><td>" + follower.requirements[key] + "</td></tr>"));
	}
};
