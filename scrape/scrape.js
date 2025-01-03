/*
        Scrape MIDI effect for Logic pro's Scripter, by Mick Broer
*/

var NeedsTimingInfo = true;

function HandleMIDI(event) {
    if (event instanceof NoteOn) {
        var repeats    = GetParameter("Number of Repeats");
        var startVel   = GetParameter("Start Velocity");
        var endVel     = GetParameter("End Velocity");
        var timeIndex  = GetParameter("Time");

        var velocityStep = 0;
        if (repeats > 1) {
            velocityStep = (endVel - startVel) / (repeats - 1);
        }

        var beatDelay = getTime(timeIndex);

        for (var i = 0; i < repeats; i++) {
            var stepVel = Math.round(startVel + i * velocityStep);

            if (stepVel < 1)   stepVel = 1;
            if (stepVel > 127) stepVel = 127;

            var noteOn = new NoteOn(event);
            noteOn.velocity = stepVel;

            noteOn.sendAfterBeats(i * beatDelay);

            var noteOff = new NoteOff(noteOn);

            noteOff.sendAfterBeats(i * beatDelay + 0.9 * beatDelay);
        }
    }

    else if (event instanceof NoteOff) {
        event.send();
    }
}

function getTime(index) {
    switch (index) {
    	case 0: return 0.015625; // 1/64
        case 1: return 0.03125; // 1/32
        case 2: return 0.0625;  // 1/16
        case 3: return 0.125;   // 1/8
        case 4: return 0.25;    // 1/4
        case 5: return 0.5;     // 1/2
        default:
            Trace("Error in getTime()");
            return 0.125;       // 1/8
    }
}

var PluginParameters = [
    {
        name: "Number of Repeats",
        type: "lin",
        minValue: 1,
        maxValue: 64,
        numberOfSteps: 63,
        defaultValue: 8
    },
    {
        name: "Start Velocity",
        type: "lin",
        minValue: 1,
        maxValue: 127,
        numberOfSteps: 126,
        defaultValue: 40
    },
    {
        name: "End Velocity",
        type: "lin",
        minValue: 1,
        maxValue: 127,
        numberOfSteps: 126,
        defaultValue: 100
    },
    {
        name: "Time",
        type: "menu",
        valueStrings: ["1/64", "1/32", "1/16", "1/8", "1/4", "1/2"],
        defaultValue: 2
    }
];
