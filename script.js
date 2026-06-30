//1.Employee Salary

//Monthly salary: ₹45,000

function getYearlySalary(monthlySalary) {
    return monthlySalary * 12;
}
console.log("Yearly Salary : ₹" + getYearlySalary(45000));

//2.Student Pass or Fail

//Marks: 72

function checkPassFail(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log("Result: " + checkPassFail(72));

//3.Food Bill Calculator

//Burger price: ₹180
//Quantity: 3

function calculateTotalBill(price, quantity) {
    return price * quantity;
}
console.log("Total Bill: ₹" + calculateTotalBill(180, 3));

//4.Welcome Employee

function welcomeEmployee(name) {
    return "Welcome, " + name + "!";
}
department = "IT";
console.log(welcomeEmployee("Sharvesh"));
console.log("Department : " + department);

//5.Shopping Discount

//Price: ₹5000
//Discount: ₹500

function calculateDiscountedPrice(price, discount) {
    return price - discount;
}
console.log("Final Amount: ₹" + calculateDiscountedPrice(5000, 500));

//6.Company Login

console.log("Login Successful");
console.log("Loading Dashboard...");

//7.Food Delivery

console.log("Order Received");
console.log("Preparing Food");
console.log("Out for Delivery");
console.log("Delivered");

//8.Lucky Draw

console.log("10%");
console.log("20%");
console.log("50%");
console.log("Better Luck Next Time");

//9.Employee Bonus

function bonus(salary) {
    return function(bonusAmount) {
        return salary + bonusAmount;
    };
}
console.log("Total Salary: ₹" + bonus(50000)(5000));

//10.Merge Employee Details

let employeePersonal = {
    name: "Sharvesh",
    age: 22,
    city: "Bangalore"
};

let employeeOffice = {
    employeeId: 101,
    department: "IT",
    salary: 40000
};


// Merge objects using Spread Operator
let employeeDetails = {
    ...employeePersonal,
    ...employeeOffice
};


console.log(employeeDetails);

//11.Shopping Cart 

let cart1 = [
    "Mobile",
    "Laptop"
];

let cart2 = [
    "Headphone",
    "Smart Watch"
];


// Merge both carts using Spread Operator
let shoppingCart = [
    ...cart1,
    ...cart2
];


console.log(shoppingCart);

//12.Student Marks

function student(name, ...marks) {

    let total = marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

    let average = total / marks.length;


    console.log(`
Student : ${name}
Total Marks : ${total}
Average : ${average}
    `);
}


// Function Call
student("Sharvesh", 90, 85, 88, 95);

//13.Product Details

let product = {
    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20
};


// Object Destructuring
let { name, price } = product;


console.log("Name :", name);
console.log("Price :", price);

//14.Customer Details

let customer = [
    101,
    "Sharvesh",
    "Bangalore",
    8754645699
];


// Array Destructuring
let [id, name, city] = customer;


console.log("ID :", id);
console.log("Name :", name);
console.log("City :", city);

//15.Add Product

let cart = [
    "Mobile",
    "Laptop"
];


// Add product using push()
cart.push("Headphone");


console.log(cart);

//16.Remove Last Product

// Remove last product using pop()

cart.pop();
console.log(cart);

//17.Replace Employee

let employees = [
    "Nihal",
    "Manoj",
    "Deepak",
    "Suresh"
];


// Replace Deepak with Sharvesh using splice()
employees.splice(2, 1, "Sharvesh");


console.log(employees);

//18.Search Product

let products = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "Laptop"
];


// Check product availability using includes()
let result = products.includes("Laptop");


console.log(result);

//19.Employee Ranking

let salaries = [
    25000,
    45000,
    30000,
    70000
];


// Sort salaries from lowest to highest
salaries.sort((a, b) => a - b);


console.log(salaries);

//20.Reverse Chat Messages

let messages = [
    "Hi",
    "Hello",
    "How are you?",
    "Good Morning"
];


// Display latest message first
messages.reverse();


console.log(messages);




//Additional Task

// Console Based Employee Management System

let employees = [];

// Add Employee
function addEmployee(id, name, department, salary) {
    let employee = {
        id,
        name,
        department,
        salary
    };

    employees.push(employee);
    console.log("Employee Added Successfully");
}


// View Employees
function viewEmployees() {
    console.log("\nEmployee List:");

    employees.forEach(emp => {
        console.log(emp);
    });
}


// Search Employee by ID
function searchEmployeeById(id) {
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        console.log("\nEmployee Found:");
        console.log(employee);
    } else {
        console.log("Employee Not Found");
    }
}


// Calculate Salary + Bonus
function calculateSalaryBonus(id, bonus) {

    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        let totalSalary = employee.salary + bonus;

        console.log(`
Employee : ${employee.name}
Salary   : ${employee.salary}
Bonus    : ${bonus}
Total    : ${totalSalary}
        `);

    } else {
        console.log("Employee Not Found");
    }
}


// Remove Employee
function removeEmployee(id) {

    let index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {
        employees.splice(index,1);
        console.log("Employee Removed");
    }
    else {
        console.log("Employee Not Found");
    }
}


// Sort Employees by Salary
function sortEmployeesBySalary() {

    let sorted = [...employees].sort(
        (a,b)=>a.salary-b.salary
    );

    console.log("\nSorted Employees:");

    console.log(sorted);
}


// Find Employee by Name
function findEmployeeByName(name){

    let employee = employees.find(
        emp => emp.name.toLowerCase() === name.toLowerCase()
    );

    if(employee){
        console.log("Employee Found:");
        console.log(employee);
    }
    else{
        console.log("Employee Not Found");
    }
}


// Display Employee Details using Destructuring
function displayEmployeeDetails(id){

    let employee = employees.find(
        emp => emp.id === id
    );

    if(employee){

        let {id,name,department,salary} = employee;

        console.log(`
Employee ID : ${id}
Name        : ${name}
Department  : ${department}
Salary      : ${salary}
        `);

    }
}


// Testing Application

addEmployee(101,"Sharvesh","IT",40000);
addEmployee(102,"Guru","Testing",35000);
addEmployee(103,"Kumar","HR",50000);


// View
viewEmployees();


// Search
searchEmployeeById(102);


// Salary + Bonus
calculateSalaryBonus(101,5000);


// Remove
removeEmployee(103);


// Sort
sortEmployeesBySalary();


// Find Name
findEmployeeByName("Sharvesh");


// Destructuring
displayEmployeeDetails(101);