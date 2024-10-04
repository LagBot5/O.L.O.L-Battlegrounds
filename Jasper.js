// Timer and Turn based fighting code

let TimeLimit = 0
let countdown
let SelectedFighters
let turn1 = 1
let turn2 = 0
let CurrentPlayer
	let TargetedPlayer
	let SelectedAction
	
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	SelectedFighters = [ Characters[0], Characters [1]]
	print (SelectedFighters)
}

function draw() {
	Fighting()
}

function Fighting() {
	
	let CurrentTime = int(millis()/1000)
	countdown = TimeLimit - CurrentTime
	if (countdown <= 0){
		TurnEnd(SelectedFighters)
		TimeLimit += 5
	}
	
	print(CurrentTime)
}

function TurnEnd( Players ) {
	let Action
		
	Action = SelectedAction
	if (Action){
		CurrentPlayer.action(Action, TargetedPlayer)
	}
	turn1 = (turn1 + 1) % Players.length
	turn2 = (turn2 + 1) % Players.length
	CurrentPlayer = Players[turn1]
	TargetedPlayer = Players[turn2]
	print( "CurrentPlayer : " + CurrentPlayer.name)
	print( "TargetedPlayer : " + TargetedPlayer.name)
	SelectedAction = CurrentPlayer.SkillLibrary[0]
	print ( turn1, turn2)
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
		this.status = 
		this.StatusDur = 
		this. selectedSkills = []
	}
	
	action(Action, TargetedPlayer){
		if (Action.type == 'attack'){
			let dmg
			let p2def
			this.mana -= Action.manacost
			dmg = Action.dmg
			
			if ( this.status && this.statusDur > 0 ) {
				dmg += this.status.dmg
				this.statusDur--
			}	
			if (TargetedPlayer )
			
			
			if (TargetedPlayer.element == Action.element.weakness ){
				dmg = dmg*1.10
			}
			TargetedPlayer.health -= (dmg*((100 - TargetedPlayer.defense)/100))
			print( 'Player2 Health: ' + TargetedPlayer.health , 'mana: ' + this.mana)
		}
		
		if (Action.type == 'buff'){
			this.mana -= Action.manacost
			this.status = Action
			this.statusDur = Action.duration
		}
		
		if (Action.type == 'debuff'){
			this.mana -= Action.manacost
			TargetedPlayer.status = Action
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

