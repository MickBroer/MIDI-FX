// Initialize variables 
var chance = 50;
var minimum = 0;
var maximum = 127;

// Random velocity + probability gate
function HandleMIDI(event) {
	chance = 	GetParameter("Overall Chance");
	chanceC = 	GetParameter("C");
	chanceCs = 	GetParameter("C#");
	chanceD = 	GetParameter("D");
	chanceDs = 	GetParameter("D#");
	chanceE = 	GetParameter("E");
	chanceF = 	GetParameter("F");
	chanceFs = 	GetParameter("F#");
	chanceG = 	GetParameter("G");
	chanceGs = 	GetParameter("G#");
	chanceA = 	GetParameter("A");
	chanceAs = 	GetParameter("A#");
	chanceB = 	GetParameter("B");
	minimum = 	GetParameter("Velocity min");
	maximum = 	GetParameter("Velocity max")

	if (event instanceof NoteOn && Math.floor(Math.random() * 100) <= chance) {
		event.velocity = Math.floor(Math.random() * (maximum - minimum) ) + minimum;

		if 	(probabilityGate(event.pitch, 0, chanceC) 	|| probabilityGate(event.pitch, 1, chanceCs) 	|| 
			probabilityGate(event.pitch, 2, chanceD) 	|| probabilityGate(event.pitch, 3, chanceDs)	||
			probabilityGate(event.pitch, 4, chanceE) 	|| probabilityGate(event.pitch, 5, chanceF) 	||
			probabilityGate(event.pitch, 6, chanceFs)	|| probabilityGate(event.pitch, 7, chanceG) 	||
			probabilityGate(event.pitch, 8, chanceGs) 	|| probabilityGate(event.pitch, 9, chanceA) 	||
			probabilityGate(event.pitch, 10, chanceAs) 	|| probabilityGate(event.pitch, 11, chanceB))

			{
				event.send();
			}
	}
}

function probabilityGate(pitch, note, notechance) {
	return (pitch % 12 == note && Math.floor(Math.random() * 100) <= notechance) ? true : false;
}

// GUI
var PluginParameters = [
	{name:"Overall Chance", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"C", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"C#", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"D", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"D#", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"E", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"F", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"F#", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"G", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"G#", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"A", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"A#", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"B", type:"lin", minValue:0, maxValue:100, numberOfSteps:100, defaultValue:50, unit:"%"},
	{name:"Velocity min", type:"lin", minValue:0, maxValue:127, numberOfSteps:127, defaultValue:0},
	{name:"Velocity max", type:"lin", minValue:0, maxValue:127, numberOfSteps:127, defaultValue:127}
	];