// class Customer {

//     name;
//     age;
//     address;

//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     getName() {
//         return this.name;
//     }
//     setName(name) {
//         this.name = name;
//     }
// }

// let customer1 = new Customer("HUSH", 30, "Australia");
// console.log(customer1);
// console.log(customer1.getName());


// Output: Customer { name: 'HUSH', age: 30, address: 'Australia' }

//-----------------------------------------------------------------------------------------------------------------------

let customer2 = {
    name: "HUSH",
    age: 30,
    address: "Australia",
    salary: 10000,
    items: [
        {
            id: 1,
            name: "item1",
            price: 100,
            variants: [

                {
                    id: 1,
                    name: "variant1",
                    price: 10
                },
                {
                    id: 2,
                    name: "variant2",
                    price: 20
                },
            ]
        }, {
            id: 2,
            name: "item2",
            price: 200,
        }, {
            id: 3,
            name: "item3",
            price: 300,
        }
    ],
    father: {
        name: "slash",
        age: 60,
        address: "USA"
    }
};

// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items[1]);
// console.log(customer2.father.name);
// console.log (customer2.items[0].variants[1]);

//---------------------------------------------------------------------------------------------------------------------
//DOM (Document Object Model) Manipulation - HTML, CSS, JS
// document.write("<h1>POWER</h1>");

console.log(document.title);


let heading = document.getElementById("heading");
let parammmm = document.getElementById("parrrrra");

// heading.innerHTML = "HUSH";

// console.log(heading);


// let number = 0;
// function increaseValue() {
//     heading.innerText = "SHRADDA"+" "+(++number);
//     console.log("wadi karanna"); 




// }

// function decreaseValue() {
//   heading.innerText = "SHRADDA"+" "+(--number);
//    console.log("adu karanna");

// }

// function changeHeading() {
//     parammmm.innerText =" hey HUSH"+" "+(number--);
//     console.log("adu karanna");


// }
//---------------------------------------------------------------------------------
function changeHeading() {

    let txtInput = document.getElementById("inputText");

    let userInput = txtInput.value;

    console.log(userInput);

    let heading = document.getElementById("heading");

    heading.innerText = userInput;

    // let txtInput =document.getElementById("inputText");
    // console.log(txtInput.value);
    // let heading = document.getElementById("heading");
    // heading.innerText=txtInput.value;
    
}
//---------------------------------------------------------------
function btnSumOnAction() {
    let input01 = document.getElementById("txtInput01").value;
    let input02 = document.getElementById("txtInput02").value;

    let sum = parseInt(input01) + parseInt(input02);
    // let sum = Number(input01)+ Number(input02);

    document.getElementById("heading").innerText = "SUM : " + sum
    console.log(input01);
    console.log(input02);
    console.log(sum);

}

function btnADUOnAction() {
    let input01 = document.getElementById("txtInput01").value;
    let input02 = document.getElementById("txtInput02").value;

    let sum = parseInt(input01) - parseInt(input02);
    // let sum = Number(input01)- Number(input02);

    document.getElementById("heading").innerText = "SUM : " + sum
    console.log(input01);
    console.log(input02);
    console.log(sum);

}
//-------------------------------------------------------------------------------------------------------------------

function btnAddCustomerOnAction(){
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

console.log(txtName);
console.log(txtAddress);
console.log(txtAge);
console.log(txtEmail);
console.log(txtSalary);

// alert(txtName);

}



