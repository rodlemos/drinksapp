import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import theme from '../styles/theme';

type Props = {
    children: ReactNode
}

export default function Background({children}:Props) {
    return (
        <LinearGradient
            colors={[theme.colors.secundary, theme.colors.secundary2]}
            style={{flex: 1}}
        >
            {children}
        </LinearGradient>
    )
}
