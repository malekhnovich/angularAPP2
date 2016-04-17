/**
 * Created by maxrenet on 4/16/16.
 */
angular.module('myApp.controllers',[]).controller('SiteController',function($scope){
    $scope.publisher='Pearson';
    $scope.type="Fiction";
    $scope.name="Hairy Potter";
});
angular.module('myApp.controllers').controller('BookController',function($scope){
   $scope.books=['Order of the Moose','Chamber of Dreams','Sorcers Rock'];
    $scope.name="Scope for bookController";
    $scope.addToWishList=function(book){
        $scope.wishListCount++;
    };
    $scope.wishListCount=0;
    $scope.$watch('wishListCount',function(newValue){
       console.log('called'+newValue+'times');
        if(newValue==2){
            alert('Great! You have 2 items in your wish list. Time to buy what you love');
        }
    });
});