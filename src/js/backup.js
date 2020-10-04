// transition.js
$('body').scrollTop({
  top: 0
})

// player.js
const playTrack = (track, id, volume, delay) => {
  track.click(function() {
    resetIcones()

    if (track.attr('playing', false) && track.attr('started', false)) {
      resetAttributes()
      player.loadVideoById({'videoId': id, 'startSeconds': delay})
      player.setVolume(volume)
      player.playVideo()
      track.attr('playing', true)
      track.attr('started', true);

      track.find('.sign-play').css('display', 'none')
      setTimeout(function(){
        track.find('.sign-pause').css('display', 'inline-block')
      }, 1500);
        console.log('load and play + addClass started')
        console.log('volume is:' + ' ' + volume)
    }
    else if (track.attr('playing', false) && track.attr('started', true)) {
        player.playVideo()
        track.attr('playing', true)
        track.find('.sign-play').css('display', 'none')
        track.find('.sign-pause').css('display', 'inline-block')
          console.log('resume à' + ' ' + player.getCurrentTime())
    }
    else if (track.attr('playing', true) && track.attr('started', true)) {
      player.pauseVideo()
      track.attr('playing', false);
      track.find('.sign-play').css('display', 'inline-block')
      track.find('.sign-pause').css('display', 'none')
        console.log('pause à' + ' ' + player.getCurrentTime() + ' + ' + 'removeClass(pause)')
    }
    track.closest('.inline-player').next('hr').css('border', '1px solid var(--teal)')
  })
}
