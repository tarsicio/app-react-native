/**
 * 2024-06-18
 * Realizada por  Tarsicio Carrizales
 * telecom.com.ve@gmail.com
 * Entrenamiento React Native
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
                flex: 1,
        },
        headerContainer: {
                backgroundColor: "#634AFF",
                height: 50,
                justifyContent: "center",
                alignItems: "flex-end",
                paddingLeft: 12,
                paddingRight: 12,
        },
        imagen: {
                width: 35, 
                height: 35,
                borderRadius: 50 / 2,
        },
        content: {
                flex: 1,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
        },
        title:{
                fontSize: 30
        }
});

export default styles;