import styled from 'styled-components';
import { Link } from "react-router-dom";
export const CardWrapperStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const CardStyle = styled.div`
    overflow: hidden;
    margin: 0px;
    height: 100%;
`;

export const CardStyleImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
export const CardRevealStyle = styled.div`
    transition: transform 200ms ease-in-out;
    transform: translateY(0);
    bottom: 100%;
    color: black;

    ${CardStyle} & {
        display: block;
        height: auto;
        top: auto;
    }
    ${CardStyle}:hover & {
        transition: transform 200ms ease-in-out;
        transform: translateY(100%);
    }
`;

export const StyledLink = styled(Link)`
    width: 31%;
    height: 400px;
    margin: 1%;
    @media (max-width: 768px) {
        width: 49%;
        margin: 0.5%;
    }
    @media (max-width: 649px) {
        width: 100%;
        margin: 1% 0;
        height: 300px;
    }
`;