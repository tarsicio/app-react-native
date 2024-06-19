/**
 * 2024-06-18
 * Realizada por  Tarsicio Carrizales
 * telecom.com.ve@gmail.com
 * Entrenamiento React Native
 */
import react, { useState } from 'react';
import { View, Text, Image, Button, Alert, TextInput } from 'react-native';
import styles from './style';

const LoginScreen = ({navigation}) => {

        const [user, setUser] = useState("");       
        const [password, setPassword] = useState("");

        const handleSignInPress = () => {
                if(user.trim().length > 0 && password.length > 0){
                        if(user === "si" && password === "si"){
                                navigation.navigate("Home");
                        }else{
                                Alert.alert('Error', 'Datos incorrectos, verifique...');
                                setUser("");
                                setPassword("");
                        }
                }
        };

        const handleUserTextChange = (texto) => {
                setUser(texto)
        };

        const handlePasswordTextChange = (texto) => {
                setPassword(texto);
        };

        return (
                <View style={styles.container}>
                        <View style={styles.viewText}>
                                <Text>React Native</Text>
                        </View>
                        <View style={styles.viewText}>
                                <Text>Junio del 2024</Text>
                        </View>
                        <View style={styles.viewText}>
                                <Text>Realizado por: Tarsicio Carrizales</Text>
                        </View>
                        <View style={styles.imageContainer}>
                                <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                                style={styles.imagen} />
                        </View>
                        <View style={styles.viewTextInput}>
                                <TextInput 
                                        placeholder="User"
                                        style={styles.textInput}
                                        onChangeText={handleUserTextChange}
                                        value={user}
                                />
                                <TextInput 
                                        placeholder="Pasword" 
                                        style={styles.textInput} 
                                        secureTextEntry
                                        onChangeText={handlePasswordTextChange}
                                        value={password} 
                                />
                        </View>
                        <View style={styles.viewButton}>
                                <Button title="SIGN IN" 
                                        style={styles.button}
                                        onPress={handleSignInPress}
                                />
                        </View>
                </View>
        );
};



export default LoginScreen;        