$('header nav li').click(function(){
  /*   $('header nav li').removeClass('on')
    $(this).addClass('on') */

    $(this).addClass('on').siblings().removeClass('on')
})


$('header nav li a').click(function(){

  var good = $(this).attr('href')

    var yes = $(good).offset().top

    $('html').animate({scrollTop:yes})

})