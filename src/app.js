const doc = {
    bodyfatInput: document.querySelector('#bodyfat'),
    bodymassInput: document.querySelector('#bodymass'),
    calorieInput: document.querySelector('#calorie'),
    calcButton: document.querySelector('#calcButton')
}

const state = {
    calorie: null
}

window.addEventListener('load', () => {
    init()
})

function init() {
    if(doc.calcButton){
        doc.calcButton.addEventListener('click', () => {
            startCalc()
        })
    }
}

function startCalc() {
    let bodyfat = Number(doc.bodyfatInput.value)
    let bodymass = Number(doc.bodymassInput.value)
    state.calorie = calcCalorie(bodyfat, bodymass)
    doc.calorieInput.value = state.calorie
}

function calcCalorie(bodyfat, bodymass) {
    if(bodyfat<=0 || bodymass<=0) {
        throw new Error('Hiba! Hibás bemenet!')
    }
    return 370 + 21.6 * (1-(bodyfat/100)) * bodymass
}

function inputOk(input) {
    let inputStr = String(input)
    if(inputStr.match('[0-9]+')) {
        return true
    }else {
        return false
    }    
}
