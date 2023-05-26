import { createAction, createReducer } from "@reduxjs/toolkit";
import { Post } from "../../types/blog.type";
import { initialPostList } from "../../Constants/blog";

interface BlogState {
    PostList: Post[];
    editingPost: Post | null;
}

const initialState: BlogState = {
    PostList: initialPostList,
    editingPost: null,
};

export const addPost = createAction<Post>("blog/addPost");
export const deletePost = createAction<string>("blog/deletePost");
export const startEditPost = createAction<string>("blog/startEditPost");
export const cancelEditingPost = createAction("/blog/cancelEditingPost");
export const finishEditingPost = createAction<Post>("blog/finishEditingPost");

const blogReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addPost, (state, action) => {
            //immerjs giúp hcúng ta mutate một object an toàn
            const post = action.payload;
            state.PostList.push(post);
        })
        .addCase(deletePost, (state, action) => {
            const postId = action.payload;
            const foundPostIndex = state.PostList.findIndex(
                (post) => post.id === postId
            );
            if (foundPostIndex !== -1) {
                state.PostList.splice(foundPostIndex, 1);
            }
        })
        .addCase(startEditPost, (state, action) => {
            const postId = action.payload;
            const foundPost =
                state.PostList.find((post) => post.id === postId) || null;
            state.editingPost = foundPost;
        })
        .addCase(cancelEditingPost, (state) => {
            state.editingPost = null;
        })
        .addCase(finishEditingPost, (state, action) => {
            const postId = action.payload.id;
            state.PostList.some((post, index) => {
                if (post.id === postId) {
                    state.PostList[index] = action.payload;
                    return true;
                }
                return false;
            });
        });
});

export default blogReducer;
