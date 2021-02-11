import React from 'react';

import SortBarPriceRange from "../sort-bar-price-range";
import SortBarCurrencies from "../sort-bar-currencies";
import SortBarSortCategories from "../sort-bar-sort-categories";

import './sort-bar.css';




const SortBar = () => {
    return (
        <article className={"sort-bar"}>
            <SortBarPriceRange/>
            <SortBarCurrencies/>
            <SortBarSortCategories/>
        </article>
    );
};

export default SortBar;