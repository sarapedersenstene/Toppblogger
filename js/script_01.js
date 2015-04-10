$(document).ready(function() {
    console.log("KJØR!")

//  $("#hideButton").click(function(){
//       $("#disclaimer").hide();
//    });
//    
//    $("#showButton").click(function(){
//        $("#disclaimer").show();
//    });

//    $("#toggleButton").click(function(){
//        if($("#disclaimer").is(":visible")){
//            $("#disclaimer").hide();
//        } else {
//            $("#disclaimer").show();
//        }
//    });
    
    $("#toggleButton").val("Skjul");
    
    $("#toggleButton").click(function(){
        $("#disclaimer").toggle();
        
        if ($("#disclaimer").is(":visible")){
            $(this).val("Skjul");
        } else {
            $(this).val("Vis");
        }
        });
});

$(function(){
    console.log("GO!")
});

