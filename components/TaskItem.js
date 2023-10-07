import { StyleSheet, Text, View, Pressable } from 'react-native';


function TaskItem(props) {
    return (
        <View style={styles.taskItem}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={(pressed) => pressed && styles.pressedItem}
            >
                <Text style={styles.taskText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default TaskItem;


const styles = StyleSheet.create({
    taskItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#040404',
    },
    pressedItem: {
        opacity: 8,
    },
    taskText: {
        color: 'white',
        padding: 6,
    },

})