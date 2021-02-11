import React from 'react';
import SortBar from '../sort-bar';
import GoodsListBar from '../goods-list-bar';
import NewGoodBar from '../new-good-bar';

function App() {
    return (
        <React.Fragment>
            <SortBar/>
            <GoodsListBar/>
            <NewGoodBar/>
        </React.Fragment>
    );
}

export default App;
