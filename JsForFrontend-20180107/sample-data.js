let elements = {
    "elements":{
        "air": {
            name: "Air",
            creatures: [
                {
                    name: "Archangel",
                    power: "Power: 2000",
                    ultimate: "Ultimate: Wind Justice",
                    region: "Region: Heaven's Kingdom",
                    image: "archangel.jpg"
                },
                {
                    name: "Elemental",
                    power: "Power: 3500",
                    ultimate: "Ultimate: Tunder Storm",
                    region: "Region: Tunders",
                    image: "air-elemental.png"
                }
            ]
        },
        "fire": {
            name: "Fire",
            creatures: [
                {
                    name: "Fire Guardian",
                    power: "Power: 1000",
                    ultimate: "Ultimate: Fire Ball",
                    region: "Region: Dark Dungeon",
                    image: "fire-guardian.jpg"
                },
                {
                    name: "Diablo",
                    power: "Power: ~",
                    ultimate: "Ultimate: Blast Wave",
                    region: "Region: Molten Core",
                    image: "diablo.jpg"
                }
            ]
        }
    }
}

function renderAllElements(element) {
    let elementsJ = elements['elements']

    for(let element in elementsJ){
        console.log(element)
    }
}
function renderSingleElement(element) {
let displsyedElement = elements['elements'][element]
    console.log(displsyedElement['name'].toLowerCase())
    console.log('Creatures:')
    let creatures = displsyedElement['creatures']
    for (let creature of creatures){
    console.log(creature.name)
    }


}
function renderSingleCreature(element,creatureName) {
    let displsyedElement = elements['elements'][element]['creatures']

    let displayedCreature = Object.values(displsyedElement).find(p => p['name'] === creatureName)
    console.log(displayedCreature.name)
    console.log(displayedCreature.power)
    console.log(displayedCreature.ultimate)
    console.log(displayedCreature.region)


}
//renderAllElements(elements);
renderSingleElement('fire');
//renderSingleCreature('fire','Fire Guardian')


