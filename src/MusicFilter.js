class MusicFilter {
  track(song, lpf = 40, hpf = 1000){
    for(let i = 0; i < song.length; i++){
      if(song[i] < lpf ){
        song[i] = lpf
      } else if (song[i] > hpf) {
        song[i] = hpf
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