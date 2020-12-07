import React, {Component} from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductPageStyle } from '../theme/ProductPageStyle';
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

class Products extends Component {
    /**
     * TEMP
     */
    productList = [
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

    state = {
        products: [],
        cartItems: []
    }

    componentDidMount() {
        this.productList.map(item => {
            item.alreadyAdd = false;
            return item;
        });

        this.setState({ products: this.productList });
    }
    
    addToCart = (card) => {
        card.alreadyAdd = true;

        this.setState(
            { cartItems: [...this.state.cartItems, card] }
        )
    }

    removeCart = (card) => {
        card.alreadyAdd = false;
        console.log("this.removeCart", card)

        this.setState({
            // todos: this.state.todos.filter(todo => todo.id !== id),
            cartItems: this.state.cartItems.filter(item => item.id !== card.id)
        })
    }

    render() {
        return (
            <>
                <Header cartItems={this.state.cartItems} />
                <ProductPageStyle>
                    <div className="container">
                        {
                            this.state.products.map(item => {                                
                                return <ProductCard 
                                            key={item.id} 
                                            card={item}
                                            addToCart={this.addToCart} 
                                            removeCart={this.removeCart}
                                        />
                            })
                        }
                    </div>
                </ProductPageStyle>
                <Footer />
            </>
        )
    }
}

export default Products;