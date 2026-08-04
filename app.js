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


//DOM (Document Object Model) Manipulation - HTML, CSS, JS
// document.write("<h1>POWER</h1>");

console.log(document.title);


let heading = document.getElementById("heading");
let parammmm = document.getElementById("parrrrra");

// heading.innerHTML = "HUSH";

// console.log(heading);

function changeHeading() {
    heading.innerText = "SHRADDA";
    console.log("clicking"); 
}

function changetopic() {
    parammmm.innerText =" hey HUSH";
    console.log("clicking");
    
    
}
