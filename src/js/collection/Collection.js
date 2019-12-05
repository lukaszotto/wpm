import React, { useState, useEffect } from 'react';
import { unsplash } from '../config'
import { toJson } from 'unsplash-js';
import { useParams } from "react-router-dom";
import Card from './Card';
import { CardWrapperStyle } from './styles/styles';
import Loader from '../Loader';
const Collection = () => {
    let { id } = useParams();
    let scrollTimer;
    const [collection, setCollection] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState("latest");
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        unsplash.collections.getCollectionPhotos(id, currentPage, 10, sortBy)
            .then(toJson)
            .then(response => {
                setCollection([...collection, ...response]);
            });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [currentPage, sortBy]);

    function sortChanged(e) {
        setCollection([]);
        setCurrentPage(1);
        setSortBy(event.target.value);
    }
    function handleScroll() {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(() => {
            if (bottomReached()) {
                setCurrentPage(currentPage + 1);
            }
        }, 500);

    }
    function bottomReached() {
        return (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10;
    }
    return (
        <section>
            <form action="#" className="container">
                <label>
                    <input name="sort_by" value="popular" type="radio" checked={sortBy == "popular"} onChange={sortChanged} />
                    <span>popular</span>
                </label>
                <label>
                    <input name="sort_by" value="latest" type="radio" checked={sortBy == "latest"} onChange={sortChanged} />
                    <span>latest</span>
                </label>
            </form>
            <CardWrapperStyle>
                {
                    collection.length &&
                    (collection.map((cardDetails) => {
                        return (
                            <Card key={cardDetails.id} details={cardDetails} />
                        )
                    }))
                }
            </CardWrapperStyle>
            <div className="center">
                <Loader />
            </div>
        </section>
    );
};
export default Collection;