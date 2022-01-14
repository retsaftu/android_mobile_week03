import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import GamePage1 from "./GamePage1";
import GamePage2 from "./GamePage2";
import GamePage3 from "./GamePage3";
import LosePage from "./LosePage";
import WinPage from "./WinPage";


const Stack=createStackNavigator();

//Компонент который создает tab-ы из страниц которые прописаны ниже
export default function GameStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Game Page 1'
                component={GamePage1}
                options={{title: 'Question 1'}}
               />
            <Stack.Screen
                name='Game Page 2'
                component={GamePage2}
                options={{title: 'Question 2'}}
               />
            <Stack.Screen
                name='Game Page 3'
                component={GamePage3}
                options={{title: 'Question 3'}}
               />
            <Stack.Screen
                name='Game Lose'
                component={LosePage}
                options={{title: 'Lose Page'}}
               />
            <Stack.Screen
                name='Game Win'
                component={WinPage}
                options={{title: 'Win Page'}}
               />
        </Stack.Navigator>
    )
}
