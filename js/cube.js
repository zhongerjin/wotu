var cube_data = {
    rate:0,
}
$(document).ready(function(e){
    var round_width = Math.floor($(".round").width());
    var cube_width = Math.floor($(".cube").children().width());
    cube_data.rate = cube_width / round_width;
    $(window).resize(function(e){
        round_width = Math.floor($(".round").width());
        var cube_result = cube_data.rate * round_width;
        console.log(cube_result);
        var cube_half = cube_result / 2;
        $(".cube").css({"transform-origin": cube_half+"px "+ cube_half+ "px"});
        $(".cube").children().css({"width":cube_result+"px", "height": cube_result+"px"});

    });
})