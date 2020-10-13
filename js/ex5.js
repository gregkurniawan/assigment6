const words = [
    {
        term: "Procrastination",
        definition: "Avoidance of doing a task that needs to be accomplished"
    },
    {
        term: "Tautology",
        definition: "Logical argument constructed in such a way that it is logically irrefutable"
    },
    {
        term: "Oxymoron",
        definition: "Figure of speech that juxtaposes elements that appear to be contradictory"
    }
];

const dlElement = document.createElement("dl");

words.forEach(word => {
    const dtElement = document.createElement("dt");
    const strongElt = document.createElement("strong");
    strongElt.textContent = word.term;
    const ddElement = document.createElement("dd");
    ddElement.textContent = word.definition;

    dtElement.appendChild(strongElt);
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});

document.getElementById("content").appendChild(dlElement);