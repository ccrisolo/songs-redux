// 5 of 6 in Suggested Flow


import { combineReducers } from "redux";
import songsReducer from "./songsReducer";
import selectedSongReducer from "./selectedSongReducer";

//  dummy reducer
export default combineReducers({
  replaceMe: () => "dummy reducer",
});

// x.) Compile or "combine" reducers
//      Here we must combine our desired reducers so our store can compile them as "state"
//      After are reducers are created, we simply add key/value pairs to the obj being passed to combineReducers
//      *Add the following*: songs: songsReducer, and selectedSong: selectedSongReducer

//      If are reducers are not yet created, we can leave this functional dummy reducer as is and revisit this