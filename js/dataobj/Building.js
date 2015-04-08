FN.Building = {};

FN.Building.CreateBuilding = function(name, description, actions) {
	var obj = {};
	
	obj.name = name;
	obj.description = description;
	obj.actions = actions;
	
	FN.SP.LoadBuilding(obj);
	
	return obj;
};




