import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { Container, Search, TextFieldContainer, Wrapper, SliderContainer, CarrouselTitle, Map} from './style.js'
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from "react-slick";
import Restaurante from '../../assets/restaurante-fake.png'
import Card from '../../components/'
const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
    };
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
                                onChange={(e) => setInputValue(e.target.value)} placeholder='Search'
                            />
                        </TextField>
                    </TextFieldContainer>
                </Search>
                <SliderContainer>
                    <CarrouselTitle>Em sua Área</CarrouselTitle>
                    <Slider {...settings}>
                       <Card backgroundImage={Restaurante}/>
                       <Card backgroundImage={Restaurante}/>
                       <Card backgroundImage={Restaurante}/>
                       <Card backgroundImage={Restaurante}/>
                       <Card backgroundImage={Restaurante}/>
                    </Slider>
                </SliderContainer>
            </Container>
            <Map/>
        </Wrapper>
    )
}

export default Home;