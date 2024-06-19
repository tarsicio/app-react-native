import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
        imagen: {
                width: 50, 
                height: 50,
                alignSelf: "center",
                borderRadius: 50 / 2,
        },
        imageContainer: {
                marginTop: 10,
                marginBottom: 10,
        },
        textInput: {
                backgroundColor: "#fff",
                padding: 6,
                marginTop: 4,
                marginBottom: 12,
                fontSize: 16,
        },
        viewButton: {
                justifyContent: "center",
                alignSelf: "center",
                marginLeft: 10,
                marginRight: 10,
        },
        button: {
                backgroundColor: "#197602",
        },
        container: {
                flex: 1,
                justifyContent: "center",
                marginLeft: 18,
                marginRight: 18,
                backgroundColor: "#C3E2F9",
        },
        viewText: {
                justifyContent: "center",
                alignSelf: "center",
                marginLeft: 18,
                marginRight: 18,
        },
        viewTextInput: {
                justifyContent: "center",
                alignSelf: "center",
                marginLeft: 18,
                marginRight: 18,
        }
});

export  default styles;