import React from 'react';

import SortBarComponentName from "../sort-bar_component_name";

import './sort-bar-sort-categories.css';

const SortBarSortCategories = ({sortParameters, onSortChange}) => {

    let asc , desc , alph;

    switch (sortParameters) {
        case "ascending":
            asc = true;
            desc = false;
            alph = false;
            break;
        case "descending":
            asc = false;
            desc = true;
            alph = false;
            break;
        case "alphabet":
            asc = false;
            desc = false;
            alph = true;
            break;
    }

    return (
        <section className={"sort-bar-sort-categories"}>
            <SortBarComponentName name={"Сортировка"}/>
            <article>
                <input id={"ascending"} name="sort" type="radio" value="ascending" checked={asc}
                       onChange={(event) => onSortChange(event.target.value)}/>
                <label htmlFor="ascending">По возрастанию цены</label>

                <input id={"descending"} name="sort" type="radio" value="descending" checked={desc}
                       onChange={(event) => onSortChange(event.target.value)}/>
                <label htmlFor="descending">По убыванию цены</label>

                <input id={"alphabet"} name="sort" type="radio" value="alphabet" checked={alph}
                       onChange={(event) => onSortChange(event.target.value)}/>
                <label htmlFor="alphabet">По алфавиту</label>
            </article>
        </section>
    );
};

export default SortBarSortCategories;