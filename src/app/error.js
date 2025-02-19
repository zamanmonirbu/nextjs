import React from 'react';

const Error = ({ statusCode }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
            <p>Please try again later.</p>
        </div>
    );
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;