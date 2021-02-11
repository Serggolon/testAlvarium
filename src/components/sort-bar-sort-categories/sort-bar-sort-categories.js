import React from 'react';

import SortBarComponentName from "../sort-bar_component_name";

import './sort-bar-sort-categories.css';

const SortBarSortCategories = () => {

    return (
        <section className={"sort-bar-sort-categories"}>
            <SortBarComponentName name={"Валюта"}/>
            <article>
                <input id={"ascending"} name="sort" type="radio" value="ascending" checked/>
                <label htmlFor="ascending">По возрастанию цены</label>

                <input  id={"descending"} name="sort" type="radio" value="descending"/>
                <label htmlFor="descending">По убыванию цены</label>

                <input id={"alphabet"} name="sort" type="radio" value="alphabet"/>
                <label htmlFor="alphabet">По алфавиту</label>
            </article>
        </section>
    );
};

export default SortBarSortCategories;