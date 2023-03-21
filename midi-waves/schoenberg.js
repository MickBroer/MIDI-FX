
function scramble(array) {
    var currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

twelveTone = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
scramble(twelveTone);
function HandleMIDI(event) {
    var startPitch = event.pitch;
    
    for (var i = 0; i < 12; i++){
        var delay = GetParameter("delay");
        event.pitch = startPitch + twelveTone[i];
        event.sendAfterMilliseconds(delay * i);
        NoteOff(event);
    }
}

function ParameterChanged () {        //Function called when a UI parameter is changed
    if (GetParameter("randomize twelvetone")){
        scramble(twelveTone);
    }
}

var PluginParameters = [{
    name: "randomize twelvetone", 
    type: "momentary", 
},
{
    name: "delay", 
    type: "lin", 
    minValue: 0, 
    maxValue: 10000, 
    numberOfSteps: 100, 
    defaultValue: 100, 
    unit: "ms"
}]