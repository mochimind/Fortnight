FN.JP = {};

FN.JP.initialized = false;

FN.JP.Init = function() {
	if (FN.JP.initialized) { return; }
	FN.JP.initialized = true;

	FN.JP.vassals = $("<table></table>");
	FN.JP.container = $("<div class='job_popup'></div>")
					.append(FN.JP.vassals);
};

FN.JP.LoadPanel = function(callback) {
	FN.JP.callback = callback;
	FN.JP.Init();
	
	FN.JP.vassals.empty()
				.append($("<caption>Vassals</caption>"))
				.append($("<tr><th>Name</th><th>Status</th></tr>"));
	
	for (var i=0 ; i<FN.VassalMgr.vassals.length ; i++) {
		FN.JP.AddVassal(FN.VassalMgr.vassals[i]);
	}
	
	FN.PM.LoadComponent(FN.JP.container);
};

FN.JP.AddVassal = function(vassal) {
	console.log("adding");
	var newLine = $("<tr>" +
			"<td>" + vassal.name + "</td>" +
			"<td>" + vassal.curTask + "</td></tr>");
	if (vassal.curTask == "none") {
		newLine.click(function() {
			FN.JP.callback(vassal);
			FN.JP.HidePanel();
		});
	} else {
		vassal.css('background-color', '#dddddd');
	}
	
	FN.JP.vassals.append(newLine);
};

FN.JP.HidePanel = function() {
	FN.JP.container.remove();
};




