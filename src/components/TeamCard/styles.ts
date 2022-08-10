import styled, { css } from 'styled-components/native';

interface Props {
    saldo: number,
}

export const Container = styled.View`
    width: 100%;
    height: 40px;

    flex-direction: row;

    border-top-left-radius: 5px;
`;

export const Information = styled.View`
    width: 220px;
    
    flex-direction: row;

    border: 1px;
    align-items: center;
    justify-content: flex-start;
`;

export const RightBox = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
`;

export const LeftBox = styled.View`
    align-items: center;
    justify-content: flex-start;

    width: 40px;
`;

export const Position = styled.Text`
    padding-left: 12px;

    padding-right: 8px;

    font-weight: 600;
`;

export const ClubLogo = styled.Image`
    width: 24px;
    height: 24px;

`;
export const ClubName = styled.Text`
    padding-left: 8px;

    font-weight: 600;
`;

export const Title = styled.Text`
font-size: 14px;
font-weight: 500;

`;

export const Field = styled.View`
width: 30px;
border: 1px;

align-items: center;
justify-content: center;

`;

export const LastGameField = styled.View`
    width: 125px;

    border: 1px;

    flex-direction: row;
    
    align-items: center;
    justify-content: center;
`;

export const PointsField = styled.View`
    width: 40px;

    border: 1px;

    align-items: center;
    justify-content: center;
`;

export const AprovField = styled.View`
    width: 80px;

    border: 1px;

    align-items: center;
    justify-content: center;
`;

export const PointsTitle = styled.Text`
font-size: 14px;
font-weight: 700;

`;

export const SaldoTitle = styled.Text<Props>`
font-size: 14px;
font-weight: 700;

color: ${({ saldo }) => saldo < 0 ? '#943126' : '#196F3D'};
`;

export const AprovTitle = styled.Text`
font-size: 14px;
font-weight: 700;
`;
