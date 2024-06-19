/**
 * 2024-06-18
 * Realizada por  Tarsicio Carrizales
 * telecom.com.ve@gmail.com
 * Entrenamiento React Native
 */
import react, { useState } from 'react';
import { View, Text, Button, TextInput, 
				SafeAreaView, FlatList } from 'react-native';
import styles from './style';

const TodoListScreen = ({navigation}) => {

	const [todoListData, setTodoListData] = useState([]);
	const [todoText, setTodoText] = useState("");

	const handleChangeText = (texto) => {
		setTodoText(texto);
	};

	const handleButtonPress = () => {
		if(todoText.trim().length > 0){
			setTodoListData((value) => value.concat({text: todoText}));
			setTodoText("");
		}
	};

	const handleRederListItem = ({item}) => {
		return <Text>{item.text}</Text>
	};

	const handleButtonHomePress = () => {
		navigation.navigate("Home");
	}

	const handleButtonLoginPress = () => {
		navigation.navigate("Login");
	}

	return (
		<SafeAreaView style={styles.container} >
			<View style={styles.container}>
				<View style={styles.viewStyle}>
					<TextInput 
						placeholder="Escribe una palabra"
						placeholderTextColor="#c4c4c4" 
						style={styles.textInput}
						value={todoText}
						onChangeText={handleChangeText} 
					/>
					<Button 
						title="ENTER"
						style={styles.buttom}
						onPress={handleButtonPress} 
					/>		
				</View>
				<View style={styles.viewStyle}>
					<Button 
						title="Home"
						style={styles.buttom}
						onPress={handleButtonHomePress} 
					/>
				</View>
				<View style={styles.viewStyle}>	
					<Button 
						title="Login"
						style={styles.buttom}
						onPress={handleButtonLoginPress} 
					/>
				</View>
				<View style={styles.viewStyle}>
					<FlatList 
						data={todoListData}
						renderItem={handleRederListItem}
						KeyExtractor={(item) => item.text}
					/>
				</View>
			</View>		
		</SafeAreaView>
	);
};

export default TodoListScreen;