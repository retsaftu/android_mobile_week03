import React, {Component}  from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TitleStack from './TitleStack'
import AboutStack from './AboutStack'
import RulesStack from './RulesStack'

const Drawer = createDrawerNavigator();


export default class DrawerNavigator extends Component {

    render(){
        return(
        <Drawer.Navigator>
            <Drawer.Screen
                name='TitleStack'
                component={TitleStack}
                options={{title:'Title Page'}}/>
            <Drawer.Screen
                name='RulesStack'
                component={RulesStack}
                options={{title:'Rules Page'}}/>
            <Drawer.Screen
                name='AboutStack'
                component={AboutStack}
                options={{title:'About Page'}}/>
        </Drawer.Navigator>
        )
    }
}