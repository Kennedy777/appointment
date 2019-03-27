$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var NameInput = $("input#Name").val();
    var WhyInput = $("input#Why").val();
    var DateInput = $("input#Date").val();
    var TimeInput = $("input#Time").val();

    $(".Name").text(NameInput);
    $(".Why").text(WhyInput);
    $(".Date").text(DateInput);
    $(".Time").text(TimeInput);
    $("#endLetter").show();


event.preventDefault();


  });
});
