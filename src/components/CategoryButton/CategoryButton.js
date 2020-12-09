import React from 'react';
import CategoryButtonStyle from './CategoryButtonStyle';

function CategoryButton(props) {
    const { label, id, filterCategory } = props;

    return (
        <CategoryButtonStyle onClick={filterCategory.bind(this, id)}>{label}</CategoryButtonStyle>
    )
}

export default CategoryButton;
