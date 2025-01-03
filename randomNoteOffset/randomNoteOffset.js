/*
        random note offset, swing-like MIDI effect for Logic pro's Scripter, by Mick Broer
*/

var NeedsTimingInfo = true;

var noteOnOffsets = {};  

function HandleMIDI(event) {
    if (event instanceof NoteOn) {
        let maxDelay = GetParameter("Max Random Delay");

        let offset = Math.random() * maxDelay;

        let key = event.pitch + ":" + event.channel;

        if (!noteOnOffsets[key]) {
            noteOnOffsets[key] = [];
        }
        noteOnOffsets[key].push(offset);

        event.sendAfterBeats(offset);
    }
    else if (event instanceof NoteOff) {
        let key = event.pitch + ":" + event.channel;

        if (noteOnOffsets[key] && noteOnOffsets[key].length > 0) {
            let offset = noteOnOffsets[key].shift();
            event.sendAfterBeats(offset);

            if (noteOnOffsets[key].length === 0) {
                delete noteOnOffsets[key];
            }
        } else {
            event.send();
        }
    }
    else {
        event.send();
    }
}

var PluginParameters = [
    {
        name: "Max Random Delay",
        type: "lin",
        minValue: 0.0,
        maxValue: 1.0,
        numberOfSteps: 100,
        defaultValue: 0.125, // 1/8 note
        unit: " beats"
    }
];