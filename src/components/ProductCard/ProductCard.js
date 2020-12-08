import React, { useState } from 'react';
import { ProductCardStyle } from './ProductCardStyle';

function ProductCard(props) {
    const [card] = useState(props.card);
    card.images[0].url = `${card.images[0].url}?w=200&h=200`;
    card.productVariants[0].price = card.productVariants[0].price.toLocaleString('pt-BR');

    return (
        <ProductCardStyle>
            <div className="product">
                <img className="image" src={card.images[0].url} alt={card.displayName} />
                <h2 className="name">{card.displayName}</h2>
                <span className="price">R$ {card.productVariants[0].price}</span>
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