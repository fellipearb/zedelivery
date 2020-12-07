import React, { Component } from 'react';
import { ProductCardStyle } from './ProductCardStyle';

export default class ProductCard extends Component {

    render() {
        console.log(this.props.card)

        let card = this.props.card;
        
        card.images[0] = `${card.images[0]}?w=200&h=200`;
        card.price.format = card.price.min.toLocaleString('pt-BR');

        return (
            <ProductCardStyle>
                <div className="product">
                    <img className="image" src={card.images[0]} alt={card.displayName} />
                    <h2 className="name">{card.displayName}</h2>
                    <span className="price">R$ {card.price.format}</span>
                    {
                        card.alreadyAdd ?
                            <button className="add" onClick={this.props.removeCart.bind(this, card)}>Remover do carrinho</button>
                        :
                            <button className="add" onClick={this.props.addToCart.bind(this, card)}>Adicionar ao carrinho</button>
                    }                        
                </div>
            </ProductCardStyle>
        )
    }
}
