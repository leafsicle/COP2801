// create a class for a RetailItem object.
class RetailItem {
  constructor(description, qty, price) {
    //this ibject should store the following data in attributes: item description
    //units in inventory and price
    ;(this.description = description), (this.inventory = qty), (this.price = price)
  }
}
//create class for a CashRegister object that will be used with the RetailItem class
class CashRegister {
  constructor() {
    //the CashRegister object should be able to internally keep an Array of retailItem Objects
    this.cart = []
  }

  //methods to add:
  //method called purchase item as an argument. Each time the PurchaseItem method is called
  //the retailItem object that is apssed as an argument should be added to the list
  //of retailItems that the CashRegister contains
  purchaseItem(retailItem) {
    this.cart.push(retailItem)
  }

  //a method called getTotal that returns the total price of all of the objects
  //stored in the CashRegister objects internal list
  getTotal() {
    var total = 0
    this.cart.forEach(retailItem => {
      total += retailItem.price
    })
    return total
  }

  //a method called showItems that writes the information about each retail item stored
  //in the register to the console
  showItems() {
    //for display use only
    var itemCount = 0
    console.log('The cart contains the following items:')
    this.cart.forEach(retailItem => {
      //tell the counter that we added an item
      itemCount++
      console.log('Item ' + itemCount + ':')
      console.log('Description:' + retailItem.description)
      console.log('Price: $' + retailItem.price + '\n')
    })
  }

  //a method named clear that should clear the CashRegister object's interal list
  clear() {
    this.cart = []
  }
}

//after the classes have been created create 3 RetailItem Objects with the following data
var item1 = new RetailItem('Polo Jacket', 12, 59.95)
var item2 = new RetailItem('Robert Cavalli Jeans', 40, 34.95)
var item3 = new RetailItem('Sean Jean Shirt', 20, 24.95)

//store all 3 RetailItem objects in an array named  'inventory'
var inventory = []

//push those objects to the inventory
inventory.push(item1, item2, item3)

//create a CashRegister Object
var transaction = new CashRegister()

//add all of the items to the CashRegister using the purchase item method.
inventory.forEach(item => {
  transaction.purchaseItem(item)
})

//Display the total using the CashRegister getTotal method.
console.log('Total: $' + transaction.getTotal().toFixed(2))

//Display alll items using the CashRegister showItems method
transaction.showItems()
