describe('MusicFilter', function() {
  beforeEach(function() {
    filter = new MusicFilter()
  })
  it('returns the track when no filter required', function(){
    expect(filter.track([45, 50, 55])).toEqual([45, 50, 55])
  })
})