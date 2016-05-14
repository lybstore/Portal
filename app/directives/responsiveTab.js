
app.directive('responsiveTabs', Tabs);
  Tabs.$inject = ['$timeout']
  function Tabs($timeout){
    return{
      restrict: 'AE',
      controllerAs: 'vm',
      link: function(scope, elem, attr){
        $timeout(function(){
          $('.summary').matchHeight();
          $('.statements').responsiveTabs({
            startCollapsed: 'accordion'
          });
          $.ReStable({
            rowHeaders: false,
            maxWidth: 1024,
            keepHtml: false
          });
          $(".sortable").DataTable({
            "order": [[0, "desc"]]
          });
          if ($('.portal-body').children('.policy-block').length > 1) {
            $(".policy-block").addClass("multiple");
          }
          $("a#logout").on('click', function(){
            alert("You're about to log out!");
            window.location = "login.htm";
          });
        }, 0)
      }
    }

  }

