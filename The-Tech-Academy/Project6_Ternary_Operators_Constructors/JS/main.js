// Constructor function that creates a car object
function Car(maker, model, color, year) {
    this.carMaker = maker;
    this.carModel = model;
    this.carColor = color;
    this.carYear = year;
}

// Function that is called when the user hits submit, creates car object and prints it 
function Create_Car() {
    // Gets the input values and saves them as variables  
    var CarMaker = document.getElementById("CarMaker").value;
    var CarModel = document.getElementById("CarModel").value;
    var CarColor = document.getElementById("CarColor").value;
    var CarYear = document.getElementById("CarYear").value;

    // Nested call to the constructor function that creates a car based off input variables
    var UsersCar = new Car(CarMaker, CarModel, CarColor, CarYear);

    // Prints out the car object created by the user
    document.getElementById("Result").innerHTML = "{ Car Maker: " + UsersCar.carMaker + ", Car Model: " +
        UsersCar.carModel + ", Car Color: " + UsersCar.carColor + ", Car Year: " + UsersCar.carYear + " }";
}