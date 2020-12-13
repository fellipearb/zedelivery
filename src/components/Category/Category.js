import React from 'react';
import { Query } from 'react-apollo';

import Loading from '../Loading/Loading';
import EmptyState from '../EmptyState/EmptyState';

import CategoryQuery from './CategoryQuery';
import CategoryButton from '../CategoryButton/CategoryButton';
import CategoryStyle from './CategoryStyle';

function Category(props) {
    const { filterCategory, paramsQuery, CategoryId } = props;
    
    const buildCategories = ({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <EmptyState />;
        if (!data || !data.allCategory.length) return <EmptyState />;
    
        const { allCategory } = data;

        return (            
            allCategory.map(category => {
                const isActive = category.id === CategoryId;

                return  <CategoryButton 
                            label={category.title} 
                            id={category.id} 
                            key={category.id} 
                            filterCategory={filterCategory}
                            isActive={isActive}
                        />
            })
        )
    }
    
    return (
        <>
            <CategoryStyle>
                <p>Qual a pedida para hoje?</p>
        
                <div className="categories">
                    <Query 
                        query={CategoryQuery} 
                        variables={paramsQuery}
                    >
                        {buildCategories}
                    </Query>
                </div>
            </CategoryStyle>
        </>
    );
}

export default Category;