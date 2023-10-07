import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [todoTasks, setTodoTasks] = useState([]);

  function startAddTaskHandler() {
    setModalIsVisible(true);
  }

  function endAddTaskHandler() {
    setModalIsVisible(false);
  }

  function addTaskHandler(enteredTaskText) {
    setTodoTasks(currentTasks => [
      ...currentTasks,
      { text: enteredTaskText, id: Math.random().toString() }
    ]);
    endAddTaskHandler();
  };

  function deleteTaskHandler(id) {
    setTodoTasks(currentTasks => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button
          title='Add New Task'
          color="#fcfcfc"
          onPress={startAddTaskHandler}
        />
        <TaskInput
          visible={modalIsVisible}
          onAddTask={addTaskHandler}
          onCancel={endAddTaskHandler}
        />
        <View style={styles.tasksContainer}>
          <FlatList data={todoTasks} renderItem={(item) => {
            return (
              <TaskItem
                text={item.item.text}
                id={item.item.id}
                onDeleteItem={deleteTaskHandler}
              />
            );
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
  },
});
