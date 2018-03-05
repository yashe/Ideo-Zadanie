$(document).ready(function () {
    $(".main-menu ul").click(function () {
        $(".main-menu").toggleClass("opened");
    })
    $(".search-label").click(function () {
        $(".search").toggleClass("opened");
        $(".search-input").val("");
    })
    $(".search-input").keypress(function(e){
        if(e.keyCode === 13){
            $(".search").submit(function(e){
                e.preventDefault();
                alert("Success");
            })
        }
    })
})