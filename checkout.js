const checkout = {
    items: [],
    total: 0,
  
    addItem(item) {
      if (!item || typeof item.price !== "number" || isNaN(item.price)) {
        console.log("Invalid price. Please provide a valid number for the price.");
        return;
      }
  
      this.items.push(item);
  
      this.total += item.price;
      console.log(`Added "${item.name}" with price $${item.price.toFixed(2)}.`);
    },
  
    getTotal() {
      return `Total: $${this.total.toFixed(2)}`;
    }
  };
  
  checkout.addItem({ name: "Coffee Maker", price: 99.95 }); 
  checkout.addItem({ name: "Milk", price: 3.5 });          
  checkout.addItem({ name: "Invalid Item", price: "50" }); 
  checkout.addItem({ name: "Another Item", price: NaN });  
  
  console.log(checkout.getTotal());
  