let elements = {
    "elements": {
        "air": {
            name: "Air",
            creatures: [{
                name: "Archangel",
                power: "Power: 2000",
                ultimate: "Ultimate: Wind Justice",
                region: "Region: Heaven's Kingdom",
                image: "archangel.jpg"
            }]
        },
        "fire": {
            name: "Fire",
            creatures: [{
                name: "Fire Guardian",
                power: "Power: 1000",
                ultimate: "Ultimate: Fire Ball",
                region: "Region: Dark Dungeon",
                image: "fire-guardian.jpg"
            }]
        },
        "water": {
            name: "Water",
            creatures: [{
                name: "Mermaid",
                power: "Power: 675",
                ultimate: "Ultimate: Allure",
                region: "Region: Ocean Abbys",
                image: "mermaid.jpg"
            }]
        },
        "earth": {
            name: "Earth",
            creatures: [{
                name: "Forest God",
                power: "Power: 5000",
                ultimate: "Ultimate: Nature's Grasp",
                region: "Region: Cursed Forest",
                image: "forest-god.jpg"
            }]
        }
    }
}
console.log("elements intialized")

function renderAllElementsInHTML(elements) {
    let title = $('<h1>Choose Your Destiny</h1>')
    let containerDiv = $('.container')
    let containersDiv1 = $('<div class="containers">')
    let firstDiv = $('<div id ="air" class="first clickable">')
    let secondDiv = $('<div  id ="fire" class="second clickable">')
    let thirdDiv = $('<div  id ="water" class="third clickable">')
    let fourthDiv = $('<div  id ="earth" class="fourth clickable">')
    $('#elementsContainer').prepend(title)
    containersDiv1.append(firstDiv).append(secondDiv)
    let containersDiv2 = $('<div class="containers">')
        containersDiv2.append(thirdDiv).append(fourthDiv)
    $('.container').append(containersDiv1).append(containersDiv2)

}

function renderSingleElementInHTML(element) {
    let elementProps = elements['elements'][element]
    let elementCreatures = elementProps['creatures']
    $.each(elementCreatures, function (key, value) {
        let creatureName = value['name']
        console.log(creatureName)
        let creatureLi = $(`<li><input class="radio-button checked" name="selector" type="radio" value=${creatureName}>
           <label>${creatureName}</label></li>`)
        $('.creatures').append(creatureLi)
        $('.center-after-click').append($(`<img id="creature-image" src=" images/${creatureName.toLowerCase()}.jpg" alt="">`))

        let creaturePropsName = $('<p id="creature-name"></p>').text(value.name)
        let creaturePropsPower = $('<p id="creature-power"></p>').text(value.power)
        let creaturePropsUltimate = $('<p id="creature-ultimate"></p>').text(value.ultimate)
        let creaturePropsRegion = $('<p id="creature-region"></p>').text(value.region)
        $('#right-after-click').append(creaturePropsName).append(creaturePropsPower)
            .append(creaturePropsUltimate).append(creaturePropsRegion)
        let backDiv = $('.back-button')
        let buttonBack = $('<button id="backToElements">Back to Elements</button>')
        backDiv.append(buttonBack)

    })

}

renderSingleElementInHTML('air')
//renderAllElementsInHTML(elements)