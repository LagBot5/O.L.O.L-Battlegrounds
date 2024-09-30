// Timer and Turn based fighting code

let TimeLimit = 10
	let countdown

function draw() {
	SelectedFighters = [ Characters[0], Characters [1]]
	Fighting()
}

function Fighting() {
	let CurrentTime = int(millis()/1000)
	countdown = TimeLimit - CurrentTime
	if (countdown <= 0){
		TurnEnd(SelectedFighters)
		print('turnEnd')
		TimeLimit += 10
	}
	print(CurrentTime)
}

function TurnEnd(Players) {
	let turn1 = 0
	let turn2 = 1
	let Action
	let CurrentPlayer
	let TargetedPlayer
	

		CurrentPlayer = Players[turn1]
		TargetedPlayer = Players[turn2]
		Action = CurrentPlayer.SkillLibrary[0]
		CurrentPlayer.action(Action)
		turn1 = ( turn1 + 1 ) % Players.length 
		turn2 = ( turn2 + 1 ) % Players.length
		print ('turn end')
}


// Skills code

class skill{
	constructor ( name, dmg, manacost, element, type, status){
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
	new skill('FireGetsuga', 20, 15, Element[1], 'attack', 0),
	new skill('Amaterasu', 5, 15, Element[1], 'attack', 0),
	new skill('SuperSaiyan', 0, 20, Element[0], 'buff', 0),
	new skill('FinalKamehameha', 75, 40, Element[0], 'attack', 0),
	// add charge up time for finalKamehameha
	
	// Mr Lam
	new skill('Coffee', 0, 20, Element[0], 'buff', 0),
	new skill('Smash', 15, 10, Element[4], 'attack', 0),
	new skill('BadmintonDefense', 0, 15, Element[0], 'buff', 0 ),
	new skill('Scooter',20, 15, Element[4], 'attack', 0 ),
	
]


// Characters Code

class element{
	constructor (name, strength, weakness){
		this.Element = name
		this.strength = strength
		this.weakness = weakness
	}
}

class Character {
	constructor ( name, fightingStyle, element, health, defense, mana, img, skill1, skill2, skill3, skill4){
		this.name = name
		this.fightingStyle = fightingStyle
		this.element = element
		this.health = health
		this.defense = defense
		this.mana = mana
		this.img =img
		this.SkillLibrary = [ skill1, skill2, skill3, skill4]
		this. selectedSkills = []
	}
	
	action(Action){
		if (Action.type == 'attack'){
			print('attack')
		}
		if (Action.type == 'buff'){
			print('buff')
		}
		if (Action.type == 'debuff'){
			print('debuff')
		}
	}
}

let elements = [
	new element ('neutral', 'none', 'none'),
	new element ( 'fire', 'air', 'water' ),
	new element ( 'water', 'fire', 'earth' ),
	new element ('earth', 'water', 'air'),
	new element ( 'air', 'earth', 'fire')
]


let Characters = [
	new Character( 'Dante', 'Warror', elements[1], 100, 10, 80, 'not here yet', skills[0], skills[1], skills[2], skills[3] ),
	new Character( 'Mr. Lam', 'Mage', elements[4], 100, 10, 80, 'not here yet', skills[4], skills[5], skills[6], skills[7])
]
