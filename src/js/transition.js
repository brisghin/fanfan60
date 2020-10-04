// For barba + anime
// https://barba.js.org/ + https://animejs.com/documentation/
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
      return new Promise(resolve => {
        anime({
          targets: next.container,
          opacity: 0,
          translateY: 250,
          duration: 0,
          easing: 'easeInOutSine',
          complete: function() { resolve() }
        })
      })
    },
    enter({ next }) {
      return new Promise(resolve => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        anime({
          targets: next.container,
          opacity: 1,
          translateY: 0,
          duration: 700,
          easing: 'easeInOutSine',
          complete: function() { resolve() }
        })
        initHover()
        onYouTubeIframeAPIReady()
        initEye()
      })
    }
  }]
})
