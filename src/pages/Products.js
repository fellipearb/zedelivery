import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductPageStyle } from '../theme/ProductPageStyle';

function Products() {
    /**
     * TEMP
     */
    const productList = [
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

    let cards = [];

    productList.map(item => {
        return cards.push(<ProductCard key={item.id} card={item} />);
    });

    return (
        <ProductPageStyle>
            <div className="container">
                {cards}
            </div>
        </ProductPageStyle>
    )
}

export default Products;