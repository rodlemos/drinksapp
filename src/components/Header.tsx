import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import theme from '../styles/theme';

type Props = {
    title: string;
}

export default function Header({title}:Props) {
    return (
        <Container
            colors={[theme.colors.primary3, theme.colors.primary4]}
            style={{paddingTop: getStatusBarHeight()}}
        >
            <Title>{title}</Title>
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
    font-size: 30px;
    font-family: ${theme.fonts.titles700};
    color: ${theme.colors.text};
`;