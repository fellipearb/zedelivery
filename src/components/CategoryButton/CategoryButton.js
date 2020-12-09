import React from 'react';
import CategoryButtonStyle from './CategoryButtonStyle';

function CategoryButton(props) {
    const { label, id } = props;

    return (
        <CategoryButtonStyle onClick={props.filterCategory.bind(this, id)}>{label}</CategoryButtonStyle>
    )
}

export default CategoryButton;
