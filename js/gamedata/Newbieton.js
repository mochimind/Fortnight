FN.GameDat.Newbieton = function() {
	var loc = FN.Location.Create("New Beton", "hamlet", "Nestled in the Silverback mountains, New Beton is about as far from " +
			"the world as one can get. Life here is as it has been for at least a thousand years. Farmers till their fields and raise" +
			" their children on the same plot of land their forefathers have worked for generations. There have always been threats " +
			"at New Beton. If it isn't the goblins looking for easy prey, it's bandits who call these mountains home. Occasionally, " +
			"even witches and warlocks have been found lurking about trying to keep their dark ways away from the prying eyes of " +
			"the Temple. It isn't much, but it's home.");
	
	FN.Location.AddTask(loc, FN.Task.NewTask("Work the fields", "labor", "Now that your parents have passed, it's just you on the family " +
			"farm. Well, time to get to work, a day's work lies ahead of you.", 1, null, function() {
		FN.Location.AddTask(loc, FN.Task.NewTask("Contemplate Life", "labor", "For some reason today, you're in a really contemplative mood. " +
				"You have the urge to sit down and really think about the world. Is your lot really to just farm this patch of land " +
				"for the rest of your life? Is there more to life than turnips?", 1, null, function() {
			alert("You decide to take over the world");
		}));
	}));
	
};
