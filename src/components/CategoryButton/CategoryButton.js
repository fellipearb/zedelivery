import React from 'react';
import CategoryButtonStyle from './CategoryButtonStyle';

function CategoryButton(props) {
    const { label, id, filterCategory, isActive } = props;
    const classActive = isActive ? 'active' : '';

    return (
        <CategoryButtonStyle 
            onClick={filterCategory.bind(this, id)}
            className={classActive}
        >{label}</CategoryButtonStyle>
    )
}

export default CategoryButton;
