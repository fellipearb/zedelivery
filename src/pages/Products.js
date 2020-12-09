import React, { useState } from 'react';

import { Query } from 'react-apollo';
import LOCATION from '../services/GetProductsLocationQuery';

import Header from "../components/shared/Header/Header";
import ProductList from '../components/ProductList/ProductList';
import { ProductPageStyle } from '../theme/ProductPageStyle';
import Footer from "../components/shared/Footer/Footer";
import Loading from '../components/Loading/Loading';
import EmptyState from '../components/EmptyState/EmptyState';

function Products() {
    const [ cartItems, setCartItems ] = useState([]);
    const [ latLng ] = useState({ lat: localStorage.getItem('lat'), lng: localStorage.getItem('lng') });

    const addToCart = (card) => {
        card.alreadyAdd = true;
        setCartItems([...cartItems, card]);
        return;
    }

    const removeCart = (card) => {
        card.alreadyAdd = false;
        setCartItems(cartItems.filter(item => item.id !== card.id))
        return;
    }

    const date = new Date(); 

    return (
        <>
            <Header cartItems={cartItems} />
            <Query 
                query={LOCATION} 
                variables={{
                    "now": date.toISOString(),
                    "algorithm": "NEAREST",
                    "lat": latLng.lat,
                    "long": latLng.lng
                }}
            >
                {({ loading, error, data }) => {
                    if (loading) return <Loading />;
                    if (error) return <EmptyState />;
                    if (!data || !data.pocSearch.length) return <EmptyState />;
                
                    return (
                        <ProductPageStyle>
                            <ProductList addToCart={addToCart} removeCart={removeCart} sellData={data} />
                        </ProductPageStyle>
                    )
                }}
            </Query>
            <Footer />
        </>
    )
}

export default Products;