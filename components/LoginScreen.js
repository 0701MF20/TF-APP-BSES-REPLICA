import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function LoginScreen() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    function getCurrentDateTime() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const now = new Date();
        const month = months[now.getMonth()];
        const day = now.getDate();
        const year = now.getFullYear();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        hours = hours % 12 || 12;

        // Format the date and time
        const formattedDateTime = `${month} ${day},${year} ${hours}:${minutes}:${seconds} ${ampm}`;

        return formattedDateTime;
    }

    // Example usage
    const currentDateAndTime = getCurrentDateTime();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.outerView}>
                <Text style={styles.text}>{currentDateAndTime}</Text>
                <Text style={{ backgroundColor: 'white' }}> </Text>
                <Text style={styles.text}>Version: 2.6</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center', margin:10,borderRadius:30,padding:20 }}>
                <TextInput
                    placeholder="User name"

                    value={loginData.username}
                    style={{ borderColor: '#005EB5' }}

                />
                <TextInput

                    placeholder="Password"
                    secureTextEntry
                    value={loginData.password}
                />
                <Pressable >
                    <View style={{ backgroundColor: '#005EB5', width: '100%' }}>
                        <Text style={{ color: 'black' }}>Login</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005EB5',
    },
    outerView: {
        flexDirection: 'row',
        margin: 5,
        borderRadius: 50,
        padding: 5,
        backgroundColor: '#ff6600',

    },
    text: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
