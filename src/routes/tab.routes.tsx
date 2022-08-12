import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Standings } from '../screens/Standings';

import { InfoTeamsRoute } from './stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#28B463',
                tabBarInactiveTintColor: '#95A5A6',      
                tabBarActiveBackgroundColor: "#FFFFFF",
                tabBarInactiveBackgroundColor: '#FFFFFF',
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 60,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,                    
                }
            }}
        >
            <Screen 
                name='Classificação'
                component={Standings}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name="table-rows"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
           <Screen 
                name='Times'
                component={InfoTeamsRoute}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name="table-chart"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}