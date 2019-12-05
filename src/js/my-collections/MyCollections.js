import React from 'react';

import CollectionThumbs from './CollectionThumbs';

const MyCollections = () => {
    const myCollections = [1582736, 649278, 311028, 3178572];
    //const myCollections = [974046];
    return (
        <section>
            {
                myCollections.map((collectionId) => {
                    return <CollectionThumbs key={collectionId} collectionId={collectionId}></CollectionThumbs>
                })
            }
        </section>
    )
};
export default MyCollections;