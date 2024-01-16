import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

export default function SplashScreen({ navigation }) {
    function navToWelcome() {
        setTimeout(() => {
            navigation.navigate('Welcome');
        }, 1000);
    }

    useEffect(() => {
        navToWelcome();
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centerContent}>
                <Text style={{
                    fontSize: 30, fontWeight: 'bold', position: 'absolute',
                    top: '40%', 
                    color:'black'
                }}>TF</Text>
                <Image
                    source={{ uri: "https://www.bsesdelhi.com/image/layout_set_logo?img_id=91566&t=1705387467891" }}
                    style={styles.logoImage}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    position:'relative'
    },
    logoImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
});
