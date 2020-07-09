//a single action creator is below
//
//    A "action creator" is what communicates with our redux store
//      by delivering an action
//
//    All actions must return two things: 1.) type, 2.) payload
//        (type) is how our store knows which reducer to assign the action
//        (payload) is the data were giving that specific reducer to handle

export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
