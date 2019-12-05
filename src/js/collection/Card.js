import React from 'react';
import { StyledLink, CardStyle, CardRevealStyle, CardStyleImg } from './styles/styles';
const Card = (item) => {
    const { id, urls, likes, user, description } = item.details;
    return (
        <StyledLink to={`/details/${id}`}>
            <CardStyle className="card">
                <div className="card-image ">
                    <CardStyleImg src={urls.small} />
                </div>
                <CardRevealStyle className="card-reveal black-text">
                    {
                        description && (<h6>
                            description: {description}
                        </h6>)
                    }
                    <h6>
                        likes: {likes}
                    </h6>
                    {
                        user.location && (<h6>
                            country: {user.location}
                        </h6>)
                    }
                </CardRevealStyle>
            </CardStyle>
        </StyledLink>
    )
}

export default Card;