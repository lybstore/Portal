app.directive('navWrap', function (){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'title': '@'
    },
    template:
      '<h2>{{title}}</h2>' +
      '<nav class="navigation">' +
      '<ul id="main-nav" ng-transclude>' +
      '</ul>' +
      '</nav>',
    return: true
  };
});

app.directive('navLinks', function($location) {
  return {
    restrict: 'E', // E = elements, A = Atrritutes, C = Class, M = Comments
      scope: {
        'href': '@',
        'title': '@'
      },
      link: function (scope) {
        scope.location = function (href) {
          return href.substr(1) === $location.url();
        };
      },
      template:
        '<li class="active">' +
        '<a href="{{href}}"><span>{{title}}</span></a>' +
        '</li>',
      replace: true
  };
});

app.directive('footerWrap', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'href': '@'
    },
    template:
      '<footer ng-transclude>' +
      '<div id="contact-details"></div>' +
      '<i class="fa fa-fax"></i>' +
      '</footer>',
      replace: true
  };
});

app.directive('footerContent', function (){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'title': '@',
      'href': '@',
      'name': '@'
    },
    template:
      '<a class="footer-link" href="{{href}}" ng-transclude></a>',
      replace: true
  };
});

app.directive('footerCredit', function (){
  return {
    restrict: 'E',
    scope: {
      'name': '@'
    },
      template:
      '<span>{{name}}</span>',
      replace: true
    };
});

app.directive('footerContact', function (){
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        'href': '@'
      },
      template:
      '<a class="fa fa-phone" hef="{{href}}" ng-transclude></a>',
      replace: true
    };
});

app.directive('footerContactDetails', function (){
  return {
    restrict: 'E',
    scope: {
      'name': '@'
    },
    template:
    '<span>{{name}}</span>',
    replace: true
  }
});

app.directive('footerSocial', function() {
  return {
    restrict: 'E',
    scope: {
      'title': '@',
      'name': '@'
    },
    template:
    '<h6>{{title}}</h6>' +
    '<ul id="social-media" ng-transclude><ul>',
  };
});

app.d
