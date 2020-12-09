import React, { useState } from 'react';

import { Query } from 'react-apollo';
import LOCATION from '../services/GetProductsLocationQuery';

import Header from "../components/shared/Header/Header";
import ProductList from '../components/ProductList/ProductList';
import { ProductPageStyle } from '../theme/ProductPageStyle';
import Footer from "../components/shared/Footer/Footer";
import Loading from '../components/Loading/Loading';
import EmptyState from '../components/EmptyState/EmptyState';
import Category from '../components/Category/Category';

function Products() {
    const [ cartItems, setCartItems ] = useState([]);
    
    const [ latLng ] = useState({ 
        lat: localStorage.getItem('lat'),
        lng: localStorage.getItem('lng')
    });
    
    const [ CategoryId, setCategoryId ] = useState(null);

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

    const filterCategory = id => {
        setCategoryId(id);
    }

    const buildProductPage = ({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <EmptyState />;
        if (!data || !data.pocSearch.length) return <EmptyState />;
    
        return (
            <ProductPageStyle>
                <div className="container">
                    <ProductList addToCart={addToCart} removeCart={removeCart} sellData={data} CategoryId={CategoryId} />
                </div>
            </ProductPageStyle>
        )
    }

    const date = new Date();

    const paramsQuery = {
        now: date.toISOString(),
        algorithm: "NEAREST",
        lat: latLng.lat,
        long: latLng.lng
    }

    return (
        <>
            <Header cartItems={cartItems} />
            <Category paramsQuery={paramsQuery} filterCategory={filterCategory} CategoryId={CategoryId} />
            <Query 
                query={LOCATION} 
                variables={paramsQuery}
            >
                { buildProductPage }
            </Query>
            <Footer />
        </>
    )
}

export default Products;