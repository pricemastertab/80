import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from "../appHistorias/screens/Feed";
import CreateHistory from "../appHistorias/screens/CreateStory";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
          screenOptions={({route})=>(
            {
                tabBarIcon:({focused, color, size}) => {
                    let IconName;
                    if (route.name === 'Feed'){
                        IconName = focused? 'book': 'book-outline'
                    } else if (route.name === 'CreateHistory'){
                        IconName = focused? 'create': 'create-outline'
                    }
                    return <Ionicons name={IconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            }
    )}
        >
            <Tab.Screen name="Feed" component={Feed} ></Tab.Screen>
            <Tab.Screen name="CreateHistory" component={CreateHistory} ></Tab.Screen> 
        </Tab.Navigator>
    );
}

export default BottomTabNavigator