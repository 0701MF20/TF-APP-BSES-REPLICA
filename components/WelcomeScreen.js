import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
    function navToWelcome() {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000)
    }

    useEffect(() => {
        navToWelcome()
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centerContent}>
                <Text style={styles.text}>Welcome to TF App</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#005EB5',
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',     
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',    
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
});
