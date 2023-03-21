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
	maximum = 	GetParameter("Velocity max");

	if (event instanceof NoteOn && Math.floor(Math.random() * 100) <= chance) {
		event.velocity = Math.floor(Math.random() * (maximum - minimum)) + minimum;

		if 	(probabilityGate(event.pitch, 0, chanceC) 	|| 	probabilityGate(event.pitch, 1, chanceCs) 	|| 
			probabilityGate(event.pitch, 2, chanceD) 	|| 	probabilityGate(event.pitch, 3, chanceDs)	||
			probabilityGate(event.pitch, 4, chanceE) 	|| 	probabilityGate(event.pitch, 5, chanceF) 	||
			probabilityGate(event.pitch, 6, chanceFs)	|| 	probabilityGate(event.pitch, 7, chanceG) 	||
			probabilityGate(event.pitch, 8, chanceGs) 	|| 	probabilityGate(event.pitch, 9, chanceA) 	||
			probabilityGate(event.pitch, 10, chanceAs) 	|| 	probabilityGate(event.pitch, 11, chanceB))

			{
				event.send();
			}
	}
		// make sure every noteOff midi-message is sent
		else if (event instanceof NoteOff) {
			event.send();
	}
}

function probabilityGate(pitch, note, notechance) {
	return (pitch % 12 == note && Math.floor(Math.random() * 100) <= notechance) ? true : false;
}

function ParameterChanged(param, value) {
	if (param == 0) {
		if (value == 0){
			SetParameter("C", 50);
			SetParameter("C#", 50);
			SetParameter("D", 50);
			SetParameter("D#", 50);
			SetParameter("E", 50);
			SetParameter("F", 50);
			SetParameter("F#", 50);
			SetParameter("G", 50);
			SetParameter("G#", 50);
			SetParameter("A", 50);
			SetParameter("A#", 50);
			SetParameter("B", 50);
		}
		//C
		else if (value == 1){
			SetParameter("C", 50);
			SetParameter("C#", 0);
			SetParameter("D", 50);
			SetParameter("D#", 0);
			SetParameter("E", 50);
			SetParameter("F", 50);
			SetParameter("F#", 0);
			SetParameter("G", 50);
			SetParameter("G#", 0);
			SetParameter("A", 50);
			SetParameter("A#", 0);
			SetParameter("B", 50);
		}
		//Cm
		else if (value == 2){
			SetParameter("C", 50);
			SetParameter("C#", 0);
			SetParameter("D", 50);
			SetParameter("D#", 50);
			SetParameter("E", 0);
			SetParameter("F", 50);
			SetParameter("F#", 0);
			SetParameter("G", 50);
			SetParameter("G#", 50);
			SetParameter("A", 0);
			SetParameter("A#", 50);
			SetParameter("B", 0);
		}
		//C#
		else if (value == 3){
			
		//D
		else if (value == 3){
			SetParameter("C", 0);
			SetParameter("C#", 50);
			SetParameter("D", 50);
			SetParameter("D#", 0);
			SetParameter("E", 50);
			SetParameter("F", 0);
			SetParameter("F#", 50);
			SetParameter("G", 50);
			SetParameter("G#", 0);
			SetParameter("A", 50);
			SetParameter("A#", 0);
			SetParameter("B", 50);
		}
		//Dm
		else if (value == 4){
			SetParameter("C", 0);
			SetParameter("C#", 50);
			SetParameter("D", 0);
			SetParameter("D#", 50);
			SetParameter("E", 50);
			SetParameter("F", 0);
			SetParameter("F#", 50);
			SetParameter("G", 0);
			SetParameter("G#", 50);
			SetParameter("A", 50);
			SetParameter("A#", 0);
			SetParameter("B", 50);
		}
		//D#
		else if (value == 5){
			SetParameter("C", 50);
			SetParameter("C#", 0);
			SetParameter("D", 50);
			SetParameter("D#", 50);
			SetParameter("E", 0);
			SetParameter("F", 50);
			SetParameter("F#", 0);
			SetParameter("G", 50);
			SetParameter("G#", 50);
			SetParameter("A", 0);
			SetParameter("A#", 50);
			SetParameter("B", 0);
		}
		//D#m
		else if (value == 6){
			SetParameter("C", 0);
			SetParameter("C#", 50);
			SetParameter("D", 0);
			SetParameter("D#", 50);
			SetParameter("E", 0);
			SetParameter("F", 50);
			SetParameter("F#", 50);
			SetParameter("G", 0);
			SetParameter("G#", 50);
			SetParameter("A", 0);
			SetParameter("A#", 50);
			SetParameter("B", 50);
		}
		//E
		else if (value == 7){
			SetParameter("C", 0);
			SetParameter("C#", 50);
			SetParameter("D", 0);
			SetParameter("D#", 50);
			SetParameter("E", 50);
			SetParameter("F", 0);
			SetParameter("F#", 50);
			SetParameter("G", 0);
			SetParameter("G#", 50);
			SetParameter("A", 0);
			SetParameter("A#", 0);
			SetParameter("B", 50);
		}
		//Em
		else if (value == 8){
			SetParameter("C", 0);
			SetParameter("C#", 0);
			SetParameter("D", 50);
			SetParameter("D#", 0);
			SetParameter("E", 50);
			SetParameter("F", 0);
			SetParameter("F#", 50);
			SetParameter("G", 50);
			SetParameter("G#", 0);
			SetParameter("A", 50);
			SetParameter("A#", 0);
			SetParameter("B", 50);
		}
		//F
		else if (value == 9){
			SetParameter("C", 50);
			SetParameter("C#", 0);
			SetParameter("D", 50);
			SetParameter("D#", 0);
			SetParameter("E", 50);
			SetParameter("F", 50);
			SetParameter("F#", 0);
			SetParameter("G", 50);
			SetParameter("G#", 0);
			SetParameter("A", 50);
			SetParameter("A#", 50);
			SetParameter("B", 0);
		}
		//Fm
		else if (value == 10){
			SetParameter("C", 50);
			SetParameter("C#", 50);
			SetParameter("D", 0);
			SetParameter("D#", 50);
			SetParameter("E", 0);
			SetParameter("F", 50);
			SetParameter("F#", 0);
			SetParameter("G", 50);
			SetParameter("G#", 50);
			SetParameter("A", 0);
			SetParameter("A#", 50);
			SetParameter("B", 0);
		}
		//F#
		else if (value == 11){
			SetParameter("C", 0);
			SetParameter("C#", 50);
			SetParameter("D", 0);
			SetParameter("D#", 50);
			SetParameter("E", 0);
			SetParameter("F", 50);
			SetParameter("F#", 50);
			SetParameter("G", 0);
			SetParameter("G#", 50);
			SetParameter("A", 0);
			SetParameter("A#", 50);
			SetParameter("B", 50);
		}
		//F#m
		else if (value == 12){
			SetParameter("C", 0);
			SetParameter("C#", 50);
			SetParameter("D", 50);
			SetParameter("D#", 0);
			SetParameter("E", 50);
			SetParameter("F", 0);
			SetParameter("F#", 50);
			SetParameter("G", 0);
			SetParameter("G#", 50);
			SetParameter("A", 50);
			SetParameter("A#", 0);
			SetParameter("B", 50);
		}
		//G
		else if (value == 13){
			SetParameter("C", 0);
			SetParameter("C#", 0);
			SetParameter("D", 50);
			SetParameter("D#", 0);
			SetParameter("E", 50);
			SetParameter("F", 0);
			SetParameter("F#", 50);
			SetParameter("G", 50);
			SetParameter("G#", 0);
			SetParameter("A", 50);
			SetParameter("A#", 0);
			SetParameter("B", 50);
		}
		//Gm
		else if (value == 14){
			SetParameter("C", 50);
			SetParameter("C#", 0);
			SetParameter("D", 50);
			SetParameter("D#", 50);
			SetParameter("E", 0);
			SetParameter("F", 50);
			SetParameter("F#", 0);
			SetParameter("G", 50);
			SetParameter("G#", 0);
			SetParameter("A", 50);
			SetParameter("A#", 50);
			SetParameter("B", 0);
		}
		//G#
		else if (value == 15){
			SetParameter("C", 50);
			SetParameter("C#", 50);
			SetParameter("D", 0);
			SetParameter("D#", 50);
			SetParameter("E", 0);
			SetParameter("F", 50);
			SetParameter("F#", 0);
			SetParameter("G", 50);
			SetParameter("G#", 50);
			SetParameter("A", 0);
			SetParameter("A#", 50);
			SetParameter("B", 0);
		}
		//G#m
		else if (value == 16){
			SetParameter("C", 0);
			SetParameter("C#", 50);
			SetParameter("D", 0);
			SetParameter("D#", 50);
			SetParameter("E", 50);
			SetParameter("F", 0);
			SetParameter("F#", 50);
			SetParameter("G", 50);
			SetParameter("G#", 50);
			SetParameter("A", 0);
			SetParameter("A#", 50);
			SetParameter("B", 50);
		}
		//A
		else if (value == 17){
			SetParameter("C", 0);
			SetParameter("C#", 50);
			SetParameter("D", 50);
			SetParameter("D#", 0);
			SetParameter("E", 50);
			SetParameter("F", 0);
			SetParameter("F#", 50);
			SetParameter("G", 0);
			SetParameter("G#", 50);
			SetParameter("A", 50);
			SetParameter("A#", 0);
		}
		//Am
		else if (value == 18){
			SetParameter("C", 50);
			SetParameter("C#", 0);
			SetParameter("D", 50);
			SetParameter("D#", 0);
			SetParameter("E", 50);
			SetParameter("F", 50);
			SetParameter("F#", 0);
			SetParameter("G", 50);
			SetParameter("G#", 0);
			SetParameter("A", 50);
			SetParameter("A#", 0);
			SetParameter("B", 50);
		}
		//A#
		else if (value == 19){
			SetParameter("C", 50);
			SetParameter("C#", 0);
			SetParameter("D", 50);
			SetParameter("D#", 50);
			SetParameter("E", 0);
			SetParameter("F", 50);
			SetParameter("F#", 0);
			SetParameter("G", 50);
			SetParameter("G#", 0);
			SetParameter("A", 50);
			SetParameter("A#", 50);
			SetParameter("B", 0);
		}
		//A#m 
		else if (value == 20){
			
		}
  	}
}

// GUI
var PluginParameters = [{
	name:"Key", 
	type:"Menu",
	valueStrings: ["No key",
	"C", "Cm", 
	"C#", "C#m", 
	"D", "Dm", 
	"D#", "D#m", 
	"E", "Em", 
	"F", "Fm", 
	"F#", "Fm", 
	"G", "Gm", 
	"G#", "G#m", 
	"A", "Am", 
	"A#", "A#m", 
	"B", "Bm"],
	defaultValue:0
}, {
	name:"- Probability gate -",
	type:"text"
},	{
	name:"Overall Chance", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:100, 
	unit:"%"
}, 	{
	name:"C", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"C#", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"D", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"D#", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"E", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"F", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"F#", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"G", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"G#", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"A", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"A#", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"B", 
	type:"lin", 
	minValue:0, 
	maxValue:100, 
	numberOfSteps:100, 
	defaultValue:50, 
	unit:"%"
},	{
	name:"----- Velocity -----",
	type:"text"
},	{
	name:"Velocity min", 
	type:"lin", 
	minValue:0, 
	maxValue:127, 
	numberOfSteps:127, 
	defaultValue:0
},	{
	name:"Velocity max", 
	type:"lin", 
	minValue:0, 
	maxValue:127, 
	numberOfSteps:127, 
	defaultValue:127
}];