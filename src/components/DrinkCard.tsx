import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export type DrinksProps = {
    id: string;
    image: string;
    title: string;
    alcohol: string;
}

type Props = RectButtonProperties & {
    data: DrinksProps;
}

export default function DrinkCard({ data, ...rest }: Props) {


    return (
        <RectButton {...rest}>
            <Gradient
                colors={['#5c5c5c', '#24352f']}
            >
                    <View style={{borderRightWidth: 1, borderColor: '#00c700'}}>
                    <DrinkImg source={{ uri: data.image }} />
                    </View>
                    <Wrapper>
                        <DrinkName>{data.title}</DrinkName>
                        <DrinkType>{data.alcohol}</DrinkType>
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
    border: 1px solid #00c700;
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
    font-family: Dosis_700Bold;
    color: #adff2f;
    font-size: 28px;
`;

const DrinkType = styled.Text`
    font-family: Dosis_500Medium;
    color: white;
    font-size: 18px;
    
`;


//#51be51