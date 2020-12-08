import React, { useState } from 'react';

import { Query } from 'react-apollo';
import LOCATION from '../services/GetProductsLocationQuery';

import Header from "../components/shared/Header/Header";

import ProductList from '../components/ProductList/ProductList';

import Footer from "../components/shared/Footer/Footer";

function Products() {
    const [ cartItems, setCartItems ] = useState([]);
    const [ latLng ] = useState({ lat: localStorage.getItem('lat'), lng: localStorage.getItem('lng') });

    const addToCart = (card) => {
        card.alreadyAdd = true;
        setCartItems([...cartItems, card]);
    }

    const removeCart = (card) => {
        card.alreadyAdd = false;
        setCartItems(cartItems.filter(item => item.id !== card.id))
    }

    const date = new Date(); 

    return (
        <>
            <Header cartItems={cartItems} />
            <Query query={LOCATION} variables={{
                "now": date.toISOString(),
                "algorithm": "NEAREST",
                "lat": latLng.lat,
                "long": latLng.lng
            }}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>Error :(</div>;
                
                    return (
                        <ProductList addToCart={addToCart} removeCart={removeCart} sellData={data} />
                    )
                }}
            </Query>
            <Footer />
        </>
    )
}

export default Products;