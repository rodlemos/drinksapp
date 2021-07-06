import React from 'react';
import styled from 'styled-components/native';
import Background from '../components/Background';
import DrinkInfo from '../components/DrinkInfo';
import Header from '../components/Header';

export default function Drink() {
    return (
        <Background>
            <Header title="Drinks"/>
            <DrinkBanner source={{uri: "https://github.com/rodlemos.png"}}/>

            <DrinkInfo/>
        </Background>
    )
}

const DrinkBanner = styled.Image`
    width: 100%;
    height: 220px;
`;