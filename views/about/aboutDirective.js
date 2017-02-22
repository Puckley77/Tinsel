angular.module('tinsel')
.directive('aboutdir', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attributes){
      element.on('click', function() {
        $('#company-popup').fadeIn();
        $('.popup-box').css({
          'top': '50%',
          'left': '50%',
          'transform': 'translate(-50%, -50%)'
        })
      });

      $('#company-popup').on('click', function(){
        $(this).fadeOut();
      });

      $('#about-mission').on('click', function() {
        $('#mission-popup').fadeIn();
        $('.popup-box').css({
          'top': '50%',
          'left': '50%',
          'transform': 'translate(-50%, -50%)'
        })
      });

      $('#mission-popup').on('click', function(){
        $(this).fadeOut();
      });

    }
  }

})
