import './Categories.css';
import SearchContext from "../../context/SearchContext.jsx";
import {useContext, useState} from "react";
import SatisfiedConsumersButton from "../satisfiedButton/SatisfiedConsumersButton.jsx";
import NotSatisfiedConsumersButton from "../notsatisfiedConsumersButton/NotSatisfiedConsumersButton.jsx";
import UndoButton from "../undoButton/UndoButton.jsx";
import shirtIcon from "./../../assets/tshirt-Icon.png";
import CarIcon from "./../../assets/Car-Icon.png";
import House from "./../../assets/House-Icon.png";
import Tech from "./../../assets/Tech-Icon.png";
import Decoration from "./../../assets/Decoration-Icon.png";
import Other from "./../../assets/Other-Icon.png";

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


                <ul className="catlist1">
                <h3>Categories</h3>
                    <div className="categoryRowContainer"><img src={CarIcon} alt="CarIcon"/><li onClick={() => handleCategoryClick('Cars')} className="categoryItem">Cars</li></div>
                    <div className="categoryRowContainer"><img src={Tech} alt="Tech"/><li onClick={() => handleCategoryClick('Tech')} className="categoryItem">Tech</li></div>
                        <div className="categoryRowContainer"><img src={Decoration} alt="Decoration icon"/><li onClick={() => handleCategoryClick('Decoration')} className="categoryItem">Decoration</li></div>
                            <div className="categoryRowContainer"><img src={shirtIcon} alt="Shirt icon"/><li onClick={() => handleCategoryClick('Clothes')} className="categoryItem">Clothes</li></div>
                                <div className="categoryRowContainer"><img src={House} alt="Home icon"/><li onClick={() => handleCategoryClick('Houses')} className="categoryItem">Houses</li></div>
                                    <div className="categoryRowContainer"><img src={Other} alt="Other icon"/><li onClick={() => handleCategoryClick('Other')} className="categoryItem">Other</li></div>
                </ul>
                    <ul className="catlist2">
                <h3>Filters</h3>
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