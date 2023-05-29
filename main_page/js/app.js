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

const showAdminBtn = () => {
    const user = localStorage.getItem('user');
    if (user !== 'administrador') {
        document.querySelector('#adminBtn').classList.add('d-none');
    };
};

showAdminBtn();

document.addEventListener('click', (e) => { 
    if(e.target.matches('.card--img') || e.target.matches('.card--title') || e.target.matches('.card--subtitle')) {
        const id = e.target.dataset.id;
        localStorage.setItem('product', id);
        window.location.href = '../../product_page/product_page.html';
    }
});

ProductMain.showRecentProducts(products);
ProductMain.showAllProducts(products);
