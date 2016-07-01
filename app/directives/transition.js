app.directive('transition', Transition);
Transition.$inject = ['$timeout']
function Transition($timeout) {
  return {
    restrict: 'AE',
    scope: {
      show: '='
    },
    controllerAs: 'vm',
    link: function(scope, elem, attr) {
      $timeout(function(){
        enquire.register("screen and (max-width:767px)", {
        	match: function () {
        		$(".overview li:not(:first-of-type)").hide();
        		$(".overview li:first-of-type").click(function () {
        			$(this).siblings("li").toggle("slow");
        		});
        	}
        });

        enquire.register("screen and (min-width:768px)", {
        	match: function () {
        		wow = new WOW({
        			boxClass: 'wow',
        			animateClass: 'animated',
        			offset: 0,
        			mobile: false,
        			live: true
        			}
        		);
        		$('.policy-block, .chart-container, .statements').addClass('wow fadeInLeft');
        		new WOW().init();
        	}
        });
      })
    }
  }
}
