var submitButton = $(".submitBtn");
var activity = $("#activityType");
var entry = $(".entry");
var downloadBtn = $("#downloadButton");

// RESOURCES USED TO AID IN DEVELOPMENT OF FUNCTION
// https://api.jquery.com/appendTo/
// https://stackoverflow.com/questions/327047/what-is-the-most-efficient-way-to-create-html-elements-using-jquery
function log(event) {
  //   prevents bugs
  event.preventDefault();

  //gets value of input box
  var userActivityInput = activity.val();

  //appends paragraph element to entry div
  // $("<p id = 'date'></p>").appendTo(".entry");

  $("<p id = 'activityOne'></p>").appendTo(".entry");

  //gets all paragraph elements with specific class
  var activityOne = $("#activityOne");

  var date = $("#date");

  //sets text of all paragraph elements with specific class to value of input box
  activityOne.html(userActivityInput);

  //sets visibility property of the downloadBtn to visible   
  downloadBtn.css("visibility", "visible");
}

submitButton.on("click", log);

//RESOURCES USED TO DEVELOP FUNCTION:
// 

