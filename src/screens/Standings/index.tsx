import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import { TeamCard } from '../../components/TeamCard';
import { StandingHeader } from '../../components/StandingHeader';

import {
    Container,
    Header,
    Title,
    Content,
} from './styles';

import backEndData from '../../server/backend-classification.json';

export function Standings() {
    return (
        <Container>
            <StatusBar barStyle='default' />

            <Header>
                <Title>Classificação</Title>
            </Header>
            <ScrollView>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Content>
                        <StandingHeader />
                        {backEndData.map((item) =>
                            <TeamCard
                                aproveitamento={item.aproveitamento}
                                derrotas={item.derrotas}
                                empates={item.empates}
                                gols_contra={item.gols_contra}
                                gols_pro={item.gols_pro}
                                jogos={item.jogos}
                                pontos={item.pontos}
                                posicao={item.posicao}
                                saldo_gols={item.saldo_gols}
                                time={item.time}
                                ultimos_jogos={item.ultimos_jogos}
                                vitorias={item.vitorias}
                                key={item.time.time_id}
                            />)

                        }
                    </Content>
                </ScrollView>
            </ScrollView>
        </Container>
    );
}