/**
 * 2024-06-18
 * Realizada por  Tarsicio Carrizales
 * telecom.com.ve@gmail.com
 * Entrenamiento React Native
 */
import react, { useState } from 'react';
import { View, Text, Image, 
        SafeAreaView, Button } from 'react-native';
import styles from './style';        

const HomeScreen = ({navigation}) => {

        const handleButtonListadoPress = () => {
                navigation.navigate("TodoList");
        }
        return (
                <SafeAreaView style={styles.container}>
                        <View style={styles.headerContainer}>
                                <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                                style={styles.imagen} />
                        </View>
                        <View style={styles.content}>
                                <Text style={styles.title}>Welcome Back User..</Text>
                        </View>
                        <View style={styles.content}>
                                <Button title="Listado" 
                                style={styles.button}
                                onPress={handleButtonListadoPress}
                        />           
                        </View>
                </SafeAreaView>
        );
};

export default HomeScreen;        