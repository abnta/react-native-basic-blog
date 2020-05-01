export default (state, action) => {
    switch(action.type) {
        case 'get_blogpost':
            return action.payload
        case 'add_blogpost':
            return [
                ...state,
                {   id: action.payload.id,
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]
        case 'edit_blogpost':
            return state.map((blog) => {
                if(blog.id == action.payload.id) {
                    return {
                        id: action.payload.id,
                        title: action.payload.title,
                        content: action.payload.content
                    }
                } else {
                    return blog
                }
            })
        case 'delete_blogpost':
            return state.filter((blog) => blog.id !== action.payload)
        default:
            return state
    }
}