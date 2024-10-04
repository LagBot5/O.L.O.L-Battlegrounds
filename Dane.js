// mySketch
const STARTING_SCREEN = 0
const SELECTION_SCREEN = 1
const CONFIRM_SCREEN = 2
const PLAYING_SCREEN = 3
let current_screen = STARTING_SCREEN
// let boss

function preload() {
	FireArena = loadImage('game-battle-arena-background-with-hell-landscape-with-stone-circle-platform-hanging-metal-chains_154797-424.avif')
}

function setup() {
	createCanvas(1200, 800);
	background("white");
	FireArena.resize(1200, 600)
	//boss = new Character('boss', kldsfkljaskfjas)
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

// Selection Screen
let Dante
let Lam
let myCharacter
function ConfirmCharacter() {
	//Dante
	if (mouseX > ButtonX && mouseX < ButtonX + 90 && mouseY > ButtonY && mouseY < ButtonY + 90) {
		myCharacter = Dante = new Character('Dante', 'Warror', elements[1], 100, 10, 80, 'not here yet', skills)
		print(Dante)
		print(myCharacter)
		current_screen = CONFIRM_SCREEN
	}
	
	//Lam
	if (mouseX > ButtonX + 120 && mouseX < ButtonX + 90 + 120 && mouseY > ButtonY && mouseY < ButtonY + 90) {
		myCharacter = Lam = new Character('Mr. Lam', 'Mage', elements[4], 100, 10, 80, 'not here yet', skills)
		print(Lam)
		current_screen = CONFIRM_SCREEN
	}
}

// Playing Screen
function PlayingScreen() {
	image(FireArena, 0, 0)
	fill("black")
	rect(0, 600, 1200, 200)
	fill("#8E6E6E")
	rect(50, 625, 1100, 150)
	fill("grey")
	quad(10, 10, 10, 50, 450, 50, 450, 10)
	quad(740, 10, 740, 50, 1180, 50, 1180, 10)
	fill("red")
	quad(20, 20, 20, 40, 440, 40, 440, 20)
	quad(750, 20, 750, 40, 1170, 40, 1170, 20)
	CharacterIcon()
	basicAttacks()
	skillOne()
	skillTwo()
	skillThree()
}

function CharacterIcon() {
	strokeWeight(3)
	fill("#D9D9D9")
	circle(150, 700, 130)
}

function basicAttacks() {
	strokeWeight(3)
	fill("#D9D9D9")
	circle(300, 700, 130)
	stroke("black")
	line(300, 700, 300, 635)
	line(235, 700, 365, 700)
}

function skillOne() {
	strokeWeight(3)
	fill("#D9D9D9")
	rect(400, 635, 200, 130)
}

function skillTwo() {
	strokeWeight(3)
	fill("#D9D9D9")
	rect(650, 635, 200, 130)
}

function skillThree() {
	strokeWeight(3)
	fill("#D9D9D9")
	rect(900, 635, 200, 130)
}

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

// Skills
let FireGetsuga
let Amaterasu
let SuperSaiyan
let FinalKamehameha
let Coffee
let Smash
let BadmintonDefense
let Scooter

class skill{
	constructor (name, dmg, manacost, element, type, status){
		this.name = name
		this.dmg = dmg
		this.manacost = manacost
		this.element = element
		this.type = type
		this.status = status
	}
}

// create statuses later
// class status{
// 	constructor( name, dmg, def, duration)
// 	}
// }

let skills = [ 
	
	//Dante
	FireGetsuga = new skill('FireGetsuga', 20, 15, Element[1], 'attack', 0),
	Amaterasu = new skill('Amaterasu', 5, 15, Element[1], 'attack', 0),
	SuperSaiyan = new skill('SuperSaiyan', 0, 20, Element[0], 'buff', 0),
	FinalKamehameha = new skill('FinalKamehameha', 75, 40, Element[0], 'attack', 0),
	// add charge up time for finalKamehameha
	
	// Mr Lam
	Coffee = new skill('Coffee', 0, 20, Element[0], 'buff', 0),
	Smash = new skill('Smash', 15, 10, Element[4], 'attack', 0),
	BadmintonDefense = new skill('BadmintonDefense', 0, 15, Element[0], 'buff', 0 ),
	Scooter = new skill('Scooter',20, 15, Element[4], 'attack', 0 ),
	
]

// Characters
class element {
	constructor(name, strength, weakness) {
		this.Element = name
		this.strength = strength
		this.weakness = weakness
	}
}
class Character {
	constructor(name, fightingStyle, element, health, defense, mana, img, skills) {
		this.name = name
		this.fightingStyle = fightingStyle
		this.element = element
		this.health = health
		this.defense = defense
		this.mana = mana
		this.img = img
		this.Skills = skills
 		this.selectedSkills = []
	}
	
	selectSkill(skill) {
		this.selectedSkills.push(skill)			
	}

	action(Action) {
		if (Action.type == 'attack') {
			print('attack')
		}
		if (Action.type == 'buff') {
			print('buff')
		}
		if (Action.type == 'debuff') {
			print('debuff')
		}
	}
}

let elements = [
	new element('neutral', 'none', 'none'),
	new element('fire', 'air', 'water'),
	new element('water', 'fire', 'earth'),
	new element('earth', 'water', 'air'),
	new element('air', 'earth', 'fire')
]

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

	if (myCharacter.selectedSkills[0]) {
		text(myCharacter.selectedSkills[0].name, 820, 200)
	}

	if (myCharacter.selectedSkills[1]) {
		text(myCharacter.selectedSkills[1].name, 820, 250)
	}

	if (myCharacter.selectedSkills[2]) {
		text(myCharacter.selectedSkills[2].name, 820, 300)
	}

	// Text
	fill("white")
	textSize(50)
	text("Crusaders", 490, 100)
	circle(600, 250, 200)
	text("Choose 3 Skills", 420, 470)

	// Skill Boxes
	rect(rectX, rectY, rectSize, rectSize, 5)
	rect(rectX + 250, rectY, rectSize, rectSize, 5)
	rect(rectX + 500, rectY, rectSize, rectSize, 5)
	rect(rectX + 750, rectY, rectSize, rectSize, 5)

	// Return Box
	fill("darkred")
	rect(50, 330, 150, 60, 20)
	fill("black")
	textSize(30)
	text("Return", 80, 370)

	// Confirm
	if (myCharacter.selectedSkills[2]) {
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
	if (myCharacter.selectedSkills[2]) {
		if (mouseX > 980 && mouseX < 950 + 150 && mouseY > 330 && mouseY < 330 + 60) {
			current_screen = PLAYING_SCREEN
		}
	}

	// Dante Skills
	if (myCharacter == Dante) {

		// Skill One
		if (mouseX > rectX && mouseX < rectX + 190 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = myCharacter.selectedSkills.find((skill) => skill.name == FireGetsuga.name)
			if (duplicate) {
			} else {
				myCharacter.selectSkill(FireGetsuga)
				print(myCharacter.selectedSkills)
			}
		}

		// Skill Two
		if (mouseX > rectX + 250 && mouseX < rectX + 190 + 250 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = myCharacter.selectedSkills.find((skill) => skill.name == Amaterasu.name)
			if (duplicate) {
			} else {
				myCharacter.selectSkill(Amaterasu)
				print(myCharacter.selectedSkills)
			}
		}

		// Skill Three
		if (mouseX > rectX + 500 && mouseX < rectX + 190 + 500 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = myCharacter.selectedSkills.find((skill) => skill.name == SuperSaiyan.name)
			if (duplicate) {
			} else {
				myCharacter.selectSkill(SuperSaiyan)
				print(myCharacter.selectedSkills)
			}
		}

		// Skill Four
		if (mouseX > rectX + 750 && mouseX < rectX + 190 + 750 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = myCharacter.selectedSkills.find((skill) => skill.name == FinalKamehameha.name)
			if (duplicate) {
			} else {
				myCharacter.selectSkill(FinalKamehameha)
				print(myCharacter.selectedSkills)
			}
		}

		// Lam Skills
	} else if (myCharacter == Lam) {
		// Skill One
		if (mouseX > rectX && mouseX < rectX + 190 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = myCharacter.selectedSkills.find((skill) => skill.name == Coffee.name)
			if (duplicate) {
			} else {
				myCharacter.selectSkill(Coffee)
				print(myCharacter.selectedSkills)
			}
		}

		// Skill Two
		if (mouseX > rectX + 250 && mouseX < rectX + 190 + 250 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = myCharacter.selectedSkills.find((skill) => skill.name == Smash.name)
			if (duplicate) {
			} else {
				myCharacter.selectSkill(Smash)
				print(myCharacter.selectedSkills)
			}
		}

		// Skill Three
		if (mouseX > rectX + 500 && mouseX < rectX + 190 + 500 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = myCharacter.selectedSkills.find((skill) => skill.name == BadmintonDefense.name)
			if (duplicate) {
			} else {
				myCharacter.selectSkill(BadmintonDefense)
				print(myCharacter.selectedSkills)
			}
		}

		// Skill Four
		if (mouseX > rectX + 750 && mouseX < rectX + 190 + 750 && mouseY > rectY && mouseY < rectY + 190) {
			let duplicate = myCharacter.selectedSkills.find((skill) => skill.name == Scooter.name)
			if (duplicate) {
			} else {
				myCharacter.selectSkill(Scooter)
				print(myCharacter.selectedSkills)
			}
		}
	}
}
