import React, { Component } from 'react';
import { useRouteError } from 'react-router-dom';

const PageNotFound = () => {
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            Opps! the page you're trying is not available.
            <div>
                {err.status + ' ' + err.statusText}
            </div>

        </div>
    )
}

export default PageNotFound