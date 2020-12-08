import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ProductPageStyle } from '../../theme/ProductPageStyle';
import { Query } from 'react-apollo';
import PRODUCTS from './ProductListQuery.js';

function ProductList(props) {
    const [sellData] = useState(props.sellData.pocSearch[0]);
    const { id } = sellData;
    
    return (
        <Query query={PRODUCTS} variables={{
            "id": id,
            "search": "",
            "categoryId": null
          }}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>Error :(</div>;

                    const { products } = data.poc;
                
                    return (
                        <ProductPageStyle>
                            <div className="container">
                                {
                                    products.map(item => {                                
                                        return <ProductCard 
                                                    key={item.id} 
                                                    card={item}
                                                    addToCart={props.addToCart} 
                                                    removeCart={props.removeCart}
                                                />
                                    })
                                }
                            </div>
                        </ProductPageStyle>
                    )
                }}
        </Query>
    )
}

export default ProductList;