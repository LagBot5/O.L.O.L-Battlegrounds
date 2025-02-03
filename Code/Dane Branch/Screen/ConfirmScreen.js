// Confirm Screen
function AbilityGraphic() {
	let rectX = 130
	let rectY = 500
	let rectSize = 190
	background("#FFD83C");
	fill("#0A12B6")
	rect(30, 30, 1140, 740, 50)

	fill("#091095")
	rect(70, 400, 1060, 350, 50)

	// Skill List
	fill("grey")
	rect(800, 100, 200, 250, 5)
	fill("black")
	textSize(40)
	text("Skills", 850, 150)
	textSize(20)

	if (currentPlayer.skills[0]) {
		text(currentPlayer.skills[0].name, 820, 200)
	}

	if (currentPlayer.skills[1]) {
		text(currentPlayer.skills[1].name, 820, 250)
	}

	if (currentPlayer.skills[2]) {
		text(currentPlayer.skills[2].name, 820, 300)
	}

	// Text
	fill("white")
	textSize(50)
	text("Crusaders", 490, 100)
	circle(600, 250, 200)
	text("Choose 3 Skills", 420, 470)

	// Skill Boxes
	let skillBoxWidth = 190
	let skillBoxHeight = 190
	let skillBoxEdge = 20
	skills.forEach(skills => {
		fill("white")
		rect(skill.x, skill.y, skillBoxWidth, skillBoxHeight, skillBoxEdge)			
	})
		
	// Return Box
	fill("darkred")
	rect(50, 330, 150, 60, 20)
	fill("black")
	textSize(30)
	text("Return", 80, 370)

	// Confirm
	if (currentPlayer.skills[2]) {
		fill('green')
		rect(980, 330, 150, 60, 20)
		fill('black')
		textSize(30)
		text("Confirm", 1000, 370)
	}
}

function AbilityButtons() {
	let rectX = 130
	let rectY = 500
	let rectSize = 300

	// Return Button
	if (mouseX > 50 && mouseX < 50 + 150 && mouseY > 330 && mouseY < 330 + 60) {
		current_screen = SELECTION_SCREEN
	}

	// Confirm Button
	if (currentPlayer.skills[2]) {
		if (mouseX > 980 && mouseX < 950 + 150 && mouseY > 330 && mouseY < 330 + 60) {
			if(Player1 == Dante || Lam){
				currentPlayer = Player2
				current_screen = SELECTION_SCREEN
			}
			else {
			current_screen = PLAYING_SCREEN
		}
		}
	}

	if (currentPlayer.skills[2]){
		print("no More")
	}
	
	else {
	// Dante Skills
	if (currentPlayer == Dante) {
		let duplicate = currentPlayer.skills.find((skill) => skill.name == skills.name)

		skills.forEach(skill =>  {
			if (mouseX > skill.x && mouseX < skill.x + 190 && mouseY > skill.y && mouseY < skill.y + 190) {}
		})
									 
		// Skill One
		if (mouseX > rectX && mouseX < rectX + 190 && mouseY > rectY && mouseY < rectY + 190) {
				currentPlayer.selectSkill(FireGetsuga)
				print(currentPlayer.skills)
		}

		// Skill Two
		if (mouseX > rectX + 250 && mouseX < rectX + 190 + 250 && mouseY > rectY && mouseY < rectY + 190) {
				currentPlayer.selectSkill(Amaterasu)
				print(currentPlayer.skills)
			}

		// Skill Three
		if (mouseX > rectX + 500 && mouseX < rectX + 190 + 500 && mouseY > rectY && mouseY < rectY + 190) {
				currentPlayer.selectSkill(SuperSaiyan)
				print(currentPlayer.skills)
			}
		

		// Skill Four
		if (mouseX > rectX + 750 && mouseX < rectX + 190 + 750 && mouseY > rectY && mouseY < rectY + 190) {
				currentPlayer.selectSkill(FinalKamehameha)
				print(currentPlayer.skills)
		}

		// Lam Skills
	} else if (currentPlayer == Lam) {
		// Skill One
		if (mouseX > rectX && mouseX < rectX + 190 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = currentPlayer.skills.find((skill) => skill.name == Coffee.name)
			if (!duplicate) {
				currentPlayer.selectSkill(Coffee)
				print(currentPlayer.skills)
			}
		}

		// Skill Two
		if (mouseX > rectX + 250 && mouseX < rectX + 190 + 250 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = currentPlayer.skills.find((skill) => skill.name == Smash.name)
			if (!duplicate) {
				currentPlayer.selectSkill(Smash)
				print(currentPlayer.skills)
			}
		}

		// Skill Three
		if (mouseX > rectX + 500 && mouseX < rectX + 190 + 500 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = currentPlayer.skills.find((skill) => skill.name == BadmintonDefense.name)
			if (!duplicate) {
				currentPlayer.selectSkill(BadmintonDefense)
				print(currentPlayer.skills)
			}
		}

		// Skill Four
		if (mouseX > rectX + 750 && mouseX < rectX + 190 + 750 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = currentPlayer.skills.find((skill) => skill.name == Scooter.name)
			if (!duplicate) {
				currentPlayer.selectSkill(Scooter)
				print(currentPlayer.skills)
			}
			}
		}
	}
}
