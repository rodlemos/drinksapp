import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import theme from '../styles/theme';

type DrinksProps = {
    id: string;
    name: string;
    image: string;
    info: string;
    glass: string;
}

type Props = RectButtonProperties & {
    data: DrinksProps;
}

export default function DrinkCard({ data, ...rest }: Props) {
    return (
        <RectButton {...rest}>
            <Gradient
                colors={[theme.colors.secundary3, theme.colors.secundary4]}
            >
                <View
                    style={{ borderRightWidth: 1, borderColor: theme.colors.primary }}
                >
                    <DrinkImg source={{ uri: data.image }} />
                </View>
                <Wrapper>
                    <DrinkName>{data.name}</DrinkName>
                    <DrinkType>{data.info}</DrinkType>
                </Wrapper>

            </Gradient>
        </RectButton>
    )
}

const Gradient = styled(LinearGradient)`
    flex: 1;
    width: 100%;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${theme.colors.primary};
    margin: 5px 0;
    overflow: hidden;
`;

const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const DrinkImg = styled.Image`
    width: 110px;
    height: 110px;
`;

const DrinkName = styled.Text`
    font-family: ${theme.fonts.titles700};
    color: ${theme.colors.primary2};
    font-size: 28px;
`;

const DrinkType = styled.Text`
    font-family: ${theme.fonts.subtitles500};
    color: ${theme.colors.text};
    font-size: 18px;
    
`;