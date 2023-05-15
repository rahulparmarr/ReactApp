import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload);
    },
    editBlog: (state, action) => {
      const { id, title , content } = action.payload;
      const existingBlog = state.find(blog => blog.id === id);
      if(existingBlog) {
        existingBlog.title = title;
        existingBlog.content = content;
      }
    },
    deleteBlog: (state, action) => {

      const { id } = action.payload;
      const existingBlog = state.find(blog => blog.id === id);
      if(existingBlog) {
        return state.filter(blog => blog.id !== id);

      }
    },

    viewBlog: (state , action ) =>{
      const { id, title , content } = action.payload;
      const existingBlog = state.find(blog => blog.id === id);
      if(existingBlog) {
        existingBlog.title = title;
        existingBlog.content = content;
      }
      
    }
  }
});

export const { addBlog, editBlog, deleteBlog , viewBlog } = blogSlice.actions;
export default blogSlice.reducer;