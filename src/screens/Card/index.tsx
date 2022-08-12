import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import {
    Container,
    Header,
    Title,
    BackButton,
    Content,
    FirstLine,
    SecondLine,
    ThirdLine,
    FourthLine,
    Text,
    Image,
    FifthLine,
    Category,
    LastGames,
    Saldo,
    SaldoGolsLine
} from './styles';

import { SvgCssUri } from 'react-native-svg';

import { displayImages } from '../../helpers'

interface Params {
    item: {
        posicao: number,
        pontos: number,
        time: {
            time_id: number,
            nome_popular: string,
            sigla: string,
            escudo: string,
        },
        jogos: number,
        vitorias: number,
        empates: number,
        derrotas: number,
        gols_pro: number,
        gols_contra: number,
        saldo_gols: number,
        aproveitamento: number,
        variacao_posicao?: number,
        ultimos_jogos: string[],
    }
}


export function Card() {
    const navigation = useNavigation();
    const routes = useRoute();

    const { item } = routes.params as Params;
    return (
        <Container>
            <Header>
                <BackButton onPress={() => navigation.navigate('GridGeral')}>
                    <MaterialIcons
                        name='chevron-left'
                        size={40}
                        color='white'
                    />
                </BackButton>
                <Title>{item.time.nome_popular} ({item.time.sigla})</Title>
            </Header>

            <Content>
                <Image source={displayImages(item.time.time_id)} />

                <FirstLine>
                    <Category>Posição: </Category>
                    <Text>{item.posicao}</Text>
                    <Category>Pontos: </Category>
                    <Text>{item.pontos}</Text>
                </FirstLine>

                <SecondLine>
                    <Category>Jogos: </Category>
                    <Text>{item.jogos}</Text>
                </SecondLine>

                <ThirdLine>
                    <Category>Vitórias: </Category>
                    <Text>{item.vitorias}</Text>
                    <Category>Empates: </Category>
                    <Text>{item.empates}</Text>
                    <Category>Derrotas: </Category>
                    <Text>{item.derrotas}</Text>
                </ThirdLine>

                <FourthLine>
                    <Category style={{color: '#196F3D'}}>Gols Pró: </Category>
                    <Text>{item.gols_pro}</Text>
                    <Category style={{color: '#943126'}}>Gols Contra: </Category>
                    <Text>{item.gols_contra}</Text>
                </FourthLine>

                <SaldoGolsLine>
                    <Category>Saldo de Gols: </Category>
                    <Saldo saldo={item.saldo_gols}>{item.saldo_gols}</Saldo>
                </SaldoGolsLine>

                <FifthLine>
                    <Category>Últimos Jogos: </Category>
                    <LastGames>
                        {item.ultimos_jogos[0] === 'v' ? <MaterialIcons name='check-circle' size={24} color='green' /> : item.ultimos_jogos[0] === 'd' ? <MaterialIcons name='circle' size={24} color='red' /> : <MaterialIcons name='remove-circle' size={24} color='gray' />}
                        {item.ultimos_jogos[1] === 'v' ? <MaterialIcons name='check-circle' size={24} color='green' /> : item.ultimos_jogos[1] === 'd' ? <MaterialIcons name='circle' size={24} color='red' /> : <MaterialIcons name='remove-circle' size={24} color='gray' />}
                        {item.ultimos_jogos[2] === 'v' ? <MaterialIcons name='check-circle' size={24} color='green' /> : item.ultimos_jogos[2] === 'd' ? <MaterialIcons name='circle' size={24} color='red' /> : <MaterialIcons name='remove-circle' size={24} color='gray' />}
                        {item.ultimos_jogos[3] === 'v' ? <MaterialIcons name='check-circle' size={24} color='green' /> : item.ultimos_jogos[3] === 'd' ? <MaterialIcons name='circle' size={24} color='red' /> : <MaterialIcons name='remove-circle' size={24} color='gray' />}
                        {item.ultimos_jogos[4] === 'v' ? <MaterialIcons name='check-circle' size={24} color='green' /> : item.ultimos_jogos[4] === 'd' ? <MaterialIcons name='circle' size={24} color='red' /> : <MaterialIcons name='remove-circle' size={24} color='gray' />}
                    </LastGames>
                </FifthLine>
            </Content>
        </Container>
    );
}