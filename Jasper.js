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
