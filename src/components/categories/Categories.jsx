import './Categories.css';
import SearchContext from "../../context/SearchContext.jsx";
import {useContext, useState} from "react";
import SatisfiedConsumersButton from "../satisfiedButton/SatisfiedConsumersButton.jsx";
import NotSatisfiedConsumersButton from "../notsatisfiedConsumersButton/NotSatisfiedConsumersButton.jsx";
import UndoButton from "../undoButton/UndoButton.jsx";

function Categories() {
    const { setSearchQuery } = useContext(SearchContext);



    const handleCategoryClick = (category) => {
        setSearchQuery(category);
    };

    const triggerNoOption = () => {
        setSearchQuery('no');
    };

    const triggerYesOption = () => {
        setSearchQuery('yes');
    };

    const clearSearch = () => {
        setSearchQuery('');
    };



    return (
        <>


            <ul className="catlist">
                <h3>Categories</h3>
                <li onClick={() => handleCategoryClick('Cars')} className="categoryItem">Cars</li>
                <li onClick={() => handleCategoryClick('Tech')} className="categoryItem">Tech</li>
                <li onClick={() => handleCategoryClick('Decoration')} className="categoryItem">Decoration</li>
                <li onClick={() => handleCategoryClick('Clothes')} className="categoryItem">Clothes</li>
                <li onClick={() => handleCategoryClick('Houses')} className="categoryItem">Houses</li>
                <li onClick={() => handleCategoryClick('Other')} className="categoryItem">Other</li>

                <div>
                    <SatisfiedConsumersButton triggerYesOption={triggerYesOption}/>
                </div>

                <div>
                    <NotSatisfiedConsumersButton triggerNoOption={triggerNoOption}/>
                </div>
<br/>
                <div>
                    <UndoButton clearSearch={clearSearch}/>
                </div>

            </ul>

        </>
    );
}

export default Categories;