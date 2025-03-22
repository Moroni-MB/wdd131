const chords = {
    C: { name: "C Major", fingering: [0, 1, 0, 2, 3, 0] },
    G: { name: "G Major", fingering: [3, 2, 0, 0, 0, 3] },
    D: { name: "D Major", fingering: [0, 0, 0, 2, 3, 2] },
    A: { name: "A Major", fingering: [0, 2, 2, 2, 0, 0] },
    E: { name: "E Major", fingering: [0, 2, 2, 1, 0, 0] }
};

const selectElement = document.getElementById("chord-select");
const chordNameElement = document.getElementById("chord-name");
const chordDiagramElement = document.getElementById("chord-diagram");
const chordFingeringElement = document.getElementById("chord-fingering");

function displayChord(chordKey) {
    const chord = chords[chordKey];
    
    // Update text info
    chordNameElement.textContent = chord.name;
    chordFingeringElement.textContent = `Fingering: ${chord.fingering.join("-")}`;

    // Update chord diagram
    chordDiagramElement.innerHTML = "";
    chord.fingering.forEach(fret => {
        const stringDiv = document.createElement("div");
        stringDiv.classList.add("string");
        if (fret > 0) {
            stringDiv.textContent = fret;
            stringDiv.classList.add("finger");
        }
        chordDiagramElement.appendChild(stringDiv);
    });
}

// Initial display
displayChord(selectElement.value);

// Event listener for changing chords
selectElement.addEventListener("change", () => {
    displayChord(selectElement.value);
});
