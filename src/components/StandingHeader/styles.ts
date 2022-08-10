import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 40px;

    flex-direction: row;
`;

export const BigColumn = styled.View`
    width: 220px;
    
    border: 1px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TitleField = styled.View`
    margin: 4px;

    flex-direction: row;
    padding-left: 8px;
`;

export const Title = styled.Text`
    font-size: 16px;

    font-weight: 500;
`;

export const Field =  styled.View`
    width: 30px;

    border: 1px;

    align-items: center;
    justify-content: center;
`;

export const LastGameField =  styled.View`
    width: 125px;

    border: 1px;

    align-items: center;
    justify-content: center;

`;

export const PointsField =  styled.View`
    width: 40px;

    border: 1px;

    align-items: center;
    justify-content: center;


`;

export const AprovField =  styled.View`
    width: 80px;

    border: 1px;

    align-items: center;
    justify-content: center;
`;