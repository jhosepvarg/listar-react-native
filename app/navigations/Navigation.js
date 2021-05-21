import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstView from '../views/FirstView';
import SecondView from '../views/SecondView';

const Drawer = createDrawerNavigator();

export default function navigation() {

    return (

        <NavigationContainer>

            <Drawer.Navigator>

                <Drawer.Screen name="View 1" component={FirstView} />

                <Drawer.Screen name="View 2" component={SecondView} />

            </Drawer.Navigator>

        </NavigationContainer>

    )
}