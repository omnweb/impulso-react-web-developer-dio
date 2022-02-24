import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Skeleton from "../Skeleton"
import {
  Restaurant,
  RestaurantInfo,
  Title,
  Address,
  RestaurantImage,
} from "./style.js";
import Restaurante from "../../assets/restaurante-fake.png";

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          edit={false}
          value={restaurant.rating}
          activeColor="#ffd700"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantImage
        src={restaurant.photos ? restaurant.photos[0].getUrl() : Restaurante}
        onLoad={() => setImageLoad(true)}
        alt="Imagem do restaurante"
      />
      {!imageLoad && <Skeleton width='100px' height='100px'/> }
    </Restaurant>
  );
};

export default RestaurantCard;
