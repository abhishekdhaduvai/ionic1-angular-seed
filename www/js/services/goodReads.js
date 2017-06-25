//GoodReads API
// key: UnQ7ovsTldbfUU5M8xZqg
// secret: uxB2Q7IjDnFP87bWWDgG68Asp0viczNvWWfTCgLjzE

angular.module('biblio').service('goodReads', function($http){
	
	var key = "UnQ7ovsTldbfUU5M8xZqg";

    this.getBookByISBN = function(isbn){
        return $http.get("https://www.goodreads.com/search/index.xml", {
            params:{
                "key":key,
                "q":isbn
            }
        }).then(function(response){
            var x2js = new X2JS();
            var temp = x2js.xml_str2json(response.data);
            return temp.GoodreadsResponse.search.results.work;
        });
    };

    this.getSeriesId = function(id){
        return $http.get("https://www.goodreads.com/series/work/"+id,{
            params:{
                "key":key,
                "format":"xml"
            }
        }).then(function(response){
            var x2js = new X2JS();
            var temp = x2js.xml_str2json(response.data);
            return temp.GoodreadsResponse.series_works.series_work.series.id;
        });
    };

    this.getSeries = function(id){
        return $http.get("https://www.goodreads.com/series/"+id,{
            params:{
                "key":key,
                "format":"xml"
            }
        }).then(function(response){
            var x2js = new X2JS();
            var temp = x2js.xml_str2json(response.data);
            return temp.GoodreadsResponse.series.series_works.series_work;
        });
    }
});