import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import BlogContext from './../context/BlogContext';

const IndexScreen = ({ navigation }) => {
    const { data, deleteBlogPost, getBlogPost } = useContext(BlogContext);

    useEffect(() => {
        getBlogPost();
    }, [])

    return (
        <View>
            <FlatList 
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item:{title, id}}) => {
                return <TouchableOpacity onPress={() => navigation.navigate('Show',{
                    id: id
                })}><View style={styles.row}>
                            <Text style={styles.title}> {title} - {id} </Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(id)}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View></TouchableOpacity>
            }}
            />
        </View>
    )
}

IndexScreen['navigationOptions'] = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                        <Feather name="plus" size={30} />
                    </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen