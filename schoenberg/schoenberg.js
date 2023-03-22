/*
        Schoenberg MIDI effect for Logic pro's Scripter, by Mick Broer

        TO-DO: 
        - add parameter for rhythm divisions and remove the delay parameter.
        - add velocity parameters
        - add octave variations
        - add recursion parameter
*/
var twelveTone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function scramble(array) {
    var currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    array.unshift(0);
}

scramble(twelveTone);

function HandleMIDI(event) {
    var startPitch = event.pitch;
    
    for (var i = 0; i < 12; i++){
        var delay = GetParameter("delay");
        event.pitch = startPitch + twelveTone[i];
        var noteOn = new NoteOn(event);
        noteOn.sendAfterMilliseconds(delay * i);
        NoteOff(event);
    }
}

function ParameterChanged () {
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
    type: "exp", 
    minValue: 10, 
    maxValue: 1000, 
    numberOfSteps: 100, 
    defaultValue: 100, 
    unit: "ms"
}]