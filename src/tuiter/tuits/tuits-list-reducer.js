import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuitsarray.json';
import {createTuitThunk, deleteTuitThunk, findTuitsThunk,updateTuitThunk}
  from "../../services/tuits-thunks";

  const initialState = {
    tuits: [],
    loading: false
 }
 
const currentUser = {
    "authorName": "NASA",
    "userhandle": "@nasa",
    "authorImage": "nasa.png"
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "postDate": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0
   }
   
const tuitslistSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuits = []
   },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuits = payload
   },
   [findTuitsThunk.rejected]:
      (state) => {
         state.loading = false
   },
   [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits
        .filter(t => t._id !== payload)
    },
    [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
    },

    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const tuitNdx = state.tuits
            .findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
          }
  }




 },

 reducers: {
  deleteTuit(state, action) {
    const index = state
       .findIndex(tuits =>
        tuits._id === action.payload);
    state.splice(index, 1);
  },
  likeTuit(state, action) {
    const tuitIndex1 = state.findIndex((tuits) => tuits._id === action.payload._id)
    console.log(tuits);
    state[tuitIndex1].liked = true;
    state[tuitIndex1].likes = parseInt(state[tuitIndex1].likes)+ 1;
  },
  unlikeTuit(state, action) {
    const tuitIndex2 = state.findIndex((tuits) => tuits._id === action.payload._id)
    console.log(tuits);
    state[tuitIndex2].liked = false;
    state[tuitIndex2].likes = parseInt(state[tuitIndex2].likes) -1;
  },

    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }
  }
 
});
export const {createTuit, deleteTuit,likeTuit,unlikeTuit } = tuitslistSlice.actions;

export default tuitslistSlice.reducer;
