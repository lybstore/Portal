app.directive('NavWrap', function (){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'title': '@'
    },
    template:
      '<div class="left-sidebar">' +
      '<h2>{{title}}</h2>' +
      '<nav class="navigation">' +
      '</nav>' +
      '</div>',
    return: true
  }
})

app.directive('NavLinks', function($location) {
  return {
    restrict: 'E', // E = elements, A = Atrritutes, C = Class, M = Comments
      scope: {
        'href': '@'
      },
      link: function (scope) {
        scope.location = function (href) {
          return href.substr(1) === $location.url();
        }
      },
      template:
        '<ul id="main-nav">' +
        '<li>' +
        '<a href="#/"><span>{{title}}</span></a>' +
        '</li>' +
        '</ul>',
      replace: true
  }
});
