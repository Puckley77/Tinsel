angular.module('tinsel')
.directive('servmenudir', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attributes){
      element.click(function(){
        $('.hide-show').hide();
        $('.caption-text').fadeIn();
        $('.caption-text2').fadeIn();
        clickedOn = false;
      })
    }
  }

});
