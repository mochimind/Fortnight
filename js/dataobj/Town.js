FN.Town = {};

FN.Town.CreateTown = function(name, people, wealth, type, happiness, food) {
	var obj = {};
	obj.name = name;
	obj.people = people;
	obj.wealth = wealth;
	obj.type = type;
	obj.happiness = happiness;
	obj.food = food;
	
	return obj;
};


