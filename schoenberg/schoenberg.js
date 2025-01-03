/*
        Schoenberg, random 12-tone MIDI effect for Logic pro's Scripter, by Mick Broer
*/
var NeedsTimingInfo = true;
var twelveTone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//randomize notes
scramble(twelveTone);

function scramble(array) {
    var currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    array.unshift(0);
}


function HandleMIDI(event) {
    var startPitch = event.pitch;
    var info = GetTimingInfo();
    event.send();
    for (var i = 1; i < 12; i++){
        event.pitch = startPitch + twelveTone[i];
        var delay = GetParameter("time");
        event.sendAfterBeats((i) * getTime(delay));
    }
}

function ParameterChanged () {
    if (GetParameter("randomize twelvetone")){
        scramble(twelveTone);
    }
}


//Function copied from Logic Pro's stock Note Repeater script
function getTime(index) {

    var convertedValue = 1;
    
    switch(index) {
        case 0:
            convertedValue = .166; //1/16T
            break;
        case 1:
            convertedValue = .25;  //1/16
            break;
        case 2:
            convertedValue = .375;  //1/16.
            break;
        case 3: 
            convertedValue = .333; //1/8T
            break;
        case 4: 
            convertedValue = .5;  //1/8
            break;
        case 5:
            convertedValue = .75; //1/8.
            break;
        case 6: 
            convertedValue = .666; //1/4T
            break;
        case 7:
            convertedValue = 1; //1/4
            break;
        case 8: 
            convertedValue = 1.5; //1/4.
            break;
        case 9:
            convertedValue = 1.333; //1/2T
            break;
        case 10: 
            convertedValue = 2; //1/2
            break;
        case 11:
            convertedValue = 3; //1/2.
            break;
        default:
            Trace("error in getTime()");
    }
    
    return convertedValue;
}


var PluginParameters = [{
    name: "randomize twelvetone", 
    type: "momentary", 
},
{
    name:"time", type:"menu", 
    valueStrings:["1/16 T", "1/16", "1/16 .", "1/8 T", "1/8", "1/8 .", "1/4 T", "1/4", "1/4 .", "1/2 T", "1/2", "1/2 ."], 
    defaultValue:5, 
    numberOfSteps:11
}
] 
