let n = ""
let m = ""
let list = [0, 1, 2, 3, 4, 5, 6, 7]
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
    for (let index = 0; index <= text_list.length - 1; index++) {
        basic.showString("" + (text_list[index]))
        basic.pause(10)
    }
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
})
