//Back End//
function Library() {
  this.movieArray = [];
}

function Movie(mtitle, year, rating) {
  this.mtitle = mtitle;
  this.year = year;
  this.rating = rating;
}

var library = new Library();


//Front End//

$(document).ready(function(){
  $("#tomato-form").submit(function(event){
    event.preventDefault();

    var inputtedTitle = $("input#movie-title").val();
    var inputtedYear = $("input#movie-year").val();
    var inputtedRating = parseInt($("input#movie-rating").val());
    // var parsedRating = parseInt(inputtedRating)

    var newMovie = new Movie(inputtedTitle, inputtedYear, inputtedRating);

    $("#movie-table").append("<tr> <td>" + newMovie.mtitle + "</td> <td>" + newMovie.year + "</td> <td>" + newMovie.rating + "</td> </tr>");

    library.movieArray.push(newMovie);


  });

  $("#sort-button").click(function() {

    library.movieArray.sort(function(a, b){
      return a.rating - b.rating
    });

  })

});
