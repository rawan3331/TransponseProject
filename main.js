// Vehicle class
class Vehicle {
  constructor(name, manufacturer, id) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
  }
}

// Car class inheriting from Vehicle
class Car extends Vehicle {
  constructor(name, manufacturer, id, carType) {
    super(name, manufacturer, id);
    this.carType = carType;
  }
}

// Plane class inheriting from Vehicle
class Plane extends Vehicle {
  constructor(name, manufacturer, id, planeType) {
    super(name, manufacturer, id);
    this.planeType = planeType;
  }
}

// Employee class
class Employee {
  constructor(name, id, dateOfBirth) {
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
  }
}

// Driver class inheriting from Employee
class Driver extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

// Pilot class inheriting from Employee
class Pilot extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

// Reservation class
class Reservation {
  constructor(reservationDate, employeeId, vehicleId, reservationID) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehicleId = vehicleId;
    this.reservationID = reservationID;
  }
}

// Create vehicle objects
const car1 = new Car("Toyota Camry", "Toyota", 1, "gas");
const car2 = new Car("Tesla Model S", "Tesla", 2, "electric");
const car3 = new Car("Honda Civic", "Honda", 3, "gas");
const plane1 = new Plane("Boeing 747", "Boeing", 4, "type 1");
const plane2 = new Plane("Airbus A380", "Airbus", 5, "type 2");

// Create reservations
const reservations = [];

function createReservation(employeeId, vehicleId) {
  const employee = getEmployeeById(employeeId);
  const vehicle = getVehicleById(vehicleId);

  if (employee instanceof Pilot && vehicle instanceof Car) {
    console.log("Pilots cannot be assigned to cars.");
  } else if (employee instanceof Driver && vehicle instanceof Plane) {
    console.log("Drivers cannot be assigned to planes.");
  } else {
    const reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
    reservations.push(reservation);
    console.log("Reservation created:", reservation);
  }
}
// retrieve an employee object by ID
function getEmployeeById(employeeId) {
  return employeeArray.find((employee) => employee.id === employeeId);
}

  //  retrieve a vehicle object by ID
function getVehicleById(vehicleId) {
  return vehicleArray.find((vehicle) => vehicle.id === vehicleId);
}

// Example employee and vehicle arrays
const employeeArray = [
  new Driver("Driver 1", 1, "1990-01-01", "DL1"),
  new Driver("Driver 2", 2, "1995-02-02", "DL2"),
  new Pilot("Pilot 1", 3, "1985-03-03", "PL1"),
  new Pilot("Pilot 2", 4, "1987-04-04", "PL2"),
];
const vehicleArray = [car1, car2, car3, plane1, plane2];

// Test the createReservation function
createReservation(1, 1); 
createReservation(3, 4); 

// Print reservations using map function
reservations.map((reservation) => console.log(reservation));