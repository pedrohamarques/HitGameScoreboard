import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import _ from 'lodash';

import { TeamCard } from '../../components/TeamCard';

import backEndData from '../../server/backend-classification.json';

import {
    Container,
    Header,
    Title,
    FilterArea,
    FilterHead,
    FilterTitle,
    FilterOptions,
    FilterColumn,
    FilterByName,
    FilterByAprov,
    FilterByGoals,
    FilterByLastVictory,
    FilterByLastLost,
    FilterClean,
    FilterHeader,
    SendButton,
} from './styles';
import { TextInput } from 'react-native-gesture-handler';

export function GridList() {
    const [data, setData] = useState(backEndData);
    const [sortedData, setSortedData] = useState(backEndData);
    const [alphabeticalOrder, setAlphabeticalOrder] = useState(false);
    const [isVictory, setIsVictory] = useState(false);
    const [isLoss, setIsLoss] = useState(false);
    const [filterActive, setFilterActive] = useState(false);
    const [approvNumber, setApprovNumber] = useState('');
    const [saldoNumber, setSaldoNumber] = useState('');
    const [isApprov, setIsApprov] = useState(false);
    const [isSaldo, setIsSaldo] = useState(false);

    const navigation = useNavigation();
    const dataKey = '@Scoreboard:teamData';

    function handleOpenCard(item: {}) {
        navigation.navigate('Card', { item: item })
    }

    function handleFilterByNameCorrect() {
        const filteredData = _.orderBy(data, item => item.time.nome_popular, ['asc'])
        setData(filteredData);
        setAlphabeticalOrder(true);
        setFilterActive(true);
    }

    function handleLastVictory() {
        const filtered = data.filter(item => item.ultimos_jogos[0] === 'v')
        setData(filtered)
        setIsVictory(!isVictory)
        setFilterActive(true);
    }

    function handleLastLoss() {
        const filtered = data.filter(item => item.ultimos_jogos[0] === 'd')
        setData(filtered)
        setIsLoss(!isLoss)
        setFilterActive(true);
    }

    function cleanFilters() {
        setAlphabeticalOrder(false);
        setIsLoss(false);
        setIsVictory(false);
        setData(backEndData);
        setFilterActive(false);
        setSaldoNumber('');
        setApprovNumber('');
        setIsApprov(false);
        setIsSaldo(false);
    }

    function handleApprov(approvNumber: any) {
        const filtered = data.filter(item => approvNumber <= item.aproveitamento)
        setData(filtered)
        setFilterActive(true);
        setIsApprov(true);
    }

    function handleSaldo(approvNumber: any) {
        const filtered = data.filter(item => approvNumber <= item.saldo_gols)
        setData(filtered)
        setFilterActive(true);
        setIsSaldo(true);
    }

    return (
        <Container>
            <StatusBar barStyle='default' />

            <Header>
                <Title>Times</Title>
            </Header>

            <FilterArea>
                <FilterHeader>
                    <FilterHead>Filtros: </FilterHead>
                    <FilterClean onPress={cleanFilters}>
                        <FilterTitle >Limpar Filtros</FilterTitle>
                    </FilterClean>
                </FilterHeader>

                <FilterOptions>
                    <FilterColumn style={{ width: 55 }}>
                        <FilterByName
                            onPress={handleFilterByNameCorrect}
                            disabled={alphabeticalOrder || filterActive ? true : false}
                        >
                            <FilterTitle>Nome</FilterTitle>

                            {alphabeticalOrder === true &&
                                <MaterialIcons name='filter-alt' size={20} color='#808B96' />
                            }

                        </FilterByName>
                    </FilterColumn>

                    <FilterColumn>
                        <FilterByAprov>
                            <FilterTitle>Aprov.:{'\n'}(%)</FilterTitle>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='0'
                                maxLength={2}
                                value={approvNumber}
                                onChangeText={setApprovNumber}
                                editable={filterActive === true ? false : true}
                                multiline={false}
                                style={{
                                    borderWidth: 1,
                                    borderBottomColor: '#808B96',
                                    borderRadius: 4,
                                    height: 25,
                                    paddingLeft: 8,
                                }}

                            />
                            <SendButton
                                onPress={() => handleApprov(approvNumber)}
                                disabled={filterActive ? true : false}>
                                <MaterialIcons name='filter-list' size={20} />
                            </SendButton>

                            { isApprov === true &&
                                <MaterialIcons name='filter-alt' size={20} color='#808B96' />
                            }

                        </FilterByAprov>
                        <FilterByGoals>
                            <FilterTitle>Saldo de{'\n'}Gols:</FilterTitle>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='0'
                                maxLength={2}
                                multiline={false}
                                value={saldoNumber}
                                onChangeText={setSaldoNumber}
                                editable={filterActive === true ? false : true}
                                style={{
                                    borderWidth: 1,
                                    borderBottomColor: '#808B96',
                                    borderRadius: 4,
                                    height: 25,
                                    paddingLeft: 8,
                                    
                                }}
                            />
                            <SendButton
                                onPress={() => handleSaldo(saldoNumber)}
                                disabled={filterActive ? true : false}>
                                <MaterialIcons name='filter-list' size={20} />
                            </SendButton>

                            {isSaldo === true &&
                                <MaterialIcons name='filter-alt' size={20} color='#808B96' />
                            }
                        </FilterByGoals>
                    </FilterColumn>

                    <FilterColumn>
                        <FilterByLastVictory onPress={handleLastVictory} disabled={isVictory || filterActive ? true : false}>
                            <FilterTitle>Vitória (Últ.{'\n'}Jogo)</FilterTitle>

                            {isVictory === true &&
                                <MaterialIcons name='filter-alt' size={20} color='#808B96' />
                            }
                        </FilterByLastVictory>
                        <FilterByLastLost onPress={handleLastLoss} disabled={isLoss || filterActive ? true : false}>
                            <FilterTitle>Derrota (Últ.{'\n'}Jogo)</FilterTitle>

                            {isLoss === true &&
                                <MaterialIcons name='filter-alt' size={20} color='#808B96' />
                            }
                        </FilterByLastLost>
                    </FilterColumn>
                </FilterOptions>

            </FilterArea>

            <FlatList
                data={data}
                renderItem={({ item }) => <TeamCard posicao={item.posicao} time={item.time} onPress={() => handleOpenCard(item)} />}
                keyExtractor={(item) => item.time.time_id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                numColumns={3}
                removeClippedSubviews={false}
            />
        </Container>
    );
}