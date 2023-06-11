export const addProductToCart = (cartProducts, cartProductAdd) => {
    const cartProdutExisting = cartProducts?.find(cartProduct =>
        cartProduct._id === cartProductAdd._id)

    if (cartProdutExisting)
    {
        return cartProducts?.map((cartProduct) =>
            cartProduct._id === cartProductAdd._id ?
                { ...cartProduct, quantity: cartProduct.quantity + 1 } : cartProduct)
       
    }
    return [...cartProducts, { ...cartProductAdd, quantity: 1 } ];
}

export const removeCartProduct = (cartProducts, cartProductRemove) => {
    const cartProdutExisting = cartProducts?.find(cartProduct => cartProduct._id === cartProductRemove._id);

    if (cartProdutExisting.quantity === 1)
    {
        return cartProducts?.filter((cartProduct) => cartProduct._id !== cartProductRemove._id);
    }

     return cartProducts?.map((cartProduct) =>
            cartProduct._id === cartProductRemove._id ?
                { ...cartProduct, quantity: cartProduct.quantity - 1 } : cartProduct)
}
        
