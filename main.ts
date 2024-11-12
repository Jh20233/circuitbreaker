for (let index = 0; index <= 3; index++) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.showNumber(3 - index)
}
music.play(music.tonePlayable(391, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showString("Go!")
basic.forever(function () {
	
})
