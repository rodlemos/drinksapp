import React from 'react';
import styled from 'styled-components/native';
import Background from '../components/Background';
import DrinkCard from '../components/DrinkCard';
import Header from '../components/Header';
import theme from '../styles/theme';

export default function Home() {

    return (
        <Background>
            <Container>
                <Header title="Home" />

                <SearchBox>
                    <SearchTitle>Search for a cocktail</SearchTitle>
                    <SearchField />
                </SearchBox>

                <Title>Cocktails</Title>
                {/* <Drinks
                    data={drink}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <DrinkCard data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                /> */}
            </Container>
        </Background>
    )
}

const Container = styled.View`
    flex: 1;
`;

const Title = styled.Text`
    font-size: 30px;
    font-family: ${theme.fonts.titles700};
    color: ${theme.colors.text};
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
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
    font-family: ${theme.fonts.subtitles500};
    font-size: 22px;
    color: ${theme.colors.text};
`;

const SearchField = styled.TextInput`
    width: 65%;
    height: 44px;
    background-color: ${theme.colors.opacity};
    border-radius: 8px;
    margin-top: 5px;
    padding-left: 8px;
`;
