import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { Container, Search, TextFieldContainer, Wrapper, SliderContainer, Carousel, CarrouselTitle} from './style.js'
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import Slider from "react-slick";
import Restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, ModalInfo, Map} from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');
    const [modalOpened, setModalOpened] = useState(true)

    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
    };

    function handleKeyPress (e) {
        if (e.key === 'Enter'){
            setQuery(inputValue)
        }
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
                            trailingIcon={<MaterialIcon role="button" icon="search"/>}
                            ><Input
                                value={inputValue}
                                onKeyPress={handleKeyPress}
                                onChange={(e) => setInputValue(e.target.value)} placeholder='Search'
                            />
                        </TextField>
                    </TextFieldContainer>
                </Search>
                <SliderContainer>
                    <CarrouselTitle>Em sua Área</CarrouselTitle>
                    <Carousel {...settings}>
                       <Card backgroundImage={Restaurante} title="Peixe frito"/>
                       <Card backgroundImage={Restaurante} title="Feijoada"/>
                       <Card backgroundImage={Restaurante} title="bobra"/>
                       <Card backgroundImage={Restaurante} title="bregela"/>
                       <Card backgroundImage={Restaurante} title="aglio"/>
                    </Carousel>
                </SliderContainer>
                <RestaurantCard name="Ovidio's Restorante" rate="****" address="Rua XV de Novembro 1359, Centro, Barra Bonita-SP"  restaurantImage={Restaurante} />
                <RestaurantCard name="Marcus's Pizzarie" rate="**" address="Av PA. Afonso Pena de Carvalho, Jd. Das Acácias, Igaraçu do Tietê-SP" restaurantImage={Restaurante}/>
            </Container>
            <Map query={query}/>
            <ModalInfo open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
        </Wrapper>
    )
}

export default Home;
