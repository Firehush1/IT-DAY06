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
        items: ["item1", "item2", "item3"],
        father: {
            name: "John",
            age: 60,
            address: "USA"
        }
    };

        // console.log(customer2.name);
        // console.log(customer2.age);
        // console.log(customer2.address);
        // console.log(customer2.salary);
        console.log(customer2.items.includes("item2"));