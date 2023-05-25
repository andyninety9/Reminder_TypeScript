import { createAction, createReducer } from "@reduxjs/toolkit";
import { Post } from "../../types/blog.type";
import { initialPostList } from "../../Constants/blog";

interface BlogState {
    PostList: Post[];
}

const initialState: BlogState = {
    PostList: initialPostList,
};

export const addPost = createAction<Post>("blog/addPost");

const blogReducer = createReducer(initialState, (builder) => {});

export default blogReducer;
