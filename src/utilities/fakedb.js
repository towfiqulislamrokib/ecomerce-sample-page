// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};

    //get the shopping Cart from local storage
     const storedCart = localStorage.getItem('shopping-cart');
     if(storedCart){
       shoppingCart = JSON.parse(storedCart);
     }
    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}



const removeFromDb = id => {
    const shoppingCart = getStoredcart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getStoredcart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getStoredcart,
    deleteShoppingCart
}
