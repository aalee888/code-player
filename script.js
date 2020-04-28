// Update the output string with the HTML and CSS
function updateOutput() {
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

  document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}


// *** Buttons ***


// Hover Function
$(".toggleButton").hover(function() {
  $(this).addClass("highlightedButton");
}, function() {
  $(this).removeClass("highlightedButton");
});


// Create the blue effect
$(".toggleButton").click(function(){
  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");

  // Switch the panels on and off
  // grab the id from the button and add panel on to the end
  var panelId = $(this).attr("id") + "Panel"
  // Changes the class to either hidden or not
  $("#" + panelId).toggleClass("hidden")

  // Check the widths
  var numberOfActivePanels = 4 - $(".hidden").length;
  $(".panel").width(($(window).width() / numberOfActivePanels ) - 15);
})


//  *** Panels *** 


// Set Panels to full screen
$(".panel").height($(window).height() - $("topBar").height() - 50);

// Set the panels to full width 
$(".panel").width(($(window).width() / 2 ) - 15);

// Get contents from html and put into output
updateOutput()

// Live updates the text on output HMTL
$(".panel").on("change keyup paste", function() {
  updateOutput()
});

