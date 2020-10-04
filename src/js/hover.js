// For index carts hover effect
const initHover = function() {
  $('.cat').mouseenter(function() {
    $(this).css('background', 'var(--light-red)')
    $(this).css('color', 'var(--white)')
  })
  $('.cat').mouseleave(function() {
    $(this).css('background', 'var(--light-gray)')
    $(this).css('color', 'var(--black)')
  })
}
initHover()
