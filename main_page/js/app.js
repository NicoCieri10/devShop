import Product from '../../models/product.js';
import products from '../../data/products.js';

const containerRecent = document.querySelector('#rowContainer');
const containerProducts = document.querySelector('#productsContainer');
const templateProduct = document.querySelector('#templateProduct');


class ProductMain extends Product{
    static showRecentProducts(products) {
        containerRecent.textContent = '';
        
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 4; i++) {
            fragment.appendChild(
                products[i].addNewProductMain(
                    templateProduct.content.cloneNode(true)
                )
            );
        }
        containerRecent.appendChild(fragment);
    }
    static showAllProducts(products) {
        containerProducts.textContent = '';
        const fragment = document.createDocumentFragment();
        products.forEach((item) => {
            fragment.appendChild(
                item.addNewProductMain(
                    templateProduct.content.cloneNode(true)
                )
            );
        });
        containerProducts.appendChild(fragment);
    }
}

ProductMain.showRecentProducts(products);
ProductMain.showAllProducts(products);
