import React, {useState} from 'react'
import {  Dimensions, SafeAreaView, Text, View, TouchableOpacity, TextInput, FlatList, StyleSheet  } from 'react-native'
import ListHeader from '../components/ListHeader';
import TaskItem from '../components/TaskItem';

const screenHeight = Dimensions.get("screen").height;

const HomeScreen = () => {

    const [addNew, setAddNew] = useState(false);
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(['Programar App TODO']);

    const addTask = () => {

        setTasks(currentTasks => [...currentTasks, task])
        setTask('')
        setAddNew(false)

    }

    const deleteTask = (index) => {
        let temp = [...tasks]
        temp.splice(index, 1)
        setTasks(temp)
    }

  return (
    <SafeAreaView  style={{marginHorizontal: 20}}>
        {/* contenedor del imput */}

        {
            addNew && 
        (<View style={{marginTop: 80}}>
        <TextInput
            placeholder='Agregar nueva tarea...'
            style = {style.input}
            value = {task}
            onChangeText={setTask}
        />
        <View style = {{marginVertical: 10, flexDirection: 'row'}}>
            <TouchableOpacity
                style = {[style.button, style.acceptButton]}
                onPress={addTask}
            >
                <Text style= {style.buttonText}>Agregar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {[style.button, style.cancelButton]}
                onPress={()=>setAddNew(false)}
            >
                <Text style= {style.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    </View>)
        }

<View>
    <FlatList 
        data = {tasks}
        keyExtractor={(item) => item}
        renderItem={({item, index})=> <TaskItem task = {item} index = {index} onPress= {()=>deleteTask(index)}/>}
        ListHeaderComponent={() => <ListHeader/>}
        ItemSeparatorComponent={()=> <View style = {{marginVertical: 4}}/>}
    />
</View>


        {/* Botton para agregar tarea */}
      <View style = {style.addButtonLocator}>
      <TouchableOpacity 
        style = {style.addButton}
        onPress={() => setAddNew(true)}
        >
          <Text style = {style.addButtonText}>+</Text>
      </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
        width: 60,
        backgroundColor: 950,
        borderRadius: 30,
    },
    addButtonText: {
        color: 'white',
        fontSize: 25
    },
    addButtonLocator: {
        position: 'absolute',
        top: screenHeight-200,
        right: 10,
    },
    input: {
        backgroundColor: '#dedede',
        padding: 10,
        borderRadius: 10,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        alignSelf: 'flex-start',
    }, 
    acceptButton: {
        backgroundColor: 'green'
    },
    cancelButton:{
        backgroundColor: 'red',
        marginLeft: 5,
    },
    buttonText:{
        color: 'white',
        fontSize: 15,
    },


})

export default HomeScreen