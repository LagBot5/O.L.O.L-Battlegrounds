class element{
	constructor (name, strength, weakness){
		this.Element = name
		this.strength = strength
		this.weakness = weakness
	}
}

class Character {
	constructor ( name, fightingStyle, element, health, mana, img, skill1, skill2, skill3, skill4){
		this.name = name
		this.fightingStyle = fightingStyle
		this.element = element
		this.health = health
		this.mana = mana
		this.img =img
		this.skills = [ skill1, skill2, skill3, skill4]
		this. selectedSkills = []
	}
}

let elements = [
	new element ( 'fire', 'air', 'water' ),
	new element ( 'water', 'fire', 'earth' ),
	new element ('earth', 'water', 'air'),
	new element ( 'air', 'earth', 'fire')
]


let Characters = [
	new Character( 'Dante', 'Warror', elements[0], 100, 80, 'not here yet', 'fireball', 'Homemade Flamethrower', 'Gasoline', 'BigFire' ),
	new Character( 'Mr. Lam', 'Mage', elements[4], 100, 80, 'not here yet', 'Coding', 'Smash', 'Defense', 'racket throw')
]
