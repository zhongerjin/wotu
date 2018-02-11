$(".modal .btn_cent").mCustomScrollbar({
    setWidth:false,
    setHeight:false,
    setTop:0,
    setLeft:0,
    axis:"y",
    scrollbarPosition:"inside",
    scrollInertia:950,
    autoDraggerLength:true,
    autoHideScrollbar:false,
    autoExpandScrollbar:false,
    alwaysShowScrollbar:0,
    snapAmount:null,
    snapOffset:0,
    mouseWheel:{
        enable:true,
        scrollAmount:"auto",
        axis:"y",
        preventDefault:false,
        deltaFactor:"auto",
        normalizeDelta:false,
        invert:false,
        disableOver:["select","option","keygen","datalist","textarea"]
    },
    scrollButtons:{
        enable:false,
        scrollType:"stepless",
        scrollAmount:"auto"
    },
    keyboard:{
        enable:true,
        scrollType:"stepless",
        scrollAmount:"auto"
    },
    contentTouchScroll:25,
    advanced:{
        autoExpandHorizontalScroll:false,
        autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
        updateOnContentResize:true,
        updateOnImageLoad:true,
        updateOnSelectorChange:false,
        releaseDraggableSelectors:false
    },
    theme:"light",
    callbacks:{
        onInit:false,
        onScrollStart:false,
        onScroll:false,
        onTotalScroll:false,
        onTotalScrollBack:false,
        whileScrolling:false,
        onTotalScrollOffset:0,
        onTotalScrollBackOffset:0,
        alwaysTriggerOffsets:true,
        onOverflowY:false,
        onOverflowX:false,
        onOverflowYNone:false,
        onOverflowXNone:false
    },
    live:false,
    liveSelector:null
});
$('.modal')
.on('show.bs.modal', function (){
        $('html').css('overflow', 'hidden');
        $('body').css('overflow', 'hidden');
        // scrollTo = $('body').scrollTop();
        // $('body').css("position", "fixed");
    })
.on('hide.bs.modal', function (){
        // Also if you are using multiple modals (cascade) - additional check
        if ($('.modal.in').length == 1) {
            $('html').css('overflow', 'scroll');
            $('body').css('overflow', 'scroll');
            // $('body').css("position", "static");
            // $('body').animate({scrollTop: scrollTo}, 0);
        }
    });