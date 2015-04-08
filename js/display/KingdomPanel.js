FN.KP = {};

FN.KP.Init = function() {
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
	
	FN.KP.resourceTable = $("<table class='data_table'></table>");
	FN.KP.resourceTable.append($("<caption>Resources</caption>"));
	
	FN.KP.CreateResourceRow("Food");
	FN.KP.CreateResourceRow("Iron");
	FN.KP.CreateResourceRow("Leather");
	FN.KP.CreateResourceRow("Wood");
	FN.KP.CreateResourceRow("Stone");	
	
	FN.KP.moneyRow = $("<div class='money_row'></div>");
	FN.KP.moneyRow.append("<span>Money:</span>");
	FN.KP.moneyNumber = $("<span>0</span>");
	FN.KP.moneyRow.append(FN.KP.moneyNumber);
};

FN.KP.CreateResourceRow = function(name) {
	var addRow = $("<tr><td>" + name + "</td></tr>");
	FN.KP[name] = $("<td>0</td>");
	addRow.append(FN.KP[name]);
	FN.KP.resourceTable.append(addRow);
};

FN.KP.LoadPanel = function() {
	FN.PM.LoadComponent(FN.KP.townTable);
	FN.PM.LoadComponent(FN.KP.resourceTable);
	FN.PM.LoadComponent(FN.KP.moneyRow);
};

FN.KP.ChangeResource = function(resource, amount) {
	FN.KP[resource].text = amount;
};

FN.KP.ChangeMoney = function(newAmount) {
	FN.PM.moneyRow.text(newAmount);
};

FN.KP.AddTown = function(town) {
	var addRow = $("<tr>" +
			"<td>" + town.name + "</td>" +
			"<td>" + town.type + "</td>" +
			"<td>" + town.people + "</td>" +
			"<td>"+ town.wealth + "</td>" +
			"<td>" + town.food + "</td>" +
			"<td>" + town.happiness + "</td></tr>");
	FN.KP.townTable.append(addRow);
};



