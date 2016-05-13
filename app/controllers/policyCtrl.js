"use strict";

angular
.module('auApp')
.controller('policyCtrl', ['$scope', '$http', function($scope, $http) {
    var chart;
    $http.get('app/data/columnsData.json').then(function(result){
    chart = c3.generate({
		bindto: '.chart',
		size: {
			height:440
		},
		data: {
			x: 'x',
      columns: [
      result.data.columns.firstColumn,
      result.data.columns.secondColumn
    ],
			type: 'area-spline'
		},
		legend: {
			show:false
		},
		axis: {
			x: {
				type: 'categorized',
				tick: {
					rotate: 90,
					multiline: false
				},
				height: 70
			},
			y: {
				tick: {
					format: d3.format("$")
				}
			}
		},
		grid: {
			y: {
				show:true
			}
		},
		transition: {
			duration: 2000
		}
	});
})

  $(document).ready(function(){
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
  });

}])
