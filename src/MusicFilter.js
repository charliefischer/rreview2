class MusicFilter {
  track(song, lpf = 40){
    for(let i = 0; i < song.length; i++){
      if(song[i] < lpf ){
        song[i] = lpf
      }
   } 
   return song 
  }
  
  
  
  // track(song, lpf = 40){
  //   let filtered = () => {
  //     song.forEach(function(n){
  //     if(n < 40){
  //       n = 40
  //     } 
  //     })
  //   } 
    // console.log(song)
    // filtered()
    // console.log('after filer' + song)
    // return song
  // }
}