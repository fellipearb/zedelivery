import React, { useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductPageStyle } from '../theme/ProductPageStyle';
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

function Products() {
    /**
     * TEMP
     */
    let productList = [
        {
            id: 1,
            displayName: 'Skol 269ml',
            price: {
                max: 2.19,
                min: 2.19
            },
            images: [
                "https://courier-images-prod.imgix.net/produc_variant/00008502_8df6cda6-722b-4523-9afd-bb518ec1efb1.jpg"
            ]
        },
        {
            id: 2,
            displayName: 'Skol 269ml',
            price: {
                max: 2.19,
                min: 2.19
            },
            images: [
                "https://courier-images-prod.imgix.net/produc_variant/00008502_8df6cda6-722b-4523-9afd-bb518ec1efb1.jpg"
            ]
        },
        {
            id: 3,
            displayName: 'Skol 269ml',
            price: {
                max: 2.19,
                min: 2.19
            },
            images: [
                "https://courier-images-prod.imgix.net/produc_variant/00008502_8df6cda6-722b-4523-9afd-bb518ec1efb1.jpg"
            ]
        },
        {
            id: 4,
            displayName: 'Skol 269ml',
            price: {
                max: 2.19,
                min: 2.19
            },
            images: [
                "https://courier-images-prod.imgix.net/produc_variant/00008502_8df6cda6-722b-4523-9afd-bb518ec1efb1.jpg"
            ]
        },
        {
            id: 5,
            displayName: 'Skol 269ml',
            price: {
                max: 2.19,
                min: 2.19
            },
            images: [
                "https://courier-images-prod.imgix.net/produc_variant/00008502_8df6cda6-722b-4523-9afd-bb518ec1efb1.jpg"
            ]
        },
        {
            id: 6,
            displayName: 'Skol 269ml',
            price: {
                max: 2.19,
                min: 2.19
            },
            images: [
                "https://courier-images-prod.imgix.net/produc_variant/00008502_8df6cda6-722b-4523-9afd-bb518ec1efb1.jpg"
            ]
        },
        {
            id: 7,
            displayName: 'Skol 269ml',
            price: {
                max: 2.19,
                min: 2.19
            },
            images: [
                "https://courier-images-prod.imgix.net/produc_variant/00008502_8df6cda6-722b-4523-9afd-bb518ec1efb1.jpg"
            ]
        },
    ];
    /**
     * -TEMP
     */

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
    productList.map(item => {
        item.alreadyAdd = false;
        return item;
    });

    setProducts(productList);

    const addToCart = (card) => {
        card.alreadyAdd = true;
        setCartItems([...cartItems, card]);
    }

    const removeCart = (card) => {
        card.alreadyAdd = false;
        setCartItems(cartItems.filter(item => item.id !== card.id))
    }

    return (
        <>
            <Header cartItems={cartItems} />
            <ProductPageStyle>
                <div className="container">
                    {
                        products.map(item => {                                
                            return <ProductCard 
                                        key={item.id} 
                                        card={item}
                                        addToCart={addToCart} 
                                        removeCart={removeCart}
                                    />
                        })
                    }
                </div>
            </ProductPageStyle>
            <Footer />
        </>
    )
}

export default Products;