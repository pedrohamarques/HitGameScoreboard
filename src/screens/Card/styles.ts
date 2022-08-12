import styled from 'styled-components/native';

interface Props {
    saldo: number,
}

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

    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 700;

    color: white;

    position: absolute;
`;

export const BackButton = styled.TouchableOpacity`
    margin-right: 325px;
`;

export const Content = styled.View`
    width: 100%;
    height: 80%;

    align-items: center;
    justify-content: center;

    margin: 16px;
`;

export const FirstLine = styled.View`
    width: 60%;

    flex-direction: row;
    margin: 32px 8px 8px 8px;

    align-items: center;
    justify-content: space-between;

    border-bottom: 1px;
`;

export const SecondLine = styled.View`
    width: 25%;
    flex-direction: row;
    margin: 8px;

    align-items: center;
    justify-content: space-between;
`;

export const ThirdLine = styled.View`
    width: 90%;
    flex-direction: row;
    margin: 8px;

    align-items: center;
    justify-content: space-between;
`;

export const FourthLine = styled.View`
    width: 60%;
    flex-direction: row;
    margin: 8px;

    align-items: center;
    justify-content: space-between;
`;

export const SaldoGolsLine = styled.View`
    width: 40%;
    flex-direction: row;
    margin: 8px;

    align-items: center;
    justify-content: space-between;
`;

export const FifthLine = styled.View`
    flex-direction: column;
    margin: 8px;

    align-items: center;
    justify-content: center;
`;


export const Text = styled.Text`
    font-size: 18px;

    font-weight: 700;
`;

export const Image = styled.Image`
    width: 256px;
    height: 256px;
`;

export const Category = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

export const LastGames = styled.View`
    
    margin-top: 8px;
    flex-direction: row;
`;

export const Saldo = styled.Text<Props>`
    font-size: 18px;

    font-weight: 700;

    color: ${({ saldo }) => saldo < 0 ? '#943126' : '#196F3D'};
`;