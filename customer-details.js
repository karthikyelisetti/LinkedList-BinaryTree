class Customer {
  constructor(customer_id, customer_name, purchase_date, amount) {
    this.customer_id = customer_id;
    this.customer_name = customer_name;
    this.purchase_date = purchase_date;
    this.amount = amount;
    this.next = null;
  }
}

class CustomerDetails {
  constructor() {
    this.head = null;
  }

  addCustomerDetails(customer_id, customer_name, purchase_date, amount) {
    let newCustomer = new Customer(
      customer_id,
      customer_name,
      purchase_date,
      amount
    );
    if (!this.head) {
      this.head = newCustomer;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newCustomer;
  }

  sortAmount() {
    let swapped;
    do {
      swapped = false;
      let current = this.head;
      while (current && current.next) {
        if (current.amount > current.next.amount) {
          let temp = current.amount;
          current.amount = current.next.amount;
          current.next.amount = temp;
          swapped = true;
        }
        current = current.next;
      }
    } while (swapped);
  }

  custPurchaseAmount(year) {
    let total = 0;
    let current = this.head;
    while (current) {
      let splitDate = current.purchase_date.split("/");
      if (splitDate[2] == Number(year)) {
        total += parseInt(current.amount);
      }
      current = current.next;
    }
    return total;
  }

  findCustomer(customer_name) {
    let current = this.head;
    let counter = 0;
    while (current) {
      if (current.customer_name == customer_name) {
        counter += 1;
        console.log(
          "| " +
            current.customer_id +
            "     | " +
            current.customer_name +
            "        | " +
            current.purchase_date +
            "                | " +
            current.amount +
            "        |"
        );
      }
      current = current.next;
    }
    if (counter === 0) {
      console.log(`Customer ${customer_name} not found`);
    }
    return null;
  }
}

let customerList = new CustomerDetails();

customerList.addCustomerDetails("C246123", "Jeremy", "15/01/23", "3000");
customerList.addCustomerDetails("C325435", "Travis", "20/02/23", "2400");
customerList.addCustomerDetails("C436879", "Archie", "10/12/22", "2700");
customerList.addCustomerDetails("C246639", "Fabien", "15/01/23", "3500");
customerList.addCustomerDetails("C325525", "Walter", "20/02/23", "2100");
customerList.addCustomerDetails("C436630", "Archie", "10/01/23", "4500");

customerList.sortAmount();
let current = customerList.head;
console.log(
  "-----------------------------------------------------------------------"
);
console.log(
  "| Customer data in sorted order based on bill amount                  |"
);
console.log(
  "-----------------------------------------------------------------------"
);
console.log(
  "| Customer ID | Customer Name | Purchase Date(dd/mm/yy) | Bill Amount |"
);
console.log(
  "-----------------------------------------------------------------------"
);
while (current) {
  console.log(
    "| " +
      current.customer_id +
      "     | " +
      current.customer_name +
      "        | " +
      current.purchase_date +
      "                | " +
      current.amount +
      "        |"
  );
  current = current.next;
}

let year = "22";
console.log("   ");
console.log("   ");
console.log(
  "-----------------------------------------------------------------------"
);
console.log(
  "| Total purchase amount for a specific year                           |"
);
console.log(
  "-----------------------------------------------------------------------"
);
let total = customerList.custPurchaseAmount(year);
console.log(`Total purchase amount for the year'${year}: ${total}`);

console.log("   ");
console.log("   ");
console.log(
  "-----------------------------------------------------------------------"
);
console.log(
  "| Details of a specific customer based on name                        |"
);
console.log(
  "-----------------------------------------------------------------------"
);
console.log(
  "| Customer ID | Customer Name | Purchase Date(dd/mm/yy) | Bill Amount |"
);
console.log(
  "-----------------------------------------------------------------------"
);
let customer_name = "Archie";
customerList.findCustomer(customer_name);
console.log(
  "-----------------------------------------------------------------------"
);