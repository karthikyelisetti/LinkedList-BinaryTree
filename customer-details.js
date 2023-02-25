class Customer {
    constructor(id, name, purchaseDate, billAmount) {
      this.id = id;
      this.name = name;
      this.purchaseDate = purchaseDate;
      this.billAmount = billAmount;
      this.next = null;
    }
  }
  
  class CustomerList {
    constructor() {
      this.head = null;
    }
  
    addCustomer(id, name, purchaseDate, billAmount) {
      let newCustomer = new Customer(id, name, purchaseDate, billAmount);
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
  
    sortByBillAmount() {
      let swapped;
      do {
        swapped = false;
        let current = this.head;
        while (current && current.next) {
          if (current.billAmount > current.next.billAmount) {
            let temp = current.billAmount;
            current.billAmount = current.next.billAmount;
            current.next.billAmount = temp;
            swapped = true;
          }
          current = current.next;
        }
      } while (swapped);
    }
  
    getTotalPurchaseAmount(year) {
      let total = 0;
      let current = this.head;
      while (current) {
        let dateParts = current.purchaseDate.split("/");
        if (dateParts[2] == year) {
          total += current.billAmount;
        }
        current = current.next;
      }
      return total;
    }
  
    getCustomerByName(name) {
      let current = this.head;
      while (current) {
        if (current.name == name) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  }
  
  let customerList = new CustomerList();
  customerList.addCustomer(1, "Chandan", "15/01/22", 100);
  customerList.addCustomer(2, "Bipul", "20/02/22", 200);
  customerList.addCustomer(3, "Adi", "10/03/22", 300);
  
  
  
  customerList.sortByBillAmount();
  let current = customerList.head;
  console.log("All customer data sorted by bill amount:");
  while (current) {
    console.log(current.id, current.name, current.purchaseDate, current.billAmount);
    current = current.next;
  }
  
  
  let year = "22";
  let total = customerList.getTotalPurchaseAmount(year);
  console.log(`Total purchase amount for ${year}: ${total}`);
  
  let name = "Purva";
  let customer = customerList.getCustomerByName(name);
  if (customer) {
    console.log(`Details of customer ${name}:`);
    console.log(customer.id, customer.name, customer.purchaseDate, customer.billAmount);
  } else {
    console.log(`Customer ${name} not found`);
  }
  