import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = ({task, onPress}) => {
  return (
    <View style = {style.container}>
        <TouchableOpacity  style = {style.button} onPress ={onPress}/>
        <Text style = {style.text}>{task}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    container: {
        backgroundColor: '#212121',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        
    },
    text:{
        color: 'white',
        marginLeft: 10,
    },
})

export default TaskItem