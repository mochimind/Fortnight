FN.LP = {};

FN.LP.initialized = false;
FN.LP.code = "LP";

FN.LP.Init = function() {
	if (FN.LP.initialized) { return; }
	FN.LP.initialized = true;
	var leftCell = $("<td rowspan='2'></td>");
	var topRightCell = $("<td></td>");
	var botRightCell = $("<td></td>");
	
	FN.LP.container = $("<table></table>")
	.append($("<tr></tr>")
			.append(leftCell)
			.append(topRightCell))
	.append($("<tr></tr>")
			.append(botRightCell));
	
	FN.LP.placeList = $("<ul></ul>");
	leftCell.append($("<div>Place</div>"))
					.append(FN.LP.placeList);
	
	FN.LP.description = $("<div></div>");
	topRightCell.append($("<div>Description</div>"))
					.append(FN.LP.description);
	
	FN.LP.taskList = $("<ul></ul>");
	FN.LP.startTaskButton = $("<button type='button'>Start Task</button>");
	FN.LP.taskDescription = $("<div></div>");
	botRightCell.append($("<div>Tasks</div>"))
					.append($("<table></table>")
							.append($("<tr></tr>"))
								.append($("<td></td>")
										.append(FN.LP.taskList))
								.append($("<td></td>")
										.append(FN.LP.taskDescription)))
					.append(FN.LP.startTaskButton);
};

FN.LP.LoadPanel = function() {
	FN.LP.Init();
	FN.PM.activePanel = FN.LP.code;
	
	FN.LP.placeList.empty();
	FN.LP.description.text("");
	FN.LP.taskList.empty();
	FN.LP.taskDescription.text("");
	FN.LP.startTaskButton.attr("disabled", true);
	
	FN.PM.LoadComponent(FN.LP.container);
	
	for (var i=0 ; i<FN.LocationMgr.locations.length ; i++) {
		FN.LP.AddLocation(FN.LocationMgr.locations[i]);
	}
};

FN.LP.AddLocation = function(location) {
	FN.LP.placeList.append($("<li>" + location.name + "</li>"))
			.click(function() {
				FN.LP.description.text(location.description);
				FN.LP.taskList.empty();
				FN.LP.taskDescription.text("");
				
				for (var i=0 ; i<location.tasks.length ; i++) {
					FN.LP.taskList.append($("<li>" + location.tasks[i].name + "</li>")
							.click(function(task) {
								return function() { 
									FN.LP.taskDescription.text(task.description); 

									// add a start button
									FN.LP.startTaskButton.attr("disabled", false);
									FN.LP.startTaskButton.click(function() {
										FN.JP.LoadPanel(function(vassal) {
											FN.Task.StartTask(task);
										});
									});
								};
							}(location.tasks[i])));
				}
				
			});
	
};





