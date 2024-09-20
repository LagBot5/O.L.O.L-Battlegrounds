function preload() {
	FireArena = loadImage('game-battle-arena-background-with-hell-landscape-with-stone-circle-platform-hanging-metal-chains_154797-424.avif')
}

function setup() {
	createCanvas(1200, 800);
	background("white");
	FireArena.resize(1200, 600)
	playing()
	
}

function draw() {}

function playing() {
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

// https://openprocessing.org/sketch/2357584

class Health {
	constructor(amount) {
		this.HP = amount
	}
}
