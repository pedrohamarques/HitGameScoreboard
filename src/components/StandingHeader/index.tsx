import React from 'react';

import {
    Container,
    BigColumn,
    TitleField,
    Title,
    Field,
    PointsField,
    AprovField,
    LastGameField,
} from './styles';

export function StandingHeader() {
    return (
        <Container>
            <BigColumn>
                <TitleField>
                    <Title>Clube</Title>
                </TitleField>
            </BigColumn>

            <PointsField>
                <Title>Pts</Title>
            </PointsField>
            <Field>
                <Title>J</Title>
            </Field>
            <Field>
                <Title>V</Title>
            </Field>
            <Field>
                <Title>E</Title>
            </Field>
            <Field>
                <Title>D</Title>
            </Field>
            <Field>
                <Title>GP</Title>
            </Field>
            <Field>
                <Title>GC</Title>
            </Field>
            <Field>
                <Title>SG</Title>
            </Field>
            <AprovField>
                <Title>Aprv (%)</Title>
            </AprovField>
            <LastGameField>
                <Title>Últimos Jogos</Title>
            </LastGameField>
        </Container>
    );
}