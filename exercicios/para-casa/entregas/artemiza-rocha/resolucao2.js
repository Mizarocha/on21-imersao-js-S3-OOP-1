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

    getProdId(){
        return `Estoque   ${this.description}`;
       }
   
    getProdPrice(){
        const prodPrice = this.quantity * this.price
        return `Valor total ${prodPrice}`;
      }
   
    }

    const geladeira = new InvoiceItem (10, "geladeira na cor cinza de 450 litros", 50, 2500);
    const celular = new InvoiceItem (5,  "Iphone cor rose 128 GB", 20, 5000);

     console.log(geladeira.getProdId(), geladeira.getProdPrice());
     console.log(celular.getProdId(), celular.getProdPrice());