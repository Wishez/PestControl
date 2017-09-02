$(window).resize(() => {

    let $navList = $('#navList');

    if (window.innerWidth > 799) {
      $navList.show('fast');
    } else  {
      $navList.hide('fast');
    }
});
$(window).scroll(function() {
  let $asideButtons = $('#asideButtons'); 
  const scrollTop = $(this).scrollTop();
  // console.log()
  if (scrollTop > 150)
    $asideButtons
      .stop(true, true)
      .fadeIn(700)
      .delay(2000)
      .fadeOut(500);
  else
    $asideButtons
      .stop()
      .fadeOut(500)

    

});
$(function() {
  $(document).on('click', '.not-follow', openUrlInNewWindow);

  $(':input[type="tel"]').mask('+7 (000) 000-00-00');
  
  function openUrlInNewWindow(e) {
    e.preventDefault();
    
    let $target = $(e.target);
    $target = $target[0].tagName === 'A' ? $target : $target.parent();
      
    let url = $target.prop('href');
    
    window.open(url);
  }// end openUrlInNewWindow

});// end ready