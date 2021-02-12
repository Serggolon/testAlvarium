import React from 'react';

import './goods-list-bar-item.css';

const GoodsListBarItem = ({name, price, image, description}) => {
    return (
        <article className={"goods-list-bar-item "}>

                <img src={image} alt="image" className={"goods-list-bar-item__img"}/>

                <section className={"" }>
                    <article className={"goods-list-bar-item__article text-bold"}>
                        {name}</article>
                    <article className={"goods-list-bar-item__article text-bold"}>
                        {price} UAH</article>
                    <article className={"goods-list-bar-item__article_description"}>
                        {description}</article>

            </section>
        </article>
    );
};

export default GoodsListBarItem;