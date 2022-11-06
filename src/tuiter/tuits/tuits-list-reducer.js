import { createSlice } from "@reduxjs/toolkit";
import tuitslist from './tuitsarray.json';

const currentUser = {
    "authorName": "NASA",
    "userhandle": "@nasa",
    "authorImage": "nasa.png"
    // "authorText": "Amazing Show about  mission"
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
 name: 'tuitslist',
 initialState: tuitslist,
 reducers: {
  deleteTuit(state, action) {
    const index = state
       .findIndex(tuitslist =>
        tuitslist._id === action.payload);
    state.splice(index, 1);
  },
  likeTuit(state, action) {
    const tuitIndex1 = state.findIndex((tuitslist) => tuitslist._id === action.payload._id)
    console.log(tuitslist);
    state[tuitIndex1].liked = true;
    state[tuitIndex1].likes = parseInt(state[tuitIndex1].likes)+ 1;
  },
  unlikeTuit(state, action) {
    const tuitIndex2 = state.findIndex((tuitslist) => tuitslist._id === action.payload._id)
    console.log(tuitslist);
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
