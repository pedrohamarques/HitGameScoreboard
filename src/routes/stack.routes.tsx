import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Standings } from '../screens/Standings';
import { GridList } from '../screens/GridList';


export function InfoTeamsRoute() {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}>

            <Screen
                name="GridGeral"
                component={GridList}
            />
        </Navigator>
    )
}