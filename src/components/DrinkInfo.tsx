import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import theme from '../styles/theme';

export default function DrinkInfo() {
    return (
        <ScrollView>
            <Container>
                <ItemBox>
                    <ItemTitle>Category</ItemTitle>
                    <ItemText>Cocktail</ItemText>
                </ItemBox>

                <ItemBox>
                    <ItemTitle>Type</ItemTitle>
                    <ItemText>Alcoholic</ItemText>
                </ItemBox>

                <ItemBox>
                    <ItemTitle>Glass</ItemTitle>
                    <ItemText>Cocktail glass</ItemText>
                </ItemBox>

                <BigBox>
                    <BigTitle>Ingredients</BigTitle>
                    <ItemText>Lorem ipsum dolor sit amet.</ItemText>
                    <ItemText>Lorem ipsum dolor sit amet.</ItemText>
                    <ItemText>Lorem ipsum dolor sit amet.</ItemText>
                    <ItemText>Lorem ipsum dolor sit amet.</ItemText>
                </BigBox>

                <BigBox>
                    <BigTitle>Instructions</BigTitle>
                    <ItemText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita rerum ex hic, eos eaque pariatur consectetur! Similique, dicta quasi!</ItemText>
                </BigBox>
            </Container>
        </ScrollView>
    )
}

const Container = styled.View`
    flex: 1;
    margin: 30px;
`;

const ItemBox = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin: 5px 0;
    background-color: ${theme.colors.secundary3};
    border-radius: 8px;
`;

const ItemTitle = styled.Text`
    font-family: ${theme.fonts.titles700};
    font-size: 20px;
    color: ${theme.colors.text};
    background-color: ${theme.colors.primary5};
    padding: 8px 12px;
    border-radius: 8px;
`;

const ItemText = styled.Text`
    font-family: ${theme.fonts.text400};
    font-size: 20px;
    color: ${theme.colors.text};
    margin-left: 10px;
`;

const BigBox = styled(ItemBox)`
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 5px;
`;

const BigTitle = styled(ItemTitle)`
    width: 100%;
    margin-bottom: 5px;
`;