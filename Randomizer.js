function HandleMIDI(event) {
	if (Math.random() * 100 < GetParameter("Chance")) {
		event.send();
	}
}

var PluginParameters = [{name:"Chance", type:"lin", minValue:1, maxValue:100, numberOfSteps:99, defaultValue:50}];