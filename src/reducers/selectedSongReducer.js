const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
      return action.payload;
    }
  
    return selectedSong;
  };

  export default selectedSongReducer;

  //    ----HIGHLIGHTS----
  //    This reducer only accepts actions from action creators with
  //        the type "SONG_SELECTED"
  //    If a action is accpeted it then decides how to implement the payload
  //        into the redux store. In this example, it simply updates this reducer
  //        to hold the action's payload inside the store under the selectedSongReducer