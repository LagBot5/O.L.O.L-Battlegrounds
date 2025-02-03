// Skills
let FireGetsuga
let Amaterasu
let SuperSaiyan
let FinalKamehameha
let Coffee
let Smash
let BadmintonDefense
let Scooter
let pickedSkill

class skill{
	constructor (name, dmg, manacost, element, type, status, x, y){
		this.name = name
		this.dmg = dmg
		this.manacost = manacost
		this.element = element
		this.type = type
		this.status = status
		this.positionX = x
		this.positionY = y
	}
}

// create statuses later
// class status{
// 	constructor( name, dmg, def, duration)
// 	}
// }

let skills = [ 
	//Dante
	FireGetsuga = new skill('FireGetsuga', 20, 15, Element[1], 'attack', 0, 100, 100),
	Amaterasu = new skill('Amaterasu', 5, 15, Element[1], 'attack', 0, 100, 200),
	SuperSaiyan = new skill('SuperSaiyan', 0, 20, Element[0], 'buff', 0, 100, 300),
	FinalKamehameha = new skill('FinalKamehameha', 75, 40, Element[0], 'attack', 0),
	// add charge up time for finalKamehameha
	
	// Mr Lam
	Coffee = new skill('Coffee', 0, 20, Element[0], 'buff', 0),
	Smash = new skill('Smash', 15, 10, Element[4], 'attack', 0),
	BadmintonDefense = new skill('BadmintonDefense', 0, 15, Element[0], 'buff', 0 ),
	Scooter = new skill('Scooter',20, 15, Element[4], 'attack', 0 ),
	
]
