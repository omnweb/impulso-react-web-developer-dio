import React from 'react';
import ReactStars from "react-rating-stars-component"
import {Restaurant, RestaurantInfo, Title, Address, RestaurantImage} from './style.js'
import Restaurante from '../../assets/restaurante-fake.png';


const RestaurantCard = ({restaurant, restaurante}) =>   (
    <Restaurant>
        <RestaurantInfo>
            <Title>{ restaurant.name }</Title>
            <ReactStars
                count={ 5 }
                isHalf
                edit={ false }
                value={ restaurant.rating }
                activeColor="#ffd700"
            />         
            <Address>{ restaurant.vicinity || restaurant.formatted_address }</Address> 
        </RestaurantInfo>
        <RestaurantImage  src={restaurant.photos ? restaurant.photos[0].getUrl() : Restaurante } alt="Imagem do restaurante" />        
    </Restaurant>
)

export default RestaurantCard;