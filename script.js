let height = document.getElementById("height")
let weight = document.getElementById("weight")
let submit = document.getElementById("submit")
let hasil = document.getElementById("hasil")

function BMI(height,weight) {
    let calculate = weight/((height/100)**2)
    return calculate.toFixed(1)
}

submit.addEventListener("click", (event) => {
    let tinggi = parseInt(height.value)
    let berat = parseInt(weight.value)
    let calculateBMI = BMI(tinggi,berat)
    if (calculateBMI < 18.5) {
        hasil.innerHTML = `<p>Your BMI is <b>${calculateBMI}</b> which means You are <b>Underweight</b></p>`
    }
    else if (calculateBMI >= 18.5 || calculateBMI < 25) {
        hasil.innerHTML = `<p>Your BMI is <b>${calculateBMI}</b> which means You are <b>Normal weight</b></p>`
    }
    else if (calculateBMI >= 25 || calculateBMI < 30) {
        hasil.innerHTML = `<p>Your BMI is <b>${calculateBMI}</b> which means You are <b>Overweight</b></p>`
    }
    else if (calculateBMI >= 30) {
        hasil.innerHTML = `<p>Your BMI is <b>${calculateBMI}</b> which means You are <b>Obesity</b></p>`
    }
    event.preventDefault()
})
