// Complete the js code
function Car(make, model) {

	constructor(make,model){
		this.make=make;
		this.model=model
	}
}

function SportsCar(make, model, topSpeed) {

	constructor(make,model,topSpeed){
		super();
		this.make=make;
		this.model=model;
		this.topSpeed=topSpeed;
	}
	
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
