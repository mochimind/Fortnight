FN.KP = {};

FN.KP.CreatePanel = function() {
	FN.PM.SetBanner("Kingdom");
	
	FN.KP.townTable = $("<table class='data_table'></table>");
	var header = $("<tr>" +
			"<th>Town</th>" +
			"<th>Type</th>" +
			"<th>People</th>" +
			"<th>Wealth</th>" +
			"<th>Food</th>" +
			"<th>Happiness</th></tr>");
	FN.KP.townTable.append($("<caption>Towns</caption>"));
	FN.KP.townTable.append(header);
	FN.PM.LoadComponent(FN.KP.townTable);
	
	FN.KP.resourceTable = $("<table class='data_table'></table>");
	FN.KP.resourceTable.append($("<caption>Resources</caption>"));
	FN.PM.LoadComponent(FN.KP.resourceTable);
	
	FN.KP.CreateResourceRow("Food");
	FN.KP.CreateResourceRow("Iron");
	FN.KP.CreateResourceRow("Leather");
	FN.KP.CreateResourceRow("Wood");
	FN.KP.CreateResourceRow("Stone");	
	
	FN.KP.moneyRow = $("<div class='money_row'></div>");
	FN.KP.moneyRow.append("<span>Money:</span>");
	FN.KP.moneyNumber = $("<span>0</span>");
	FN.KP.moneyRow.append(FN.KP.moneyNumber);
	FN.PM.LoadComponent(FN.KP.moneyRow);
};

FN.KP.CreateResourceRow = function(name) {
	var addRow = $("<tr><td>" + name + "</td></tr>");
	FN.KP[name] = $("<td>0</td>");
	addRow.append(FN.KP[name]);
	FN.KP.resourceTable.append(addRow);
};

FN.KP.ChangeResource = function(resource, amount) {
	FN.KP[resource].text = amount;
};

FN.KP.ChangeMoney = function(newAmount) {
	FN.PM.moneyRow.text(newAmount);
};

FN.KP.AddTown = function(town) {
	
};



