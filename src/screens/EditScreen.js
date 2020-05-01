import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import BlogPostForm from './../components/BlogPostForm'

import BlogContext from './../context/BlogContext';

const EditScreen = ({ navigation }) => {

    const {data, editBlogPost} = useContext(BlogContext);
    const { id,title, content } = data.find(blog => blog.id === navigation.getParam('id'))

    return (
        <BlogPostForm initialValues={{
            id,title,content
        }} onSubmit = { (title,content) => editBlogPost(id,title,content, () => navigation.pop()) } />
    )
}

const styles = StyleSheet.create({});

export default EditScreen;