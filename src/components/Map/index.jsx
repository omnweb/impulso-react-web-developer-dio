import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

import { Maps } from './style.js'

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants.js'

export const MapContainer = (props)  => {
    const [map, setMap] = useState(null);
    const { google, query, placeId }  = props;

    const dispatch = useDispatch()
    const { restaurants } = useSelector((state) => state.restaurants)

    useEffect(() => {
      if (query) {
        searchQuery(query);
      }      
    });  
    useEffect(() => {
      if (placeId) {
        getRestaurantsById(placeId);
      }      
    });  

     function getRestaurantsById (id) {
       const service = new google.maps.places.PlacesService(map);

      const request = {
        placeId: id,
        fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number']
      }

      service.getDetails(request, (place, status) => {
        if(status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurant(place))
        }
      })
     }   
    

    function searchQuery(query) {
      const service = new google.maps.places.PlacesService(map);

      const request = {
        location: map.center,
        radius: '200',
        type: ['restaurant'],
        query,
      }
      service.textSearch(request, (results, status) => {
        if(status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results))
        }
      })
    }

    
    function searchNearby(map, center) {
      const service = new google.maps.places.PlacesService(map);

      const request = {
        location: center,
        radius: '5000',
        type: ['restaurant'],
      }
      service.nearbySearch(request, (results, status) => {
        if(status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results))
        }
      })
    }

    function onMapReady(_,map) {
      setMap(map);
      searchNearby(map, map.center)
    }
    return (
      <Maps 
        {...props}
        google={ google } 
        centerAroundCurrentLocation 
        onReady={onMapReady} 
        onRecenter={onMapReady}
      > 
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.place_id} 
            name={restaurant.name} 
            position={{
              lat: restaurant.geometry.location.lat(),
              lng: restaurant.geometry.location.lng()
            }}
          />  
        ))}
      </Maps>
    )
} 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);

 