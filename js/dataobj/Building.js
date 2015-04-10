FN.Building = {};

FN.Building.CreateBuilding = function(name, description, actions) {
	var obj = {};
	
	obj.name = name;
	obj.description = description;
	obj.built = false;
	obj.actions = actions;
	
	return obj;
};




