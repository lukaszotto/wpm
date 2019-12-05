
import React, { useState, useEffect } from 'react';
import { unsplash } from '../config'
import { toJson } from 'unsplash-js';
import { Link } from 'react-router-dom';
import { CollectionListStyle, CollectionListImgStyle } from './styles/styles'
import Loader from '../Loader';

const CollectionThumbs = ({ collectionId }) => {
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        unsplash.collections.getCollectionPhotos(collectionId, 1, 10, "latest")
            .then(toJson)
            .then(response => {
                setCollection(response);
            });
    }, []);

    return (

        <div className="container">
            <Link to={`/collection/${collectionId}`}>
                <div className="card-panel grey lighten-5 z-depth-1">
                    <CollectionListStyle>
                        {
                            !collection.length ?
                                (<Loader />) :
                                (collection.map(photo => {
                                    return (
                                        <div key={photo.id} className="collection__item">
                                            <CollectionListImgStyle src={photo.urls.thumb} className="responsive-img"></CollectionListImgStyle>
                                        </div>
                                    )
                                }))
                        }
                    </CollectionListStyle>
                </div>
            </Link>

        </div>
    )

}

export default CollectionThumbs;