import { getStoredcart } from "../../utilities/fakedb";

export const ProductsAndCartLoader = async() => {
    // get products
    const productData = await fetch('products.json');
    const products = await productData.json();

    //get Cart

    const savedCart = getStoredcart();
    const initialCart = [];
    //console.log(products);
    for(const id in savedCart){
       const addedProduct = products.find(product => product.id === id);
       if(addedProduct){
        const quantity = savedCart[id];
         addedProduct.quantity = quantity;
         initialCart.push(addedProduct);
       }
    }
    return {products, initialCart};
}