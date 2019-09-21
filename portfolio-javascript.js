$(document).ready(function(){

    $("nav").click(function(){
        if($("#navButton").text()=="☰"){
            $("#navButton").text("✖");
        }else{
            $("#navButton").text("☰");
        }
        $("li").toggle("slow");
    });
});   
//fix background color on hover
//https://itnext.io/how-to-create-a-responsive-navigation-bar-with-html-css-and-jquery-step-by-step-tutorial-9c780b58479f