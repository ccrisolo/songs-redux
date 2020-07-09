// 6 (ex. 1) of 6 in Suggested Flow


const songsReducer = () => {
    return [
      { title: "No Scrubs", duration: "4:05" },
      { title: "Macarena", duration: "2:30" },
      { title: "All Star", duration: "3:15" },
      { title: "I Want it That Way", duration: "1:45" },
    ];
  };

  export default songsReducer;

  //    ----HIGHLIGHTS----
  //    This reducer is immmutable which only
  //        ever returns this array of songs
  //
  //    This is useful when you want to have constant information saved to state