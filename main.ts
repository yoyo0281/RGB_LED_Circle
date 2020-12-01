let n = ""
let m = ""
let strip = neopixel.create(DigitalPin.P12, 8, NeoPixelMode.RGB)
let text_list = ["0", "1", "2", "3", "4", "5", "6", "7"]
basic.forever(function () {
    m = ""
    m = ""
    for (let index = 0; index <= text_list.length - 1; index++) {
        if (m == "") {
            m = text_list[index]
            n = text_list[index + 1]
            text_list[0] = text_list[text_list.length - 1]
        } else {
            text_list[index] = convertToText(m)
            m = n
            n = text_list[index + 1]
        }
    }
    strip.setPixelColor(parseFloat(text_list[0]), neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(parseFloat(text_list[1]), neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(parseFloat(text_list[2]), neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(parseFloat(text_list[3]), neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(parseFloat(text_list[4]), neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(parseFloat(text_list[5]), neopixel.colors(NeoPixelColors.Indigo))
    strip.setPixelColor(parseFloat(text_list[6]), neopixel.colors(NeoPixelColors.Purple))
    strip.setPixelColor(parseFloat(text_list[7]), neopixel.colors(NeoPixelColors.White))
})
