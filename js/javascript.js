// Page shows only the first 10 students

var $tenthStudent = $(".student-item").hide().slice(0,10).show();




  
// Dynamically calculate how many li's (students) are in the student-list ul
  var studentCount = $(".student-item").length;
  console.log(studentCount);

// Dynamically counts pages based on number of students
  var pagesMade = Math.ceil(studentCount / 10);
  console.log(pagesMade);
 
// Appends the pagination buttons to the bottom of the page div

  var $paginationHTML = $('<div class="pagination"> <ul> </ul> </div>');
 
  $((".page")).append($paginationHTML) 
  
//Dynamically create buttons based on number of pages with 10 students on each page 
  
  for(i = 1; i <= pagesMade; i++) {
      $(".pagination ul").append('<li><a href="#">'+i+'</a></li>');
      }

// link the buttons to the relevant pages 


 // 3 browsers checked for compatibility 


	//Since only 10 students should be shown at a time, your programming needs to calculate the number of pages needed and add the appropriate number of links to the bottom of the page.
//When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. And so on. When “6” is clicked 51 through 55 should be shown.
//Your program should work for any number of students. 
// Check cross browser compatibility for 3 browsers

