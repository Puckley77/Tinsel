angular.module('tinsel')
.controller('homeCtrl', function($scope){
  //
  // var clickedOn = false;
  //
  // $('.menu-toggle').click(function() {
  //
  //     if (!clickedOn) {
  //         $('.hide-show').fadeIn('slow');
  //         $('.caption-text').fadeOut('slow');
  //         $('.caption-text2').fadeOut('slow');
  //         clickedOn = true;
  //     } else {
  //         $('.hide-show').fadeOut('slow');
  //         $('.caption-text').fadeIn('slow');
  //         $('.caption-text2').fadeIn('slow');
  //         clickedOn = false;
  //     }
  // });
  //
  // $('#menu-hide').click(function() {
  //     $('.hide-show').hide();
  //     $('.caption-text').fadeIn();
  //     $('.caption-text2').fadeIn();
  //     clickedOn = false;
  // });
  //
  // $('.small-gold').click(function(){
  //   $('.hide-show').hide();
  //   // clickedOn = false;
  // })

$scope.slideshow = function(){
  $(function() {
      $('.page-container').vegas({
          autoplay: true,
          preloadImage: false,
          cover: true,
          delay: 6000,
          transitionDuration: 2500,
          timer: false,
          loop: true,
          shuffle: true,
          slides: [{
                  src: "../../images/tinsel-pics/slide1.JPG"
              },
              {
                  src: "../../images/tinsel-pics/slide2.jpg"
              },
              {
                  src: "../../images/tinsel-pics/slide3.jpg"
              },
              {
                  src: "../../images/tinsel-pics/slide4.jpg"
              },
              {
                  src: "../../images/tinsel-pics/slide5.jpg"
              },
              {
                  src: "../../images/tinsel-pics/slide6.jpg"
              },
              {
                  src: "../../images/tinsel-pics/slide7.jpg"
              },
              {
                  src: "../../images/tinsel-pics/slide8.jpg"
              },
              {
                  src: "../../images/tinsel-pics/slide9.jpg"
              },
              {
                  src: "../../images/tinsel-pics/slide10.jpg"
              }
          ],
          animation: 'kenburns'
      });
  });
}

  $scope.slideshow();

});
