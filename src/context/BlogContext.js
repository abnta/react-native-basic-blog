import React, { createContext, useReducer } from 'react'
import BlogReducer from './BlogReducer'
import jsonServer from './../jsonServer'

const BlogContext = createContext();

export const BlogProvider = ({children}) => {
    const [blogPosts, dispatch] = useReducer(BlogReducer, []);

    const getBlogPost = async () => {
        try{
            const response = await jsonServer.get('/blogPosts');
            dispatch({type: 'get_blogpost', payload: response.data})
        }catch(e) {
            console.log(e);
            return blogPosts
        }
    }
    
    const addBlogPost = async(title,content, callback) => {
        try {
            const response = await jsonServer.post('/blogPosts', {title,content});
            dispatch({ type: 'add_blogpost', payload: response.data })
            callback();
        } catch(e) {
            console.log(e)
            return blogPosts
        }
    }

    const deleteBlogPost = async(id) => {
        try {
            await jsonServer.delete(`/blogPosts/${id}`)
            dispatch( { type: 'delete_blogpost', payload: id} )
        } catch(e) {
            console.log(e);
            return blogPosts
        }
    }

    const editBlogPost = async (id, title, content, callback) => {
        try {
            await jsonServer.put(`/blogPosts/${id}`, {title,content})
            dispatch({ type: 'edit_blogpost', payload: {id,title,content} })
            callback()
        } catch (e) {
            console.log(e)
            return blogPosts
        }
    }

    return <BlogContext.Provider value= {{data:blogPosts, addBlogPost, deleteBlogPost, editBlogPost, getBlogPost}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext