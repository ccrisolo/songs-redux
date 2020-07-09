// 3 (ex. 1) of 6 in Suggested Flow

import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="contetn">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);


//    ----HIGHLIGHTS----
//    Question: This class makes use of props, but props isnt passed in at the top?
//
//    This file is a perfect example of connecting a Redux store's "state" into a component as well
//      as action creators to communucate with that store, all in one swift swoop. SWOOOOP
//
//    (LINE 34) The connect function imported from "react-redux" is what we use to "connect" any component to our
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