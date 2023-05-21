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
    static showRecentProducts(products) {
        containerRecent.textContent = '';
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 4; i++) {
            fragment.appendChild(products[i].addNewProduct());
        }
        containerRecent.appendChild(fragment);
    }
    static showAllProducts(products) {
        containerProducts.textContent = '';
        const fragment = document.createDocumentFragment();
        products.forEach((item) => {
            fragment.appendChild(item.addNewProduct());
        });
        containerProducts.appendChild(fragment);
    }
    addNewProduct() {
        const clone = templateProduct.content.cloneNode(true);
        clone.querySelector('.card--title').textContent = this.name;
        clone.querySelector('.card--subtitle').textContent = this.price;
        clone.querySelector('.section--card').dataset.id = this.id;

        return clone;
    }
}

for (let i = 0; i < 20; i++) {
    const productExample = new Product(
        `Producto ${i}`,
        'Producto de ejemplo', 
        './image/placeholder.png', 
        i * 5 + 23, 
        10,
    );
    products.splice(0, 0, productExample);
}

Product.showRecentProducts(products);
Product.showAllProducts(products);
