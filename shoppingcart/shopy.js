/*Implement a simple shopping cart system with features to add items, remove items and calculate the total price.
 Use objects to represent items, including properties for the item name, price and quantity. 
 Implement features to add items to the cart, remove items and calculate the total cost.*/

 function Item(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
 }

 function shoppingCart(){
    this.items = [];

    this.addItem = function(item){
        this.items.push(item);
    }

    this.removeItem = function(index){
        if(index >= 0 && index <= this.items.length){
            this.items.splice(index,1);
        }
    }

    this.calculateTotal = function(){
        let total = 0;

        this.items.forEach(function(item){
            total += item.price * item.quantity;
        });
        return total;
    };
 }

// Example usage:
const cart = new shoppingCart();

// Adding items to the cart
const item1 = new Item('Shirt', 20, 2);
const item2 = new Item('Pants', 30, 1);
cart.addItem(item1);
cart.addItem(item2);

// Removing an item from the cart (index 0)
cart.removeItem(0);

// Calculating the total price
const totalPrice = cart.calculateTotal();
console.log('Total Price:', totalPrice);

