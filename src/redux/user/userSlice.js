import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.Friends = action.payload.Friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.Posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload.post : post
      );
      state.posts = updatedPosts;
    },
  },
});


export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = userSlice.actions;
export default userSlice.reducer;