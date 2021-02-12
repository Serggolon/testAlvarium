import React from 'react';
import {connect} from 'react-redux';

import './goods-list-bar.css';

import GoodListBarItem from '../goods-list-bar-item';
import Products from '../../products';

const GoodsListBar = ({keyWord}) => {

    const goods = Products[Object.keys(Products)];

    const sortGoods = (arrGoods, sortOrder) => {
        return arrGoods.sort((a, b) => {
            switch (sortOrder) {
                case "ascending":
                    return (a.price - b.price);
                    break;

                case "descending":
                    return (b.price - a.price);
                    break;

                case "alphabet":
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                    break;
            }
            return
        })
    };

const layoutArray = sortGoods(goods, keyWord);

    return (
        <article className={"goods-list-bar"}>
            {
                layoutArray.map((good) => {
                    let defaultIcon = "/images/0.jpg";
                    if (good.image) defaultIcon = `/images/${good.image}`;

                    return (
                        <GoodListBarItem key={good.id}
                                         name={good.name}
                                         price={good.price}
                                         image={defaultIcon}
                                         description={good.description}/>
                    )
                })
            }
        </article>
    );
};

const mapStateToProps = ({sortParameters:{keyWord}}) => {
    return {
        keyWord,
    };
};

export default connect(mapStateToProps)(GoodsListBar);