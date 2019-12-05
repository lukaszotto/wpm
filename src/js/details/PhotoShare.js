import React from 'react';
const PhotoShare = ({ link }) => {
    FB.init({
        xfbml: true,
        version: 'v5.0'
    });

    return (
        <article>
            <div className="fb-like" data-href={link.html} data-width="" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
        </article>
    );
}

export default PhotoShare;