import React from 'react';
import ReactStars from "react-rating-stars-component"
import {Restaurant, RestaurantInfo, Name, Address, RestaurantImage} from './style.js'

const RestaurantCard = ({name, rate, address, restaurantImage}) =>  {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <Restaurant>
            <RestaurantInfo>
                <Name>{name}</Name>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    edit={false}
                    value={4}
                    // emptyIcon={<i className="far fa-star"></i>}
                    // halfIcon={<i className="fa fa-star-half-alt"></i>}
                    // fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />         
                <Address>{address}</Address> 
            </RestaurantInfo>
            <RestaurantImage  src={restaurantImage} alt="Imagem do restaurante" />        
        </Restaurant>
    )
}

export default RestaurantCard;