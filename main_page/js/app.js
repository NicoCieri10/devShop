const containerRecent = document.querySelector('#rowContainer');
const containerProducts = document.querySelector('#productsContainer');
const templateProduct = document.querySelector('#templateProduct');

const products = [];

class Product {
    constructor(name, description, image, price, stock) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.stock = stock;
        this.id = Date.now();
    }
    static showProduct(products) {
        containerRecent.textContent = '';
        const fragment = document.createDocumentFragment();
        products.forEach((item) => {
            fragment.appendChild(item.addNewProduct());
        });
        containerRecent.appendChild(fragment);
    }
    addNewProduct() {
        const clone = templateProduct.content.cloneNode(true);
        clone.querySelector('.card--title').textContent = this.name;
        clone.querySelector('.card--subtitle').textContent = this.price;
        clone.querySelector('.section--card').dataset.id = this.id;

        return clone;
    }
}

const productExample = new Product(
    'Producto',
    'Producto de ejemplo', 
    './image/placeholder.png', 
    420, 
    69,
);

products.push(productExample);
products.push(productExample);
products.push(productExample);
products.push(productExample);

Product.showProduct(products);