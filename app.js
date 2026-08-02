class Customer {

    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}

let customer1 = new Customer("HUSH", 30, "Australia");
console.log(customer1);
console.log(customer1.getName());


// Output: Customer { name: 'HUSH', age: 30, address: 'Australia' }

//-----------------------------------------------------------------------------------------------------------------------

let customer2 = {
        name: "HUSH",
        age: 30,
        address: "Australia",
        salary: 10000
        };

        console.log(customer2.name);
        console.log(customer2.age);
        console.log(customer2.salary);
