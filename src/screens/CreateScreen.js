import React, {useContext} from 'react'
import { StyleSheet } from 'react-native';

import BlogContex from './../context/BlogContext'
import BlogPostForm from './../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
    
    const { addBlogPost } = useContext(BlogContex);

    return <BlogPostForm onSubmit = {(title, content) => {
        addBlogPost(title,content, ()=> navigation.navigate('Index'))
    }} />
}

const styles = StyleSheet.create({
    
});

export default CreateScreen