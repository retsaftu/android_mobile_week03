import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import TitlePage from "./TitlePage";
import GameStack from './GamePage/GameStack'

const Stack=createStackNavigator();

//Компонент который создает tab-ы из страниц которые прописаны ниже
export default function TitleStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Title Page'
                component={TitlePage}
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
