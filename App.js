import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from "./components/WelcomeScreen";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
const Stack=createNativeStackNavigator();
const App=()=> {

    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
       </NavigationContainer>
    )
}
export default App;