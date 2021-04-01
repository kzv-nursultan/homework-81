import React from 'react';

const NewLink = props => {
    return(
        <div>
            <h3>Your link now looks like this:</h3>
            <p>
                <a href={props.originalUrl}>{props.shortUrl}</a>
            </p>
        </div>
    );
};

export default NewLink;