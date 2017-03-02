angular.module('tinsel')
    .directive('gallerydir', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {

                $(document).ready(function() {
                    $(".fancybox").fancybox({
                        openEffect: 'fade',
                        closeEffect: 'fade',
                        prevEffect: 'fade',
                        nextEffect: 'fade',
                        padding: 0,
                        fitToView: true,
                    });
                });
            }
        }

    })
