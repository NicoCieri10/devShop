import Product from '../../models/product.js';
import products from "../../data/products.js";

const containerMain = document.querySelector('#mainContainer');
const templateProduct = document.querySelector('#templateProduct');
const templateDivider = document.querySelector('#templateDivider');

console.log(JSON.parse(localStorage.getItem('products')));

class ProductAdmin extends Product {
    static showProducts(products) {
        containerMain.textContent = '';
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < products.length; i++) {
            fragment.appendChild(
                products[i].addNewProductAdmin(
                    templateProduct.content.cloneNode(true)
                )
            );
            if (i < (products.length - 1)) {
                fragment.appendChild(templateDivider.content.cloneNode(true));
            }
        }
        containerMain.appendChild(fragment);
    }
}

ProductAdmin.showProducts(products);

document.addEventListener('click', (e) => {
    if (e.target.matches('#deleteButton')) {
        const id = e.target.dataset.id;
        const findProduct = products.findIndex((item) => item.id === parseInt(id));

        products.splice(findProduct, 1);
        ProductAdmin.showProducts(products);
    }
});

document.addEventListener('click', (e) => {
    if (e.target.matches('#addButton')) {
        const id = products.length;
        const product = new Product('Nuevo Producto', 'Descripción', './../image/placeholder.png', 0, 0, id);
        
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        ProductAdmin.showProducts(products);
    }
});

document.addEventListener('click', (e) => {
    if (e.target.matches('#title')) {
        const id = e.target.dataset.id;
        e.target.classList.add('d-none');
        e.target.nextElementSibling.classList.remove('d-none');
    }
});

document.addEventListener('click', (e) => {
    if (e.target.matches('#description')) {
        const id = e.target.dataset.id;
        e.target.classList.add('d-none');
        e.target.nextElementSibling.classList.remove('d-none');
    }
});
