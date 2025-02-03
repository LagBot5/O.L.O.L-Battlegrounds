// Selection Screen
let Player1
let Player2
let currentPlayer = Player1
let Player = 1
let Dante = new Character('Dante', 'Warror', elements[1], 100, 10, 80, DanteIMG)
let Lam = new Character('Mr. Lam', 'Mage', elements[4], 100, 10, 80, LamIMG)

// Selection Graphic
function SelectionScreenGraphic() {
	let textX = 150
	let textY = 100
	let recty = 430
	let rectx = 100
	background("#FFD83C");
	fill("#0A12B6")
	rect(30, 30, 1140, 740, 50)

	fill("#091095")
	rect(70, 400, 1060, 350, 50)

	fill("white")
	textSize(50)
	rect(rectx, recty, 90, 90, 10)
	rect(rectx + 120, recty, 90, 90, 10)
	rect(rectx + 240, recty, 90, 90, 10)
	rect(rectx + 360, recty, 90, 90, 10)
	text("Crusaders", textX, textY)
	text("Lancers", textX + 700, textY)
	text("VS", textX + 420, 300)
	circle(textX + 120, 250, 200)
	circle(textX + 800, 250, 200)

	fill("black")
	textSize(25)
	text("Dante", rectx + 13, recty + 50)
	text("Lam", rectx + 20 + 120, recty + 50)

	SelectionScreenFunction()
}

let ButtonY = 430
let ButtonX = 100

function SelectionScreenFunction() {
	if (currentPlayer == Player1) {
	//Dante
	if (mouseX > ButtonX && mouseX < ButtonX + 90 && mouseY > ButtonY && mouseY < ButtonY + 90) {
		fill("grey")
		rect(500, 40, 650, 350, 20)
	}

	//Lam
	if (mouseX > ButtonX + 120 && mouseX < ButtonX + 90 + 120 && mouseY > ButtonY && mouseY < ButtonY + 90) {
		fill("grey")
		rect(500, 40, 650, 350, 20)
	}

	if (mouseX > ButtonX + 240 && mouseX < ButtonX + 90 + 240 && mouseY > ButtonY && mouseY < ButtonY + 90) {
		fill("grey")
		rect(500, 40, 650, 350, 20)
	}

	if (mouseX > ButtonX + 360 && mouseX < ButtonX + 90 + 360 && mouseY > ButtonY && mouseY < ButtonY + 90) {
		fill("grey")
		rect(500, 40, 650, 350, 20)
	}
	}
}

function ConfirmCharacter() {
	//Dante
	if (mouseX > ButtonX && mouseX < ButtonX + 90 && mouseY > ButtonY && mouseY < ButtonY + 90) {
		currentPlayer = Dante
		print("Player " + Player, currentPlayer)
		current_screen = CONFIRM_SCREEN
	}

	//Lam
	if (mouseX > ButtonX + 120 && mouseX < ButtonX + 90 + 120 && mouseY > ButtonY && mouseY < ButtonY + 90) {
		currentPlayer = Lam
		print("Player " + Player, Player1)
		current_screen = CONFIRM_SCREEN
	}
}
