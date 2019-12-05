import React from 'react';
import { TagStyle } from './styles/styles';
const PhotoTags = ({ tags }) => {
    return (
        <article>
            <h5>Tags</h5>
            {
                tags.map(({ title }, index) => {
                    return (
                        <TagStyle key={index}>{title}</TagStyle>
                    );
                })
            }
        </article>
    );
}

export default PhotoTags;