import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Card } from '../screens/Card';
import { GridList } from '../screens/GridList';


export function InfoTeamsRoute() {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='GridGeral'
            >

            <Screen
                name="GridGeral"
                component={GridList}
            />
            <Screen
                name="Card"
                component={Card}
            />
        </Navigator>
    )
}