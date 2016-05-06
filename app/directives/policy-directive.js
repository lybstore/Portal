app.directive('policyWrap', function (){
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    template:
      '<ul class="policy overview" ng-transclude></ul>',
    return: true
  };
});

app.directive('policyLinks', function() {
  return {
    restrict: 'E'
      scope: {
        'title': '@'
      },
      template:
        '<li class="active" ng-transclude>' +
        '{{title}}' +
        '</li>',
      replace: true
  };
});


app.directive('policySpan', function() {
  return {
    restrict: 'E',
    scope: {
      'name': '@'
    },
    template:
      '<span class="policy-links">{{name}}</span>',
    replace: true
  };
});
