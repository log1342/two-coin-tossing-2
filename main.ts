input.onButtonPressed(Button.A, function () {
    if (COIN_1 == "heads" && COIN_2 == "heads" || COIN_1 == "tails" && COIN_2 == "tails") {
        player_1 += 1
        basic.showString("player 1 =")
        basic.showNumber(player_1)
    } else {
        player_2 += 1
        basic.showString("player 2 =")
        basic.showNumber(player_2)
    }
})
let player_2 = 0
let player_1 = 0
let COIN_2 = ""
let COIN_1 = ""
COIN_1 = "heads"
COIN_2 = "tails"
player_1 = 0
player_2 = 0
