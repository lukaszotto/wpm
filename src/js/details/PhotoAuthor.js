import React from 'react';

const PhotoAuthor = ({ user }) => {
    return (
        <article>
            <h5>About the author</h5>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src={user.profile_image.medium} alt="" className="circle"></img>
                    <span className="title">{user.name}</span>
                    <p>{user.bio}</p>
                    <a href={user.links.html} title="portfolio" className="secondary-content"><i className="material-icons">perm_media</i></a>
                </li>
            </ul>
        </article>
    );
}

export default PhotoAuthor;