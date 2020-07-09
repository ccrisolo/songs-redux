// 3 (ex. 2) of 6 in Suggested Flow


import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  // through es6 we destructured selectedSong from our "props"

  if (!selectedSong) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {selectedSong.title}
        <br />
        Duration: {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);


//    ----HIGHLIGHTS----
//    Question: This class makes use of props, but why isnt props passed in at the top?
//
//    (LINE 26) The connect function imported from "react-redux" is what we use to "connect" any component to our
//      redux store, giving the component the store's "state" and the abillity to manipulate that "state".
//      
//      Notice how the function follows this format... connect(args)(component)
//        this is because the connect import is a function that returns a function, which then finally returns
//        our fully connected componenet
//      
//      The connect function takes two arguments (first required, second optional).
//
//        The first one is a function which will be passed the store's "state",
//          and lets us decide how to give this state to our component
//          this state we pass to our component from this function will be accepted as "props"
//
//        The second one is an object of action creators we choose to pass to our component
//          for its own use, ex) update state on form submit