/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */

// criar dois metodos
// criar metodo preço unitário * quantidade

class InvoiceItem {
    constructor(id, description, quantity, price ){
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }

    getProdDescription(){
        return `Estoque   ${this.description}`;
       }
   
    getTotalPrice(){
        const totalPrice = this.quantity * this.price
        return `Valor total ${totalPrice}`;
      }
   
    }

    const geladeira = new InvoiceItem (10, "geladeira na cor cinza de 450 litros", 50, 2500);
    const celular = new InvoiceItem (5,  "Iphone cor rose 128 GB", 20, 5000);

     console.log(geladeira. getProdDescription(), geladeira. getTotalPrice());
     console.log(celular. getProdDescription(), celular. getTotalPrice());