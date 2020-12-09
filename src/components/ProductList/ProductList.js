import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

import { Query } from 'react-apollo';
import PRODUCTS from './ProductListQuery.js';

import EmptyState from '../EmptyState/EmptyState';
import Loading from '../Loading/Loading';

function ProductList(props) {
    const [sellData] = useState(props.sellData.pocSearch[0]);
    const { id } = sellData;
    const categoryId = props.CategoryId;

    const buildProductList = ({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <EmptyState />;
        if (!data || !data.poc.products.length) return <EmptyState />;
        
        const { products } = data.poc;
        
        return (
            products.map(item => {                                
                return <ProductCard 
                            key={item.id} 
                            card={item}
                            addToCart={props.addToCart} 
                            removeCart={props.removeCart}
                        />
            })
        )
    }
    
    return (
        <Query 
            query={PRODUCTS} 
            variables={{
                "id": id,
                "search": "",
                categoryId
            }}
        >
                { buildProductList }
        </Query>
    )
}

export default ProductList;