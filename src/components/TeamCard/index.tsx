import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

import {
    Container,
    Information,
    LeftBox,
    RightBox,
    Position,
    ClubLogo,
    ClubName,
    Field,
    Title,
    AprovField,
    PointsField,
    LastGameField,
    PointsTitle,
    SaldoTitle,
    AprovTitle,
} from './styles';

import { TeamCardProps } from './interfaces';

export function TeamCard({
    aproveitamento,
    derrotas,
    empates,
    gols_contra,
    gols_pro,
    jogos,
    posicao,
    saldo_gols,
    time,
    ultimos_jogos,
    vitorias,
    pontos

}: TeamCardProps) {


    return (
        <Container>
            <Information>
                <LeftBox>
                    <Position>{posicao}</Position>
                </LeftBox>
                <RightBox>
                    {/* <SvgUri width={24} height={24} uri={time.escudo}/> */}
                    <ClubName>{time.nome_popular}</ClubName>
                    <ClubName>({time.sigla})</ClubName>
                </RightBox>
            </Information>
            <PointsField>
                <PointsTitle>{pontos}</PointsTitle>
            </PointsField>
            <Field>
                <Title>{jogos}</Title>
            </Field>
            <Field>
                <Title>{vitorias}</Title>
            </Field>
            <Field>
                <Title>{empates}</Title>
            </Field>
            <Field>
                <Title>{derrotas}</Title>
            </Field>
            <Field>
                <Title>{gols_pro}</Title>
            </Field>
            <Field>
                <Title>{gols_contra}</Title>
            </Field>
            <Field>
                <SaldoTitle saldo={saldo_gols}>{saldo_gols}</SaldoTitle>
            </Field>
            <AprovField>
                <AprovTitle>{aproveitamento}%</AprovTitle>
            </AprovField>
            <LastGameField>
               {ultimos_jogos[0] === 'v' ? <MaterialIcons name='check-circle' size={24} color='green'/> : ultimos_jogos[0] === 'd' ? <MaterialIcons name='circle' size={24} color='red'/> :  <MaterialIcons name='remove-circle' size={24} color='gray'/>}
               {ultimos_jogos[1] === 'v' ? <MaterialIcons name='check-circle' size={24} color='green'/> : ultimos_jogos[1] === 'd' ? <MaterialIcons name='circle' size={24} color='red'/> :  <MaterialIcons name='remove-circle' size={24} color='gray'/>}
               {ultimos_jogos[2] === 'v' ? <MaterialIcons name='check-circle' size={24} color='green'/> : ultimos_jogos[2] === 'd' ? <MaterialIcons name='circle' size={24} color='red'/> :  <MaterialIcons name='remove-circle' size={24} color='gray'/>}
               {ultimos_jogos[3] === 'v' ? <MaterialIcons name='check-circle' size={24} color='green'/> : ultimos_jogos[3] === 'd' ? <MaterialIcons name='circle' size={24} color='red'/> :  <MaterialIcons name='remove-circle' size={24} color='gray'/>}
               {ultimos_jogos[4] === 'v' ? <MaterialIcons name='check-circle' size={24} color='green'/> : ultimos_jogos[4] === 'd' ? <MaterialIcons name='circle' size={24} color='red'/> :  <MaterialIcons name='remove-circle' size={24} color='gray'/>}
            </LastGameField>
        </Container>
    );
}