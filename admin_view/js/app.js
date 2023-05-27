import Product from '../../models/product.js';
import products from "../../data/products.js";

const containerMain = document.querySelector('#mainContainer');
const templateProduct = document.querySelector('#templateProduct');
const templateDivider = document.querySelector('#templateDivider');
// const addButton = document.querySelector('#addButton');

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

// document.addEventListener('click', (e) => {
//     if (e.target.matches('.btn--delete')) {
//         const id = e.target.dataset.id;
//         const findProduct = products.findIndex((item) => item.id === parseInt(id));
//         products.splice(findProduct, 1);
//         ProductAdmin.showProducts(products);
//     }
// });

document.addEventListener('click', (e) => {
    if (e.target.matches('#addBtn')) {
        const id = e.target.dataset.id;
        const findProduct = products.findIndex((item) => item.id === parseInt(id));
        products.splice(findProduct, 1);
        ProductAdmin.showProducts(products);
    }
});
