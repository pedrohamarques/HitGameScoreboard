import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Position,
    Logo,
    Title
} from './styles';

import { displayImages } from '../../helpers';

interface CardProps extends TouchableOpacityProps {
    posicao: number,
    time: {
        time_id: number,
        nome_popular: string,
        escudo: string,
    }
}

export function TeamCard({ posicao, time, ...rest} : CardProps){
    return (
        <Container {...rest}>
            <Position>{posicao}º</Position>
            <Logo source={displayImages(time.time_id)}/>
            <Title>{time.nome_popular}</Title>
        </Container>
    );
}