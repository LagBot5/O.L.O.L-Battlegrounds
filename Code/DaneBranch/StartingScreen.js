// Starting Screen
function StartingGraphic() {
	let text1 = "2 Player"
	let textX = 210
	background("white");
	
	fill("#0A12B6")
	rect(100, 600, 250, 90)
	rect(100, 480, 400, 90)
	rect(100, 360, 400, 90)

	
	fill("black")
	textSize(120)
	text("Lourdes", 410, 140)
	text("Battlegrounds", 240, 280)
	
	if (mouseX > 100 && mouseX < 100 + 400 && mouseY > 480 && mouseY < 480 + 90) {
		text1 = "Coming Soon"
		textX = 150
	}

	fill("white")
	textSize(50)
	text("Tutorial", 140, 660)
	text("1 Player", 210, 420)
	text(text1, textX, 540)
}

function StartingButtons() {
	if (mouseX > 100 && mouseX < 100 + 400 && mouseY > 360 && mouseY < 360 + 90) {
		current_screen = SELECTION_SCREEN
	}
}
