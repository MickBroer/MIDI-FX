/*
    Randomizer MIDI effect for Logic Pro's Scripter, by Mick Broer
*/

function HandleMIDI(event) {
    let chance  = GetParameter("Overall Chance");
    let chanceC  = GetParameter("C");
    let chanceCs = GetParameter("C#");
    let chanceD  = GetParameter("D");
    let chanceDs = GetParameter("D#");
    let chanceE  = GetParameter("E");
    let chanceF  = GetParameter("F");
    let chanceFs = GetParameter("F#");
    let chanceG  = GetParameter("G");
    let chanceGs = GetParameter("G#");
    let chanceA  = GetParameter("A");
    let chanceAs = GetParameter("A#");
    let chanceB  = GetParameter("B");
    let minimum  = GetParameter("Velocity min");
    let maximum  = GetParameter("Velocity max");

    // Only randomize NoteOn events
    if (event instanceof NoteOn && Math.floor(Math.random() * 100) <= chance) {
        // Randomize velocity
        event.velocity = Math.floor(Math.random() * (maximum - minimum)) + minimum;

        // Apply probability gate for each pitch class
        if (probabilityGate(event.pitch,  0, chanceC) ||
            probabilityGate(event.pitch,  1, chanceCs) ||
            probabilityGate(event.pitch,  2, chanceD) ||
            probabilityGate(event.pitch,  3, chanceDs) ||
            probabilityGate(event.pitch,  4, chanceE) ||
            probabilityGate(event.pitch,  5, chanceF) ||
            probabilityGate(event.pitch,  6, chanceFs) ||
            probabilityGate(event.pitch,  7, chanceG) ||
            probabilityGate(event.pitch,  8, chanceGs) ||
            probabilityGate(event.pitch,  9, chanceA) ||
            probabilityGate(event.pitch, 10, chanceAs) ||
            probabilityGate(event.pitch, 11, chanceB)) 
        {
            event.send();
        }
    }
    // Always forward NoteOff events
    else if (event instanceof NoteOff) {
        event.send();
    }
}

function probabilityGate(pitch, note, notechance) {
    return (pitch % 12 === note && Math.floor(Math.random() * 100) <= notechance);
}

var PluginParameters = [
    {
        name: "- Probability gate -",
        type: "text"
    },
    {
        name: "Overall Chance", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 100, 
        unit: "%"
    },
    {
        name: "C", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "C#", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "D", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "D#", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "E", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "F", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "F#", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "G", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "G#", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "A", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "A#", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "B", 
        type: "lin", 
        minValue: 0, 
        maxValue: 100, 
        numberOfSteps: 100, 
        defaultValue: 50, 
        unit: "%"
    },
    {
        name: "----- Velocity -----",
        type: "text"
    },
    {
        name: "Velocity min", 
        type: "lin", 
        minValue: 0, 
        maxValue: 127, 
        numberOfSteps: 127, 
        defaultValue: 0
    },
    {
        name: "Velocity max", 
        type: "lin", 
        minValue: 0, 
        maxValue: 127, 
        numberOfSteps: 127, 
        defaultValue: 127
    }
];
