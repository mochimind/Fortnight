FN.TaskMgr = {};

FN.TaskMgr.activeTasks = [];

FN.TaskMgr.RegisterTask = function(task) {
	FN.TaskMgr.activeTasks.push(task);
};

FN.TaskMgr.Tick = function() {
	var removeList = [];
	
	for (var i=0 ; i<FN.TaskMgr.activeTasks.length ; i++) {
		var curTask = FN.TaskMgr.activeTasks[i];
		curTask.completed++;
		console.log("hit!" + curTask.completed + "||" + curTask.ticks);
		if (curTask.ticks <= curTask.completed) {
			curTask.reward();
			removeList.push(i);
		}
	}
	
	for (var i=removeList.length-1 ; i>= 0 ; i--) {
		FN.TaskMgr.activeTasks.splice(i,1);
	}
};
