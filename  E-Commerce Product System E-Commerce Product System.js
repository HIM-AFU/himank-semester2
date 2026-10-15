class Product {
    constructor(productId, productName, price){
        this.productId=productId;
        this.productName=productName;
        this.price=price;
    }
        getDiscountedPrice(discount){
           return this.price-(this.price*discount/100);
        }
        display()
        {
            console.log("productID: ",this.productId);
            console.log("productName: ",this.productName);
            console.log("price: ",this.price);
        }
        static compareProducts(p1,p2){
            if(p1.price > p2.price){
                console.log("p1 has the higher price:", p1.productId);
            } else if(p2.price > p1.price){
                console.log("p2 has the higher price:", p2.productId);
            } else {
                console.log("Both have the same price");
            }
        }
        }

        class Electronics extends Product
        { constructor(productId, productName, price, warranty) 
        { super(productId, productName, price);
         this.warranty = warranty; 
         } 
         display() {
             console.log("Product ID:", this.productId);
              console.log("Product Name:", this.productName); 
              console.log("Price:", this.price);
               console.log("Warranty:", this.warranty, "years");
                }
                } 
                let p1 = new Product(101, "Shoes", 2000); 
                let p2 = new Product(102, "Watch", 3000); 
                let e1 = new Electronics(103, "Laptop", 50000, 2);
                 console.log("Discounted Price:", p1.getDiscountedPrice(10)); 
                 Product.compareProducts(p1, p2);
                  console.log("\nElectronics Details:");
                   e1.display();