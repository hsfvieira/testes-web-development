console.log("Hello World")

$("#teste").click(function() {
    $(this).hide()
})

function calcPI(iterations) {
    let pi = 0, divisor = 1
    for(i = 0; i <= iterations; i++) {
        pi = pi + (4 / divisor) - (4 / (divisor + 2))
        divisor += 4
    }
    document.getElementById("output1").value = pi.toFixed(10)
}

function getFibList(howMany) {
    let fibList = []
    for(i = 0; i < howMany; i++) {
        fibList[i] = fib(i)
    }
    fibList.shift()
    document.getElementById("output1").value = fibList.join(", ")

    function fib(whichNum) {
        let num1 = 1, num2 = 0, temp, i = 0
        while(i < whichNum) {
            temp = num1
            num1 += num2
            num2 = temp
            i++
        }
        return num2
    }
}

let mLText = "My dead old ~ sat me down to hear some words of wisdom \n" +
    "1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n" +
    "2. He who ~ at the right time can ~ again \n" +
    "3. Always wear ~ ~ in case you're in a ~ \n" +
    "4. Don't use your ~ to wipe your ~ Always have a clean ~ with you";
