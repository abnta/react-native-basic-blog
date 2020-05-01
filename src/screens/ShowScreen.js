import React, {useContext} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'

import BlogContex from './../context/BlogContext'

const ShowScreen = ({ navigation }) => {
    const { data } = useContext(BlogContex);

    const { title, content } = data.find((blog) => blog.id === navigation.getParam('id') );

    return (
        <View>
            <Text> { title }</Text>
            <Text> { content }</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (<TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })} >
            <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>)
    }
}

const styles = StyleSheet.create({});

export default ShowScreen