import React, { useState } from 'react';
import { ProductCardStyle } from './ProductCardStyle';

function ProductCard(props) {
    const [card] = useState(props.card);
    card.images[0] = `${card.images[0]}?w=200&h=200`;
    card.price.min = card.price.min.toLocaleString('pt-BR');

    return (
        <ProductCardStyle>
            <div className="product">
                <img className="image" src={card.images[0]} alt={card.displayName} />
                <h2 className="name">{card.displayName}</h2>
                <span className="price">R$ {card.price.min}</span>
                {
                    card.alreadyAdd ?
                        <button className="add" onClick={props.removeCart.bind(this, card)}>Remover do carrinho</button>
                    :
                        <button className="add" onClick={props.addToCart.bind(this, card)}>Adicionar ao carrinho</button>
                }                        
            </div>
        </ProductCardStyle>
    )
}

export default ProductCard;