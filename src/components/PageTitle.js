import React, { Fragment } from 'react';


const PageTitle = ({ title }) => {
    return(
        <Fragment>
            <h1 className="mt-5 mb-2">{title}</h1>
            <hr className="mb-4"/>
        </Fragment>
    )
}

export default PageTitle;