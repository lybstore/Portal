"use strict";

angular
.module('auApp')
.controller('policyCtrl', ['$scope', function($scope) {

  /*var chart = c3.generate({
		bindto: '.chart',
		size: {
			height:440
		},
		data: {
			x: 'x',
			columns: [
			['x', 'SEP-2014', 'OCT-2014', 'NOV-2014', 'DEC-2014', 'JAN-2015', 'FEB-2015', 'MAR-2015', 'APR-2015', 'MAY-2015', 'JUN-2015', 'JUL-2015', 'AUG-2015', 'SEP-2015'],
			['Ending Balance', 2042, 2199, 2355, 2361, 2518, 2524, 2531, 2537, 2544, 2551, 2558, 2565, 2572]
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

  /*$(document).ready(function(){
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
  });*/

}])
