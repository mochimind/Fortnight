FN.Task = {};

FN.Task.NewTask = function(taskname, ticks, requirements, reward) {
	var obj = {};
	
	obj.taskname = taskname;
	obj.ticks = ticks;
	obj.requirements = requirements;
	obj.completed = 0;
	obj.started = false;
	obj.reward = reward;
	
	return obj;
};

FN.Task.AssignTask = function(task, doer) {
	task.doer = doer;
	task.started = true;
};

FN.Task.Tick = function(task) {
	task.completed++;
	if (task.completed >= task.ticks) {
		obj.reward();
		return true;
	}
	return false;
};
