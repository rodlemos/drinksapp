import React from 'react';
import styled from 'styled-components/native';
import DrinkCard from '../components/DrinkCard';
import Header from '../components/Header';


const mock = [
    {
        id: '1',
        image: 'https://github.com/rodlemos.png',
        title: 'Acid',
        alcohol: 'Alcoholic'
    },
    {
        id: '2',
        image: 'https://github.com/rodlemos.png',
        title: 'Acid',
        alcohol: 'Alcoholic'
    },
    {
        id: '3',
        image: 'https://github.com/rodlemos.png',
        title: 'Acid',
        alcohol: 'Alcoholic'
    }
]

export default function Home() {
    return (
        <Container>
            <Header/>

            <SearchBox>
                <SearchTitle>Search for a cocktail</SearchTitle>
                <SearchField/>
            </SearchBox>

            <Title>Cocktails</Title>
            <Drinks 
                data={mock}
                keyExtractor={item=> item.id}
                renderItem={({item})=> (
                    <DrinkCard data={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;

const Title = styled.Text`
    font-size: 28px;
    font-family: 'Dosis_700Bold';
    color: white;
    text-align: center;
    margin-top: 20px;
`;

const Drinks = styled.FlatList`
    flex: 1;
    margin: 0 30px;
`;

const SearchBox = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 28px;
`;

const SearchTitle = styled.Text`
    font-family: Dosis_500Medium;
    font-size: 22px;
    color: white;
`;

const SearchField = styled.TextInput`
    width: 65%;
    height: 44px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 8px;
    margin-top: 5px;
    padding-left: 8px;
`;
