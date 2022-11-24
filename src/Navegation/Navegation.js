import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Principal from "../paginas/paginaPrincipal";
import Index from "../home/index";

const Tab = createBottomTabNavigator();

export default function Navagtion(){
    return<NavigationContainer>
        <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: "#001848",
            inativeTintColor: "#121212", 
            labelStyle:{
                fontWeight: 650,
                fontSize: 14,
                marginTop: 4,
                marginBottom: 4,
                width: '100%',
                lineHeight: 25,
            }, 
        }}>
            <Tab.Screen name="Home" component={Index} 
                options={{
                    title: 'Bem Vindo',
                    headerStyle:{
                        backgroundColor: "#121212", 
                        borderBottomColor: "#121212",
                        }, 
                    headerTintColor: "#248cdc", 
                             
                }}
            />
            <Tab.Screen name="telaPrincipal" component={Principal} 
                options={{
                    title: 'App Music', 
                    headerStyle:{
                        backgroundColor: "#121212", 
                        borderBottomColor: "#121212", 
                    }, 
                    headerTintColor: "#248cdc"
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
}

