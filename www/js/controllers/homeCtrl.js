angular.module('biblio').controller('homeCtrl', function($scope, goodReads){

	$scope.isbn = "0439554934";
	
    goodReads.getBookByISBN($scope.isbn).then(function(response){
        $scope.book = new Object();
        $scope.book.book_title = response.best_book.title;
        $scope.book.book_author = response.best_book.author;
        $scope.book.book_picture = response.best_book.image_url;
        $scope.book.book_rating = response.average_rating;
        $scope.book.gr_id = response.best_book.id.__text;
        $scope.book.work_id = response.id.__text;
        $scope.book.isbn = $scope.isbn;
        console.log(response);
        console.log($scope.book);
        document.getElementById('rating').style.width = $scope.book.book_rating*20+'%';
        $scope.getSeries();
    });

    $scope.getSeries = function(){
        goodReads.getSeriesId($scope.book.work_id).then(function(response){
            $scope.book.series_id = response;
        }).then(function(){
            goodReads.getSeries($scope.book.series_id).then(function(response){
                console.log(response);
            });
        });        
    }
});
