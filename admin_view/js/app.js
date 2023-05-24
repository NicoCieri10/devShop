import Product from '../../models/product.js';
import products from "../../data/products.js";

const containerMain = document.querySelector('#mainContainer');
const templateProduct = document.querySelector('#templateProduct');
const templateDivider = document.querySelector('#templateDivider');
const templateBtn = document.querySelector('#templateBtn');

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
