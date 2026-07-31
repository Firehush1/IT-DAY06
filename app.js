class Customer {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

let customer1 = new Customer("HUSH", 30, "Australia");
console.log(customer1);


// Output: Customer { name: 'HUSH', age: 30, address: 'Australia' }

//-----------------------------------------------------------------------------------------------------------------------

let customer2 = {
        name: "HUSH",
        age: 30,
        address: "Australia"
        };

        console.log(customer2);
