import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

import { Query } from 'react-apollo';
import PRODUCTS from './ProductListQuery.js';

import EmptyState from '../EmptyState/EmptyState';
import Loading from '../Loading/Loading';

function ProductList(props) {
    const { CategoryId, addToCart, removeCart, sellData } = props;
    const { id } = sellData.pocSearch[0];

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
                            addToCart={addToCart} 
                            removeCart={removeCart}
                        />
            })
        )
    }

    const paramsQuery = {
        "id": id,
        "search": "",
        categoryId: CategoryId
    }
    
    return (
        <Query 
            query={PRODUCTS} 
            variables={paramsQuery}
        >
                { buildProductList }
        </Query>
    )
}

export default ProductList;