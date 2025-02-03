// Characters
class element {
	constructor(name, strength, weakness) {
		this.Element = name
		this.strength = strength
		this.weakness = weakness
	}
}
class Character {
	constructor(name, fightingStyle, element, health, defense, mana, img) {
		this.name = name
		this.fightingStyle = fightingStyle
		this.element = element
		this.health = health
		this.defense = defense
		this.mana = mana
		this.img = img
 		this.skills = []
	}
	
	selectSkill(skill) {
		this.skills.push(skill)			
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
