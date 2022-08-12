import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;

    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: 60px;

    align-items: center;
    justify-content: center;
    background-color: #28B463;

    margin-bottom: 8px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 700;

    color: white;
`;

export const FilterArea = styled.View`
    flex-direction: column;
    
    width: 95%;
    height: 20%;

    margin-bottom: 40px;

`;

export const FilterTitle = styled.Text`
    font-size: 14px;
    font-weight: 600;

    color: #4D5656;

    margin-right: 4px;
`;

export const FilterHead = styled.Text`
    font-size: 16px;
    font-weight: 600;

    color: #808B96;
`;

export const FilterOptions = styled.View`
    flex-direction: row;
    
    width: 95%;

    margin-left: 8px;

    align-items: center;
    justify-content: space-between;
`;

export const FilterColumn = styled.View`
    width: 120px;
    height: 110px;

    align-items: flex-start;
    justify-content: space-around;

`;

export const FilterByName = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px;
    border-radius: 8px;
    border-color: #808B96;

    width: 80px;
    height: 30px;

    background-color: #D0D3D4;
`;

export const FilterByAprov = styled.View`
    width: 100%;
    flex-direction: row;

    align-items: center;

    justify-content: center;

    border: 1px;
    border-radius: 8px;
    border-color: #808B96;

    width: 140px;
    height: 45px;

    background-color: #D0D3D4;
`;

export const FilterByGoals = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;

    justify-content: center;

    border: 1px;
    border-radius: 8px;
    border-color: #808B96;

    width: 140px;
    height: 45px;

    background-color: #D0D3D4;

`;

export const FilterByLastVictory = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px;
    border-radius: 8px;
    border-color: #808B96;

    width: 125px;
    height: 45px;

    background-color: #D0D3D4;

`;

export const FilterByLastLost = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px;
    border-radius: 8px;
    border-color: #808B96;

    width: 125px;
    height: 45px;

    background-color: #D0D3D4;
`;

export const FilterClean = styled.TouchableOpacity`
    border: 1px;
    border-radius: 8px;

    border-color: #808B96;

    width: 100px;
    height: 30px;

    align-items: center;
    justify-content: center;

    background-color: #D0D3D4;
`;

export const FilterHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-right: 16px;

`;

export const SendButton = styled.TouchableOpacity`

`;