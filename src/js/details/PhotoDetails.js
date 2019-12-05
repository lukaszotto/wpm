import React from 'react';

const PhotoDetails = ({ details }) => {
    let { id, likes, downloads, description } = details;
    return (
        <article>
            <h5>Details</h5>
            <table className="responsive-table">

                {
                    <tbody>
                        <tr>
                            <td><b>Id</b></td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td><b>Likes</b></td>
                            <td>{likes}</td>
                        </tr>
                        <tr>
                            <td><b>Downloads</b></td>
                            <td>{downloads}</td>
                        </tr>
                        <tr>
                            <td><b>Description</b></td>
                            <td>{description}</td>
                        </tr>
                    </tbody>
                }


            </table>
        </article>
    );
}

export default PhotoDetails;