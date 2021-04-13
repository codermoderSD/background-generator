var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

css.innerHTML = "linear-gradient(to right, rgb(45, 255, 255), rgb(255, 110, 236));"

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")"

    css.textContent = body.style.background + ";"
}

button.addEventListener('click', function() {
    var random1 = Math.floor(Math.random() * 1000000)
    var random2 = Math.floor(Math.random() * 1000000)

    body.style.background = "linear-gradient(to right, " + "#" + random1 + "," + "#" + random2 + ")"

    css.textContent = body.style.background + ";"
})

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);