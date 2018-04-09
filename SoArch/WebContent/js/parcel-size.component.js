angular.
  module('parcelConfig').
  component('parcelSize', {
	  transclude: true,
	  template:
	'<div class="w3-panel w3-card-2">'+
		'<div class="w3-container w3-teal" >'+
		    '<h2>Paketgröße</h2>'+
		'</div>'+
		'<div>'+
			'<form class="">'+
			'<p>Länge:<br/><input type="text" style="width:100%" ng-model="length">'+
			'<p>Breite:<br/><input type="text" style="width:100%" ng-model="width">'+
			'<p>Tiefe:<br/><input type="text" style="width:100%" ng-model="depth">'+
			'<br/><p class="w3-teal" ng-click="$ctrl.calcSize($ctrl.size)" style="cursor: pointer;">Größe berechnen</p> <p>Paketgröße: {{size}}'+
			'</form>'+
		'</div>'+ 
	'</div>' ,
    	
    	
    controller: function ParcelPriceController($rootScope, $http) {
    	
    	
    	this.parcelsize = {
    		parcelsize : this.size
    	};
      
      
 
    }
  });