import React from 'react';
import {connect} from "react-redux";

import {sortOrder} from "../../action";

import SortBarPriceRange from "../sort-bar-price-range";
import SortBarCurrencies from "../sort-bar-currencies";
import SortBarSortCategories from "../sort-bar-sort-categories";

import './sort-bar.css';

const SortBar = ({sortParameters,onSortChange}) => {

    return (
        <article className={"sort-bar"}>
            <SortBarPriceRange/>
            <SortBarCurrencies/>
            <SortBarSortCategories sortParameters={sortParameters} onSortChange={onSortChange}/>
        </article>
    );
};

const mapStateToProps = ({sortParameters}) => {
    return {
        sortParameters,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortChange: (keyWord) => dispatch(sortOrder(keyWord)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SortBar);
