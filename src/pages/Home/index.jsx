import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import {
  Container,
  Search,
  TextFieldContainer,
  Wrapper,
  SliderContainer,
  Carousel,
  CarrouselTitle,
  ModalTitle,
  ModalContent,
} from "./style.js";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
// import Slider from "react-slick";
import Restaurante from "../../assets/restaurante-fake.png";
import { Card, RestaurantCard, Modal, Map } from "../../components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantsSelected } = useSelector(
    (state) => state.restaurants
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setModalOpened(true);
    setPlaceId(placeId);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <img src={logo} alt="logo" />
          <TextFieldContainer>
            <TextField
              label="Pesquisar"
              outlined
              onTrailingIconSelect={() => setInputValue(inputValue)}
              trailingIcon={<MaterialIcon role="button" icon="search" />}
            >
              <Input
                value={inputValue}
                onKeyPress={handleKeyPress}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search"
              />
            </TextField>
          </TextFieldContainer>
        </Search>
        <SliderContainer>
          <CarrouselTitle>Em sua Área</CarrouselTitle>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.place_id}
                backgroundImage={
                  restaurant.photos
                    ? restaurant.photos[0].getUrl()
                    : Restaurante
                }
                title={restaurant.name}
              />
            ))}
          </Carousel>
        </SliderContainer>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.place_id}
            restaurant={restaurant}
            onClick={() => handleOpenModal(restaurant.place_id)}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(!modalOpened)}
      >
        <ModalTitle>{restaurantsSelected?.name}</ModalTitle>      
        <ModalContent>{restaurantsSelected?.formatted_phone_number ? restaurantsSelected?.formatted_phone_number : '*Telefone de contato não informado'}</ModalContent>      
        <ModalContent>{restaurantsSelected?.formatted_address ? restaurantsSelected?.formatted_address: '*Endereço não informado'}</ModalContent>      
        <ModalContent>{restaurantsSelected?.opening_hours?.open_now ? 'Aberto no momento 👍': 'Fechado no momento 👎'}</ModalContent>      
      </Modal>
    </Wrapper>
  );
};

export default Home;
