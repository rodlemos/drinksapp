import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

export default function Background({children}:Props) {
    return (
        <LinearGradient
            colors={['#293332','#252e2d']}
            style={{flex: 1}}
        >
            {children}
        </LinearGradient>
    )
}
