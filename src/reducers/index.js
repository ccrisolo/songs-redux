// 5 of 6 in Suggested Flow


import { combineReducers } from "redux";
import songsReducer from "./songsReducer";
import selectedSongReducer from "./selectedSongReducer";


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

//    ----HIGHLIGHTS----
//    The combineReducers function is what compiles all of our reducers
//      information to be held in the redux store
//      (compiling all of the reducers ("books") into the redux store ("library"))
//
//    This store's information can then be accesed through what we name it as.
//      In this example, it will be accessed through songs, and selectedSong