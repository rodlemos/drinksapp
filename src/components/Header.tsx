import React from 'react'
import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
    return (
        <Container
            colors={['#51be51','#498a49']}
            style={{paddingTop: getStatusBarHeight()}}
        >
            <Title>Better things are coming -Logo-</Title>
        </Container>
    )
}


const Container = styled(LinearGradient)`
    width: 100%;
    height: 108px;
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-family: Dosis_700Bold;
    color: white;
`;