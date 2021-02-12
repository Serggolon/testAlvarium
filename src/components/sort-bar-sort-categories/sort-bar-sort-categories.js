import React from 'react';

import SortBarComponentName from "../sort-bar_component_name";

import './sort-bar-sort-categories.css';

const SortBarSortCategories = ({onSortChange}) => {

    return (
        <section className={"sort-bar-sort-categories"}>
            <SortBarComponentName name={"Сортировка"}/>
            <article>
                <input id={"ascending"} name="sort" type="radio" value="ascending"
                       onChange={(event) => onSortChange(event.target.value)}/>
                <label htmlFor="ascending">По возрастанию цены</label>

                <input id={"descending"} name="sort" type="radio" value="descending"
                       onChange={(event) => onSortChange(event.target.value)}/>
                <label htmlFor="descending">По убыванию цены</label>

                <input id={"alphabet"} name="sort" type="radio" value="alphabet"
                       onChange={(event) => onSortChange(event.target.value)}/>
                <label htmlFor="alphabet">По алфавиту</label>
            </article>
        </section>
    );
};

export default SortBarSortCategories;