FN.Quest = {};

FN.Quest.NewQuest = function(name, tasks) {
	var obj = {};
	obj.name = name;
	obj.tasks = tasks;
	obj.started = false;
	obj.completedTasks = [];
	
	return obj;
};

FN.Quest.GetNextTask = function(quest) {
	if (quest.curTask == null) {
		
	}
};


