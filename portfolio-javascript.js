$(document).ready(function(){

    $("#navButton").click(function(){
        if($("#navButton").text()=="☰"){
            $("#navButton").text("✖");
        }else{
            $("#navButton").text("☰");
        }
        $("li").toggle("slow");
    });
});   
//do something about the active section to make the title stay at the top
//fix background color on hover
//hide nav when small by default
//<i class="fa fa-close"></i>*/
//https://itnext.io/how-to-create-a-responsive-navigation-bar-with-html-css-and-jquery-step-by-step-tutorial-9c780b58479f