FN.Location = {};

FN.Location.Create = function(name, type, description) {
	var obj = {};
	obj.name = name;
	obj.type = type;
	obj.description = description;
	obj.tasks = [];
	
	FN.LocationMgr.AddLocation(obj);
	
	return obj;
};

FN.Location.AddTask = function(location, task) {
	location.tasks.push(task);
};

