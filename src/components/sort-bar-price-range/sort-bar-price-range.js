import React from 'react';

import SortBarComponentName from "../sort-bar_component_name";

import './sort-bar-price-range.css';

const SortBarPriceRange = () => {

    return (
        <section className={"sort-bar-price-range"}>
            <SortBarComponentName name={"Цена"}/>
            <article className={"sort-bar-price-range-from"}>
                <p>от:</p>
                <input type="number" step="1" min="1" max="99999" placeholder="1"/>
            </article>
            <article className={"sort-bar-price-range-to"}>
                <p>до:</p>
                <input type="number" step="1" min="1" max="99999" placeholder="99999"/>
            </article>
        </section>
    );
};

export default SortBarPriceRange;