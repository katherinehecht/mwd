angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<div >\n  <!-- <div ui-view=\'navbar\'></div>\n  <div ui-view></div> -->\n  Hello\n</div>');}]);