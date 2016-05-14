
app.directive('responsiveTabs', Tabs);
  Tabs.$inject = ['$timeout']
  function Tabs($timeout){
    return{
      restrict: 'AE',
      scope: {
        show: '='
      },
      controllerAs: 'vm',
      link: function(scope, elem, attr){
        $timeout(function(){
          $('.summary').matchHeight();

          $('.statements').responsiveTabs({
            startCollapsed: 'accordion'
          })

          // $('.statements').on('processing.dt', function(){
          //   alert('hi');
          // });

          $.ReStable({
            rowHeaders: false,
            maxWidth: 1024,
            keepHtml: false
          });
          $(".sortable").DataTable({
            "order": [[0, "desc"]],
            oLanguage: {
                sProcessing: "<i style='margin-left:320px' class='fa fa-spinner fa-spin fa-3x fa-fw'></i>"
            },
            bProcessing : true,
            "aLengthMenu": [12, 24, 36],
            "pageLength": 12
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
