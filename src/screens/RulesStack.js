import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import RulesPage from "./RulesPage";
import GameStack from './GamePage/GameStack'


const Stack=createStackNavigator();

//Компонент который создает tab-ы из страниц которые прописаны ниже
export default function RulesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Rules Page'
                component={RulesPage}
                options={{headerShown: false}}
               />
            <Stack.Screen
                name='GameStack'
                component={GameStack}
                options={{headerShown: false}}
              />
        </Stack.Navigator>
    )
}
