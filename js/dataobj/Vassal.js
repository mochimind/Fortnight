FN.Vassal = {};

FN.Vassal.CreateVassal = function(name, stats, requirements) {
	var obj = {};
	obj.stats = {'loyalty': 0,
			'diplomacy': 0,
			'leadership': 0,
			'fighting' : 0,
			'cunning': 0,
			'persuasion': 0,
			'craft': 0};
	
	obj.requirements = {'law': 0,
			'power': 0,
			'happiness': 0,
			'honor': 0,
			'tradition': 0,
			'splendor': 0,
			'equality': 0};
	
	if (stats != null && stats.length != undefined) {
		for (var i=0 ; i<stats.length ; i++) {
			obj.stats[stats[i][0]] =  stats[i][1];
		}		
	}
	
	if (requirements != null && requirements.length != undefined) {
		for (var i=0 ; i<requirements.length ; i++) {
			obj.requirements[requirements[i][0]] = requirements[i][1];
		}
	}
	
	obj.name = name;
	obj.curTask = "none";
	obj.taskType = "none";
	
	FN.VassalMgr.AddVassal(obj);

	return obj;
};


