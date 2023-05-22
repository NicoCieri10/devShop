const containerMain = document.querySelector('#mainContainer');
const templateProduct = document.querySelector('#templateProduct');
const templateDivider = document.querySelector('#templateDivider');

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
    static showProducts(products) {
        containerMain.textContent = '';
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < products.length; i++) {
            fragment.appendChild(products[i].addNewProduct());
            if (i < (products.length - 1)) {
                fragment.appendChild(templateDivider.content.cloneNode(true));
            }
        }
        containerMain.appendChild(fragment);
    }
    addNewProduct() {
        const clone = templateProduct.content.cloneNode(true);
        clone.querySelector('.product-title').textContent = this.name;
        clone.querySelector('.product-description').textContent = this.description;
        clone.querySelector('.product_price').textContent = this.price;
        clone.querySelector('.product_stock').textContent = this.stock;
        clone.querySelector('.product-card').dataset.id = this.id;

        return clone;
    }
}

for (let i = 0; i < 20; i++) {
    const productExample = new Product(
        `Producto ${i}`,
        'Producto de ejemplo: Nostrud velit nulla do do ullamco labore cillum non occaecat. Exercitation do quis adipisicing qui velit ullamco ut culpa veniam irure non irure labore. Incididunt laboris veniam ad duis elit ad qui proident enim.', 
        './image/placeholder.png', 
        `$ ${i * 5 + 23}`, 
        '10 u.',
    );
    products.push(productExample);
}

Product.showProducts(products);