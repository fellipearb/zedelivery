import React from 'react';
import { ProductCardStyle } from './ProductCardStyle';

function ProductCard(props) {
    const { card, removeCart, addToCart } = props;
    
    card.images[0].url = `${card.images[0].url}?w=200&h=200`;
    card.productVariants[0].price = card.productVariants[0].price.toLocaleString('pt-BR');

    return (
        <ProductCardStyle>
            <div className="product" data-testid="ProductCard">
                <img className="image" src={card.images[0].url} alt={card.displayName} data-testid="ProductCardImage" />
                <h2 className="name" data-testid="ProductCardName">{card.displayName}</h2>
                <span className="price" data-testid="ProductCardPrice">R$ {card.productVariants[0].price}</span>
                {
                    card.alreadyAdd ?
                        <button className="add" onClick={removeCart.bind(this, card)} data-testid="ProductCardButton">Remover do carrinho</button>
                    :
                        <button className="add" onClick={addToCart.bind(this, card)} data-testid="ProductCardButton">Adicionar ao carrinho</button>
                }                        
            </div>
        </ProductCardStyle>
    )
}

export default ProductCard;