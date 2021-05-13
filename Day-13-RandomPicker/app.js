$(function() {
    $('.resultSection').hide()
  
    var add_option = function() {
      $('.inputs').append('<input></input>')
      $('input:text:visible:last').focus()
    }
    $('.addOption').click(add_option)
    $('.inputSection').keydown(function(e)  {
      if (e.keyCode == 13)  {
        add_option()
      }
    })
  
    var remove_option = function() {
      if ($('input').length > 1) {
      $('input').last().remove()
      }
    }
    $('.removeOption').click(remove_option)
  
    var options = []
    var submit = function() {
      $('.inputSection').hide()
      $('.resultSection').show()
      $('input').each(function() {
        if ($.trim($(this).val()) !== '')  {
          options.push($.trim($(this).val()))
        }
      })
  
      var winner = options[Math.floor(Math.random() * options.length)]
      $('.resultSection').text(winner)
      $('.title').text('The winner is:')
    }
    $('.submitButton').click(submit)
  
    var reset = function()  {
      options.length = 0
      $('.resultSection').hide()
      $('.inputSection').show()
      $('.title').text('Help me choose between...')
      $('input').val('')
      $('input').not(':first').remove()
    }
    $('.resetButton').click(reset)
  })
  
  $('h1').click(function()  {
    $('body').toggleClass('pinkBackground')
    $('button').toggleClass('turquoiseButtons')
  })