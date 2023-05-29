export default class Product {
    constructor(name, description, image, price, stock, id) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.stock = stock;
        this.id = id;
    };

    addNewProductMain(clone) {
        clone.querySelector('.card--title').textContent = this.name;
        clone.querySelector('.card--subtitle').textContent = `$${this.price}`;
        clone.querySelector('.section--card').dataset.id = this.id;
        clone.querySelector('.card--title').dataset.id = this.id;
        clone.querySelector('.card--subtitle').dataset.id = this.id;
        clone.querySelector('.card--img').dataset.id = this.id;
        clone.querySelector('.card--img').src = this.image;
        
        return clone;
    }
    addNewProductAdmin(clone) {
        clone.querySelector('.product-title').textContent = this.name;
        clone.querySelector('.product-description').textContent = this.description;
        clone.querySelector('.product_price').textContent = `$${this.price}`;
        clone.querySelector('.product_stock').textContent = `${this.stock} u.`;
        clone.querySelector('.product-card').dataset.id = this.id;
        clone.querySelector('.product-img').src = `.${this.image}`;

        return clone;
    }
};

 