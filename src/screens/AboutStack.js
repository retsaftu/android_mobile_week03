import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import AboutPage from "./AboutPage";
import GameStack from './GamePage/GameStack'


const Stack=createStackNavigator();

//Компонент который создает tab-ы из страниц которые прописаны ниже
export default function AboutStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='About Page'
                component={AboutPage}
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
