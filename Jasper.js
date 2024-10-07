// Timer and Turn based fighting code

let TimeLimit = 2
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
	print (SelectedFighters)
	
	
}

function draw() {
	clear()
	Fighting()
	SelectedFighters = [ Characters[0], Characters [1]]
	DrawBars()
}

function Fighting() {
	
	let CurrentTime = int(millis()/1000)
	countdown = TimeLimit - CurrentTime
	if (countdown <= 0){
		TurnEnd(SelectedFighters)
		TimeLimit += 2
	}
	
	print(CurrentTime)
}


function DrawBars(){
	
	P1HealthBar.draw()
	P1HealthBar.update(SelectedFighters[0].health)
	
	P1ManaBar.draw()
	P1ManaBar.update(SelectedFighters[0].mana)
	
	P2HealthBar.draw()
	P2HealthBar.update(SelectedFighters[1].health)
	
	P2ManaBar.draw()
	P2ManaBar.update(SelectedFighters[1].mana)
}

function TurnEnd( Players ) {
	let Action
	Action = SelectedAction
	if (Action){
		CurrentPlayer.action(Action, TargetedPlayer)
		print( 'Previous Turn: ' + Action.name)
	}
	turn1 = (turn1 + 1) % Players.length
	turn2 = (turn2 + 1) % Players.length
	CurrentPlayer = Players[turn1]
	TargetedPlayer = Players[turn2]
	print( "CurrentPlayer : " + CurrentPlayer.name)
	print( "TargetedPlayer : " + TargetedPlayer.name)
	SelectedAction = CurrentPlayer.SkillLibrary[0]
}

//Class for elements 
class element{
	constructor ( name, weakness){
		this.name = name
		this.weakness = weakness
	}
}


//Class for elements 
class element{
	constructor ( name, weakness){
		this.name = name
		this.weakness = weakness
	}
}


// classSkills
class skill{
	constructor ( name, dmg, manacost, element, type){
		this.name = name
		this.dmg = dmg
		this.manacost = manacost
		this.element = element
		this.type = type
	}
}

class buff extends skill{
	constructor( name, dmg, defense, manacost, element, type, duration ){
		super(name, dmg, manacost, element, type)
		this.defense = defense
		this.duration = duration
	}
}

let neutral
let fire
let water
let earth
let air


//Calling Objects
let elements = [
	neutral = new element ('neutral', 'none'),
	fire = new element ( 'fire', 'water' ),
	water = new element ( 'water', 'earth' ),
	earth = new element ('earth', 'air'),
	air = new element ( 'air', 'fire')
]


let skills = [ 
	
	//GLobal Skills
	new skill('attack', 10, -5, neutral, 'attack'),
	new buff('defense', 0, 30, -5, neutral, 'buff', 2),
	new buff('rest', 0, 0, -30, neutral,'buff', 0, 1 ),
	
	//Dante
	new skill('FireGetsuga', 20, 40, fire, 'attack'),
	new skill('Amaterasu', 30, 50, fire, 'attack'),
	new buff('SuperSaiyan', 10, -10, 20, neutral, 'buff', 2),
	new skill('FinalKamehameha', 75, 80, neutral, 'attack'),
	// add charge up time for finalKamehameha
	
	// Mr Lam
	new buff('Coffee', 7, 4,  15, neutral, 'buff', 3),
	new skill('Smash', 15, 25, air, 'attack'),
	new buff('BadmintonDefense', 0, 20, 20, neutral, 'buff', 3),
	new skill('Scooter',20, 15, air, 'attack')
]

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
		this.statusDur = 
		this. selectedSkills = []
	}
	
	action(Action, TargetedPlayer){
		print(this.SkillLibrary)
		if (Action.type == 'attack'){
			//Variables
			let dmg
			let p2def
			dmg = Action.dmg
			p2def = TargetedPlayer.defense
			
			//Algorithm
			this.mana -= Action.manacost
			if (TargetedPlayer.element.weakness == Action.element.name ){
				print("weaknessEnabled")
				dmg = dmg*1.10
			}
			if (this.statusDur > 0){
				dmg += this.status.dmg	
				this.statusDur --
				print('CurrentStatus: True')
				print("buffDur:" + this.statusDur)
			}
			if (TargetedPlayer.statusDur > 0){
				p2def += TargetedPlayer.status.defense
				TargetedPlayer.statusDur--
				print('TargetedStatus: True')
				print("buffDur:" + this.statusDur)
			}
			
			TargetedPlayer.health -= Math.round(dmg*((100 - p2def)/100))
			print( 'Player2 Health: ' + TargetedPlayer.health , 'mana: ' + this.mana)
		}
		
		
		if (Action.type == 'buff'){
			if (this.statusDur <= 0 || !this.status){
				this.mana -= Action.manacost
				this.status = Action
				this.statusDur = Action.duration
			}
			else {
				this.statusDur--
				TargetedPlayer.statusDur--
				print("buff refused", "buffDur:" + this.statusDur)
			}
		}
		
		//Debuffs/DOTs
		// if (Action.type == 'debuff'){
		// 	this.mana -= Action.manacost
		// 	TargetedPlayer.status = Action
		// }
	}
}

let Characters = [
	new Character( 'Dante', 'Warror', fire, 100, 10, 80, 'not here yet', skills[3], skills[4], skills[5], skills[6] ),
	new Character( 'Mr. Lam', 'Mage', air, 100, 10, 80, 'not here yet', skills[7], skills[8], skills[9], skills[10])
]

//HealthBar and ManaBar
class bar {
	constructor(colour, w, h, x, y) {
		this.colour = colour
		this.w = w
		this.barlength = w
		this.h = h
		this.x = x
		this.y = y
	}

	draw() {
		fill(this.colour)
		rect(this.x, this.y, this.barlength, this.h)
	}
}

class HealthBar extends bar {
	constructor(colour, w, h, x, y) {
		super(colour, w, h, x, y)
	}

	draw() {
		super.draw()
	}

	update(HealthValue) {
		if (HealthValue <= 0) {
			HealthValue = 0
		}
		this.barlength = this.w * (HealthValue / 100)
	}
}

class ManaBar extends bar {
	constructor(colour, w, h, x, y) {
		super(colour, w, h, x, y)
	}

	draw() {
		super.draw()
	}

	update(ManaValue) {
		if (ManaValue <= 0) {
			ManaValue = 0
		}
		this.barlength = this.w * (ManaValue / 80)
	}
}

let Bars = [
	P1HealthBar = new HealthBar('green', 300, 50, 50, 50),
	P2HealthBar = new HealthBar('green', -300, 50, 1000, 50),
	P1ManaBar = new ManaBar('blue', 250, 30, 50, 120),
	P2ManaBar = new ManaBar('blue', -250, 30, 1000, 120)

]

