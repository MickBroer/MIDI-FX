// Initialize variables 
var chance = 50;
var minimum = 0;
var maximum = 127;

// Random velocity + probability gate
function HandleMIDI(event) {
	chance = GetParameter("Chance");
	minimum = GetParameter("Velocity min");
	maximum = GetParameter("Velocity max")
	if (event instanceof NoteOn && Math.floor(Math.random() * 100) <= chance) {
		event.velocity = Math.floor(Math.random() * (maximum - minimum) ) + minimum;
		event.send();
	}
}

// GUI
var PluginParameters = [
	{name:"Chance", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"Velocity min", type:"lin", minValue:0, maxValue:127, numberOfSteps:127, defaultValue:0},
	{name:"Velocity max", type:"lin", minValue:0, maxValue:127, numberOfSteps:127, defaultValue:127}
	];