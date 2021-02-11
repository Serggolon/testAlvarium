import React from 'react';

import './new-good-bar.css';

const NewGoodBar = () => {
    return (
        <article className={"new-good-bar"}>
            <form id={"newGood"} className={"new-good-bar-form"}>
                <section className={"new-good-bar-form_price"}>
                    <label htmlFor="inputPrice">Цена</label>
                    <input id="inputPrice" type="number" step="1" min="1" max="99999" placeholder="1"/>
                </section>

                <section className={"new-good-bar-form_name"}>
                    <label htmlFor="inputName">Имя</label>
                    <input id="inputName" type="text"/>
                </section>

                <section className={"new-good-bar-form_textarea"}>
                    <textarea cols="30" rows="10"></textarea>
                </section>

                <section className={"new-good-bar-form_img"}>
                    <label htmlFor="inputImg">Изображение</label>
                    <input id="inputImg" type="file" accept="image/jpeg"/>
                </section>


                <button name="Save" type="submit" form="newGood">Save</button>
            </form>
        </article>
    );
};

export default NewGoodBar;