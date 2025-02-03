// mySketch
const STARTING_SCREEN = 0
const SELECTION_SCREEN = 1
const CONFIRM_SCREEN = 2
const PLAYING_SCREEN = 3
let current_screen = STARTING_SCREEN

function preload() {
	FireArena = loadImage('game-battle-arena-background-with-hell-landscape-with-stone-circle-platform-hanging-metal-chains_154797-424.avif')
	DanteIMG = loadImage('Dante.HEIC')
	LamIMG = loadImage('Lam.HEIC')
}

function setup() {
	createCanvas(1200, 800);
	background("white");
	FireArena.resize(1200, 600)
}

function draw() {
	clear()
	switch (current_screen) {
		case STARTING_SCREEN:
			StartingGraphic()
			break;

		case SELECTION_SCREEN:
			SelectionScreenGraphic()
			break;

		case CONFIRM_SCREEN:
			AbilityGraphic()
			break;
		case PLAYING_SCREEN:
			PlayingScreen()

			break;

	}
}

function mouseClicked() {
	switch (current_screen) {
		case STARTING_SCREEN:
			StartingButtons()
			break;

		case SELECTION_SCREEN:
			ConfirmCharacter()
			break;

		case CONFIRM_SCREEN:
			AbilityButtons()
	}
}
