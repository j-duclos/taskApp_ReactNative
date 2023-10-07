import { StyleSheet, Image, TextInput, View, Button, Modal } from 'react-native';
import { useState } from 'react';

function TaskInput(props) {
    const [enteredTaskText, setEnteredTaskText] = useState('');

    function taskInputHandler(text) {
        setEnteredTaskText(text);
    };

    function addTaskHandler() {
        props.onAddTask(enteredTaskText);
        setEnteredTaskText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/task.png')} />
                <TextInput
                    style={styles.inputText}
                    placeholder='Enter your task'
                    onChangeText={taskInputHandler}
                    value={enteredTaskText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button} />
                    <Button title='Add task' onPress={addTaskHandler} color="#ffffff" />
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel} color="#ffffff" />
                </View>
            </View>
        </Modal >
    )
}


export default TaskInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: "#063ced",
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'column',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
})