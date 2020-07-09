// 2 of 6 in Suggested Flow


import React from "react";
import SongList from "../SongList/SongList";
import SongDetail from "../SongDetail/SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;


//    ----HIGHLIGHTS----
//    Nothing special here, but since the store was "provided" to our <App> on src/index.js
//      each of <App>'s children are ready to be connected to our redux store
// 
//
//      Procceed to either of the child components to get started (SongList.js or SongDetail.js)