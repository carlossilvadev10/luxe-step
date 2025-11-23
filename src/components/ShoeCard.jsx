import React from "react";

const ShoeCard = ({ imgURL, changeShoeImg, shoeImg }) => {
    const handleClick = () => {
        if (shoeImg !== imgURL.shoe) {
            changeShoeImg(imgURL.shoe);
        }
    }

    return (
        <div className = "" onClick = {handleClick}>
            <div className = "flex flex-col md:flex-row gap-4 cursor-default p-8">
                <div className = "w-16 h-16 cursor-pointer">
                    <img src = {imgURL.thumbnail} alt = "imgCard" />
                </div>
                <div className = "">
                    <h4 className = "uppercase medium-14 mt-1">
                        {imgURL.title}
                    </h4>
                    <p className = "medium-20 text-secondary mt-1">
                        {imgURL.price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShoeCard;