import React from 'react';

import SortBarComponentName from "../sort-bar_component_name";

import './sort-bar-currencies.css';

const SortBarCurrencies = () => {

    return (
        <section className={"sort-bar-currencies"}>
            <SortBarComponentName name={"Валюта"}/>
            <article>
                <button className={"sort-bar-currencies_usd text-bold"}>USD</button>
                <button className={"sort-bar-currencies_uah text-bold"} autoFocus>UAH</button>
            </article>
        </section>
    );
};

export default SortBarCurrencies;