// For eyes click
const initEye = function() {
  $('.eye').click(function() {
    $(this).find('.line-eye').toggleClass('visible')
    $(this).next('.track-content').toggleClass('visible')
  })
}
initEye()
