let elementsUrl = 'https://js-retake.firebaseio.com/elements.json'

function getElements() {
    $.get(elementsUrl)
        .then(renderAllElementsInHTML)
        .catch(console.log('Operation unsucces'))
}

getElements()
console.log("elements intialized")

function renderAllElementsInHTML(elements) {
    $('#elementsContainer').css('display', 'block')
    $('.container').empty()

    let containerDiv = $('.container')
    let containersDiv1 = $('<div class="containers">')
    let firstDiv = $('<div id ="air" class="first clickable">')
    let secondDiv = $('<div  id ="fire" class="second clickable">')
    let thirdDiv = $('<div  id ="water" class="third clickable">')
    let fourthDiv = $('<div  id ="earth" class="fourth clickable">')

    containersDiv1.append(firstDiv).append(secondDiv)
    let containersDiv2 = $('<div class="containers">').append(thirdDiv).append(fourthDiv)
    $('.container').append(containersDiv1).append(containersDiv2)
    elementClickEvent(elements)
    backClickEvent()

}

function renderSingleElementInHTML(element) {
    console.log(element)
    let elementCreatures = element['creatures']

    console.log(elementCreatures)
    $.each(elementCreatures, function (key, value) {
        let creatureName = value['name']
        let creatureIndex = key
        console.log(key)
        let creatureLi = $(`<li>
<input class="radio-button" name="selector" type="radio" value=${key}>
           <label>${creatureName}</label>
           </li>`)
        $('.creatures').append(creatureLi)
    })
    console.log(elementCreatures[0])
    let targetElement = element.name.toLowerCase()
    console.log(targetElement)
    let index = 0

    function renderSingleCreatureInHtml(targetElement, index) {
        $('.center-after-click, #right-after-click').empty()
        let creatureProps = elementCreatures[index]
        console.log(creatureProps)
        $('.center-after-click').append($(`<img id="creature-image" src=" images/${creatureProps.image}" alt="">`))

        let creaturePropsName = $('<p id="creature-name"></p>').text(creatureProps.name)
        let creaturePropsPower = $('<p id="creature-power"></p>').text(creatureProps.power)
        let creaturePropsUltimate = $('<p id="creature-ultimate"></p>').text(creatureProps.ultimate)
        let creaturePropsRegion = $('<p id="creature-region"></p>').text(creatureProps.region)
        $('#right-after-click').append(creaturePropsName).append(creaturePropsPower)
            .append(creaturePropsUltimate).append(creaturePropsRegion)
        attachCreatureInfo()
    }

    renderSingleCreatureInHtml(targetElement, [0])

    function attachCreatureInfo() {
        $('.radio-button').on('click', function () {
            $('.radio-button').removeClass('checked')
            $(this).addClass('checked')
            let targetElement = $('#elementInfoTitle').text().toLowerCase()
            console.log(targetElement)
            let creatureToRenderIndex = $(this).prop('value')
            console.log(creatureToRenderIndex)
            renderSingleCreatureInHtml(targetElement, creatureToRenderIndex)
        })
    }

    attachCreatureInfo()
}

function elementClickEvent(elements) {
    $('.second-layout').show()
    $('#air, #fire, #water, #earth').on('click', function () {
        $(this).siblings().css('display', 'none')
        $(this).parent().siblings().css('display', 'none')
        elementName = $(this).prop('id').toLowerCase()
        $('.second-layout').children().empty()
        $('#elementInfoTitle').text(elements[elementName]['name'])
        $('.first-after-click').append($('<ul class="creatures">'))
        renderSingleElementInHTML(elements[elementName])

        console.log(elementName)
    })

}

function backClickEvent() {
    $('#backToElements').on('click', function () {
        $('.second-layout').hide()
        $('.second-layout').children().empty()
        getElements()
    })
}

