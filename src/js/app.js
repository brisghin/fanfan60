$(document).ready(function() {
  // For index carts hover effect
  function initHover() {
    $('.cat').mouseenter(function() {
      $(this).css({
        background : 'var(--light-red)',
        color : 'var(--white)'
      })
    })
    $('.cat').mouseleave(function() {
      $(this).css({
        background : 'var(--light-grey)',
        color : 'var(--black)'
      })
    })
  }

  // For eyes click
  function initEye() {
    $('.eye').click(function() {
      $(this).find('.line-eye').toggleClass('visible')
      $(this).next('.track-content').toggleClass('visible')
    })
  }

  // For player: https://developers.google.com/youtube/iframe_api_reference
  function onYouTubeIframeAPIReady() { // function name important
    let player = new YT.Player('player', { height: '360', width: '640' })

    const resetIcones = () => {
      $('.sign-play').css('display', 'inline-block')
      $('.sign-pause').css('display', 'none')
    }
    const resetAttributes = () => {
      $('.play').attr('playing', false);
      $('.play').attr('started', false);
    }
    const stopTrack = () => {
      resetIcones()
      resetAttributes()
      player.stopVideo()
        console.log('stop')
    }
    const playTrack = (track, id, volume, delay) => {
      track.click(function() {
        resetIcones()

        if (track.attr('playing') == 'false') {
          if (track.attr('started') == 'false') {
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
          } else {
            player.playVideo()
            track.attr('playing', true)
            track.find('.sign-play').css('display', 'none')
            track.find('.sign-pause').css('display', 'inline-block')
              console.log('resume à' + ' ' + player.getCurrentTime())
          }
        } else {
          player.pauseVideo()
          track.attr('playing', false);
          track.find('.sign-play').css('display', 'inline-block')
          track.find('.sign-pause').css('display', 'none')
            console.log('pause à' + ' ' + player.getCurrentTime())
        }
        track.closest('.inline-player').next('hr').css('border', '1px solid var(--teal)')
      })
    }

    $('.play01').click(playTrack($('.play01'), '6Uzq82SHGGE', 85, 0));
    $('.play02').click(playTrack($('.play02'), 'bHokx2L1wi4', 100, 0));
    $('.play03').click(playTrack($('.play03'), 'ySZBnMukO8g', 90, 8.5));
    $('.play04').click(playTrack($('.play04'), 'CWJmBBxJlig', 85, 0));
    $('.play05').click(playTrack($('.play05'), 's_EUTmrjX54', 90, 0));
    $('.play06').click(playTrack($('.play06'), 'tVKWiseNGUU', 90, 0));
    $('.play07').click(playTrack($('.play07'), '0sZ4gA4Y6fo', 90, 0));
    $('.play08').click(playTrack($('.play08'), 'wEN5LJXVPMI', 100, 0));
    $('.play09').click(playTrack($('.play09'), 'QC2_2jnD3OE', 100, 0));
    $('.play10').click(playTrack($('.play10'), 'CCYN79b6_ks', 90, 0));
    $('.play11').click(playTrack($('.play11'), 'XS088Opj9o0', 95, 1));
    $('.play12').click(playTrack($('.play12'), 'hAx6mYeC6pY', 100, 4));
    $('.play13').click(playTrack($('.play13'), 'MB578q9zjrM', 70, 0));
    $('.play14').click(playTrack($('.play14'), 'bcl1Exh2VxE', 75, 4));
    $('.play15').click(playTrack($('.play15'), '7wBgcalM4c4', 90, 0));
    $('.play16').click(playTrack($('.play16'), 'z7kVI2W5jGw', 95, 0));
    $('.play17').click(playTrack($('.play17'), 'qq09UkPRdFY', 90, 0));
    $('.play18').click(playTrack($('.play18'), 'FHhZPp08s74', 90, 0));
    $('.play19').click(playTrack($('.play19'), 'HDN3aQdI7QE', 90, 0));
    $('.play20').click(playTrack($('.play20'), 'byXSWD5g9Pg', 85, 0));
    $('.play21').click(playTrack($('.play21'), 'sSGSprJB0dI', 90, 0));
    $('.play22').click(playTrack($('.play22'), 'NNLOERsUOd0', 90, 0));
    $('.play23').click(playTrack($('.play23'), '1zWlnzFXcKY', 100, 0));
    $('.play24').click(playTrack($('.play24'), 'iyLdoQGBchQ', 90, 0));
    $('.play25').click(playTrack($('.play25'), 'ixva4i2T8aQ', 90, 0));
    $('.play26').click(playTrack($('.play26'), 'izGwDsrQ1eQ', 90, 0));
    $('.play27').click(playTrack($('.play27'), '16y1AkoZkmQ', 90, 0));
    $('.play28').click(playTrack($('.play28'), 'Ft2U58G5Szw', 90, 0));
    $('.play29').click(playTrack($('.play29'), 'hIIVK0NgK38', 80, 0));
    $('.play30').click(playTrack($('.play30'), 'mFAeQrCTIUc', 80, 0));
    $('.play31').click(playTrack($('.play31'), 'sOnqjkJTMaA', 90, 279));
    $('.play32').click(playTrack($('.play32'), 'V3eOuK_-c34', 85, 2));
    $('.play33').click(playTrack($('.play33'), 'fJ9rUzIMcZQ', 90, 2));
    $('.play34').click(playTrack($('.play34'), '2Q_ZzBGPdqE', 75, 0));
    $('.play35').click(playTrack($('.play35'), 'vGJTaP6anOU', 90, 0));
    $('.play36').click(playTrack($('.play36'), 'CkeDjLZMRRk', 90, 0));
    $('.play37').click(playTrack($('.play37'), 'zPwMdZOlPo8', 90, 0));
    $('.play38').click(playTrack($('.play38'), 'Y-vj8V522OQ', 90, 0));
    $('.play39').click(playTrack($('.play39'), 'Omnpu8mzX4c', 85, 0));
    $('.play40').click(playTrack($('.play40'), 'ZEcqHA7dbwM', 85, 0));

    $('.stop').click(function() {
      stopTrack()
    })
  }

  // For barba + anime: https://barba.js.org/ + https://animejs.com/documentation/
  barba.init({
    debug: true,
    transitions: [{
      name: 'fadeAndMove',
      leave({ current }) {
        return new Promise(resolve => {
          anime({
            targets: current.container,
            opacity: 0,
            translateY: 250,
            duration: 500,
            easing: 'easeInOutSine',
            complete: function(){ current.container.remove(), resolve() }
          })
        })
      },
      beforeEnter ({ next }) {
        // scrollTop
        $('body').animate({scrollTop:0});
        // position +250px
        return new Promise(resolve => {
          anime({
            targets: next.container,
            opacity: 0,
            translateY: 250,
            duration: 0,
            easing: 'easeInOutSine',
            complete: function() { resolve() }
          })
          initHover()
          initEye()
          onYouTubeIframeAPIReady()
        })
      },
      enter({ next }) {
        return new Promise(resolve => {
          anime({
            targets: next.container,
            opacity: 1,
            translateY: 0,
            duration: 700,
            easing: 'easeInOutSine',
            complete: function() { resolve() }
          })
        })
      }
    }]
  })

  // Helps init function when reload
  initHover()
  initEye()
  onYouTubeIframeAPIReady()
})
