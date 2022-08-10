import React from 'react';
import { StatusBar } from 'react-native';

import {
    Container,
    Header,
    Title,
} from './styles';

export function GridList() {
    return (
        <Container>
            <StatusBar barStyle='default' />

            <Header>
                <Title>Times</Title>
            </Header>
        </Container>
    );
}