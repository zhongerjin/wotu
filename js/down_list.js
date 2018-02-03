$(".icons img").hover(function(e){
    var _old = $(this)[0].src.split("/image/")[1];
    var _new = "hover_" + _old;
    $(this)[0].src = $(this)[0].src.replace(_old, _new);
}, function(e){
    var _old = $(this)[0].src.split("/image/")[1];
    var _new = _old.split("_")[1];
    $(this)[0].src = $(this)[0].src.replace(_old, _new);
});