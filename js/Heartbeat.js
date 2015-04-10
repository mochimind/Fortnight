FN.Heart = {};

FN.Heart.Init = function() {
	setInterval(function() {
		console.log("heartbeat!");
		FN.TaskMgr.Tick();
	}, 10000);
};

