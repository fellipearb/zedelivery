import React from 'react';
import LoadingStyle from './LoadingStyle';

function Loading() {
    return (
        <LoadingStyle>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </LoadingStyle>
    )
}

export default Loading;