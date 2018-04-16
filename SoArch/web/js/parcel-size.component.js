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
			'<p>Länge:<br/><input class="w3-input" type="text" style="width:100%" ng-model="$ctrl.parcel.size.length">'+
			'<p>Breite:<br/><input class="w3-input" type="text" style="width:100%" ng-model="$ctrl.parcel.size.width">'+
			'<p>Tiefe:<br/><input class="w3-input" type="text" style="width:100%" ng-model="$ctrl.parcel.size.depth">'+
			'<br/><p class="w3-teal w3-button" ng-click="$ctrl.calcSize($ctrl.parcel)" style="cursor: pointer;">Größe berechnen</p> <p>Paketgröße: {{$ctrl.parcel.size.cat}}'+
			'</form>'+
		'</div>'+ 
	'</div>' ,
    	
    	
    controller: function ParcelPriceController($rootScope, $http) {
    	
    	
    	this.parcel = {
    		size:{length: '0',width:'0',depth:'0',cat:'S'}
    	};
    	$rootScope.parcelsize = this.parcel;
    	this.calcSize= function($parcel)
    	{
    		var parameter = JSON.stringify($parcel.size);
    		var url = "http://localhost:8443/parcel/size";
    		var size = '';
    		$http.post(url, parameter).then(function(data, status, headers, config) 
    		{
	          ret_data = angular.fromJson(data);
	          $parcel.size.cat=ret_data['data']['cat'];
    		});
    	}
      
 
    }
  });