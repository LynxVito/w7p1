function Address(building, street, town, postcode) {
    this.building = building;
    this.street = street;
    this.town = town;
    this.postcode = postcode;
}

let address1 = new Address("26B", "Glen Close", "York", "YO10 4PW");
let address2 = new Address(13, "Ancress Walk", "York", "YO23 1BU");
let address3 = new Address(27, "Crossway", "Welwyn Garden City", "AL8 7ED");

console.log(address1, address2, address3);
console.log(address1.postcode);