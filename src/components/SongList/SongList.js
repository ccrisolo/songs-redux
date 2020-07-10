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
              // "ACTION" MANIPULATING STATE
              //    the selectSong function is an "action" which talks with our store
              //    imported from our actions folder
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div>Song List</div>

    // 3.1)
    //delete the return above and use the one below after following Step 3
    // return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// 3.) Pass store's state to component as "props"
//      This function which is called in the connect fxn on (line 46) is passed the stores
//      state and allows us to decide which info from our store's state we wish our component to use
//      We do this by having the mapStateToProps fxn return the desired information
//      Simply write: "return {songs: state.songs};" in the function below
//                  and the component can then use our store's state

const mapStateToProps = (state) => {
  return null;
};

export default connect(mapStateToProps, { selectSong })(SongList);

//  "The Connect Function"
//       The connect function imported from "react-redux" is what we use to "connect" any component to our
//      redux store, giving the component the store's "state" (arg 1) and the abillity to manipulate that "state" (arg 2).
//
//      In its source code, it is a function that returns a function so it follows the format of functionName(args)(component)




