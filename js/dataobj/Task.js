FN.Task = {};

FN.Task.NewTask = function(name, type, description, ticks, solutions, reward) {
	var obj = {};
	
	obj.name = name;
	obj.type = type;
	obj.description = description;
	obj.ticks = ticks;
	obj.solutions = solutions;
	obj.completed = 0;
	obj.started = false;
	obj.reward = reward;
	
	return obj;
};

FN.Task.StartTask = function(task, doer) {
	task.doer = doer;
	task.started = true;
	console.log('task started');
	
	FN.TaskMgr.RegisterTask(task);
};

FN.Task.Tick = function(task) {
	task.completed++;
	if (task.completed >= task.ticks) {
		obj.reward();
		return true;
	}
	return false;
};
